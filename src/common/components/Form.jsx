import React, { useEffect, useRef, forwardRef } from "react";
import PropTypes from "prop-types";

import { Formik, Form as FormikForm } from "formik";

import Debug from "./Debug";
import FormObserver from "./FormObserver";

const Form = forwardRef(
  (
    {
      children,
      className,
      debug,
      initialValues = {},
      name,
      observe,
      onSubmit = () => {},
      schema,
      submitForm,
      ...props
    },
    ref
  ) => {
    const formRef = useRef(null);

    useEffect(() => {
      if (submitForm) {
        formRef.current.submitForm();
      }
    }, [submitForm]);

    return (
      <Formik
        innerRef={(innerRef) => {
          formRef.current = innerRef;

          if (ref) {
            if (typeof ref === "function") {
              ref?.(innerRef);
            } else {
              ref.current = innerRef;
            }
          }
        }}
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
        {...props}
      >
        {(props) => (
          <FormikForm className={className}>
            {children(props)}
            {debug && <Debug />}
            {observe && name ? <FormObserver name={name} /> : null}
          </FormikForm>
        )}
      </Formik>
    );
  }
);

Form.propTypes = {
  children: PropTypes.func,
  className: PropTypes.string,
  debug: PropTypes.bool,
  initialValues: PropTypes.object,
  name: PropTypes.string,
  observe: PropTypes.bool,
  onSubmit: PropTypes.func,
  schema: PropTypes.object,
  submitForm: PropTypes.bool,
};

Form.displayName = "Form";

export default Form;
