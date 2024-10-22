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
        first_name: "",
        last_name: "",
        password: "",
        confirm_password: "",
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
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" id="form_email_id" />
            </div>
            <div>
              <label htmlFor="first_name">First name</label>
              <Field type="text" name="first_name" id="first_name"></Field>
              <ErrorMessage name="first_name" id="form_first_name_id" />
            </div>
            <div>
              <label htmlFor="last_name">Last name</label>
              <Field type="text" name="last_name" id="last_name"></Field>
              <ErrorMessage name="last_name" id="form_last_name_id" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password" id="form_password_id" />
            </div>
            <div>
              <label htmlFor="passwordConfirmation">Confirm Password</label>
              <Field
                type="password"
                name="confirm_password"
                id="confirm_password"
              />
              <ErrorMessage
                name="confirm_password"
                id="form_confirm_password_id"
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
