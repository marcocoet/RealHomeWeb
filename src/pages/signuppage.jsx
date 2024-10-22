import signupSchema from "../schema/signup.schema";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../reducers/signup.reducer";
import { useForm } from "../hooks";
import Form from "../common/components/Form";
import { ErrorMessage, Field } from "formik";
import './styles/signup.css'; // Updated the path to the correct CSS file
import { useState } from "react"; // Import useState for managing dropdown state

/**
 * SignUpForm component
 * Handles user sign up form submission
 */
export default function SignUpForm() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const dispatch = useDispatch();

  // Get isSavingUserSignup state from Redux store
  const isSavingUserSignup = useSelector(
    ({ createUser }) => createUser?.isSavingUserSignup
  );

  // Get form validation state and values
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
=======
    <div className="signup-container"> {/* Centering container */}
      <div className="signup-toggle" onClick={() => setIsOpen(!isOpen)}>
        <h2>Let&apos;s Get Started! 😊</h2> {/* Button to toggle dropdown */}
      </div>
>>>>>>> 7b0213f24aee9914bc6a34a54f6807aeb4937609

      {/* Dropdown content */}
      {isOpen && (
        <div className="signup-form">
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
                {/* Username field */}
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Field type="text" name="username" id="username" />
                </div>

                {/* Email field */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" id="email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>

                {/* Password field */}
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field type="password" name="password" id="password" />
                  <ErrorMessage name="password" component="div" className="error" />
                </div>

                {/* Password confirmation field */}
                <div className="form-group">
                  <label htmlFor="passwordConfirmation">Confirm Password</label>
                  <Field
                    type="password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                  />
                  <ErrorMessage
                    name="passwordConfirmation"
                    component="div"
                    className="error"
                  />
                </div>

                {/* Submit button */}
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

                {/* Footer links for sign-up */}
                <div className="signup-footer">
                  <p>
                    Already have an account? <a href="/login">Login</a>
                  </p>
                  <p>
                    <a href="/forgot-password">Forgot Password?</a>
                  </p>
                </div>

                {/* Social login options */}
                <div className="social-login">
                  <p>Or sign up with:</p>
                  <div className="social-buttons">
                    <button className="social-btn google">Google</button>
                    <button className="social-btn facebook">Facebook</button>
                  </div>
                </div>
              </>
            )}
          </Form>
        </div>
      )}
    </div>
  );
}
