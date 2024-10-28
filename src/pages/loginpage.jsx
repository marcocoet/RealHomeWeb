import loginSchema from "../schema/login.schema";
import { useSelector, useDispatch } from "react-redux";
import { logUserIn } from "../reducers/login.reducer";
import { useForm } from "../hooks";
import Form from "../common/components/Form";
import { ErrorMessage, Field } from "formik";
import "./styles/LoginPage.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  const isUserLoggedIn = useSelector((state) => state.login.isUserLoggedIn);
  const isUserLoggingIn = useSelector((state) => state.login.isUserLoggingIn);

  if (isUserLoggedIn) {
    navigate(from, { replace: true }); // Use replace to avoid going back to login
  }

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
