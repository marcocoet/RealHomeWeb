import signupSchema from "../schema/signup.schema";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../reducers/signup.reducer";
import { useForm } from "../hooks";
import Form from "../common/components/Form";
import { ErrorMessage, Field } from "formik";

export default function SignUpForm() {
  const dispatch = useDispatch();

  const isSavingUserSignup = useSelector(
    ({ createUser }) => createUser?.isSavingUserSignup
  );

  const { isValid, values } = useForm("signupForm");

  return (
    <Form
      observe
      name="signupForm"
      initialValues={{
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
      }}
      validationSchema={signupSchema}
    >
      {() => (
        <>
          <div className="flex, flex-col gap-5 md:flex-row">
            <div>
              <label type="text" name="username">
                Username
              </label>
              <Field type="username" name="username" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" id="form_email_id" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" id="form_password_id" />
            </div>
            <div>
              <label htmlFor="passwordConfirmation">Confirm Password</label>
              <Field type="password" name="passwordConfirmation" />
              <ErrorMessage
                name="passwordConfirmation"
                id="form_passwordConfirmation_id"
              />
            </div>
            <button
              type="submit"
              disabled={isSavingUserSignup}
              onClick={async () => {
                if (!isValid) return;

                await dispatch(createUser(values));
              }}
            >
              Sign Up
            </button>
          </div>
        </>
      )}
    </Form>
  );
}
