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
    <div className="signup-container"> {/* Centering container */}
      <div className="signup-toggle" onClick={() => setIsOpen(!isOpen)}>
        <h2>Let&apos;s Get Started! 😊</h2> {/* Button to toggle dropdown */}
      </div>

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
