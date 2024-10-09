import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useFormikContext } from "formik";
import { useDispatch } from "react-redux";

import {
  clearFormProperties,
  setFormProperties,
} from "../../reducers/forms.reducers";

const DELAY = 750;

const FormObserver = ({ name }) => {
  const dispatch = useDispatch();

  const { dirty, isValid, values } = useFormikContext();

  const timeoutIsValidRef = useRef();
  const timeoutValuesRef = useRef();

  useEffect(() => {
    dispatch(setFormProperties({ name, properties: { dirty } }));
  }, [dirty]);

  useEffect(() => {
    clearTimeout(timeoutIsValidRef.current);
    timeoutIsValidRef.current = setTimeout(() => {
      dispatch(setFormProperties({ name, properties: { isValid } }));
    }, DELAY);
  }, [isValid]);

  useEffect(() => {
    clearTimeout(timeoutValuesRef.current);
    timeoutValuesRef.current = setTimeout(() => {
      dispatch(setFormProperties({ name, properties: { values } }));
    }, DELAY);
  }, [values]);

  useEffect(() => {
    return () => dispatch(clearFormProperties({ name }));
  }, []);

  return null;
};

FormObserver.propTypes = {
  name: PropTypes.string,
};

export default FormObserver;
