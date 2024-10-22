import loginSchema from "../schema/login.schema";
import { useSelector, useDispatch } from "react-redux";
import { logUserIn } from "../reducers/login.reducer";
import { useForm } from "../hooks";
import Form from "../common/components/Form";
import { ErrorMessage, Field } from "formik";

export default function LogininPage() {
  const dispatch = useDispatch();

  const isUserLoggingIn = useSelector(
    ({ logUserIn }) => logUserIn?.isUserLoggingIn
  );

  const { isValid, values } = useForm("loguserin");

  return (
    <Form
      observe
      name="loguserin"
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={loginSchema}
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
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password" id="form_password_id" />
            </div>

            <button
              type="submit"
              disabled={isUserLoggingIn}
              onClick={async () => {
                if (!isValid) return;

                await dispatch(logUserIn(values));
              }}
            >
              Log in
            </button>
          </div>
        </>
      )}
    </Form>
  );
}
