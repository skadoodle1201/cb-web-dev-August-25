import React, { useState } from "react";
import { signup } from "../utility/helper";
import ErrorComponent from "./ErrorComponent";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../redux/user.slice";

const SignupModal = ({ showModal, setShowModal, onOpenLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationError, setValidationError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (formEvent) => {
    formEvent.preventDefault();

    const sanitizedName = name.trim();
    const sanitizedEmail = email.toLowerCase().trim();
    const sanitizedPass = password.trim();
    const sanitizedConfirmPass = confirmPassword.trim();
    const invalidMessage = [];
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (!sanitizedName) {
      invalidMessage.push("Name is required");
    }

    if (!sanitizedEmail || !emailRegex.test(sanitizedEmail)) {
      invalidMessage.push("Email is invalid");
    }

    if (!sanitizedPass || !passRegex.test(sanitizedPass)) {
      invalidMessage.push("Password is invalid");
    }

    if (sanitizedPass !== sanitizedConfirmPass) {
      invalidMessage.push("Passwords do not match");
    }

    if (invalidMessage.length) {
      setValidationError(invalidMessage.join(", "));
      return;
    }

    const userDetails = await signup(
      sanitizedName,
      sanitizedEmail,
      sanitizedPass,
    );

    dispatch(setUserDetails(userDetails));

    setShowModal(false);
  };

  return (
    <div id="signup-modal" className={showModal ? "modal modal-show" : "modal"}>
      <div className="modal-content">
        <button
          className="close"
          type="button"
          aria-label="Close sign up modal"
          onClick={() => {
            setShowModal(false);
          }}
        >
          &times;
        </button>
        <div className="login-modal-body">
          <h2 className="modal-title">Create your account</h2>
          <p className="modal-subtitle">
            Sign up and start sketching right away.
          </p>
          {validationError && <ErrorComponent message={validationError} />}
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="signup-name" className="login-label">
              Name
            </label>
            <input
              id="signup-name"
              className="login-input"
              type="text"
              value={name}
              placeholder="Your name"
              onChange={(e) => {
                setValidationError(null);
                setName(e.target.value);
              }}
            />

            <label htmlFor="signup-email" className="login-label">
              Email
            </label>
            <input
              id="signup-email"
              className="login-input"
              type="text"
              value={email}
              placeholder="name@example.com"
              onChange={(e) => {
                setValidationError(null);
                setEmail(e.target.value);
              }}
            />

            <label htmlFor="signup-password" className="login-label">
              Password
            </label>
            <input
              id="signup-password"
              className="login-input"
              type="password"
              value={password}
              placeholder="At least 8 characters"
              onChange={(e) => {
                setValidationError(null);
                setPassword(e.target.value);
              }}
            />

            <label htmlFor="signup-confirm-password" className="login-label">
              Confirm password
            </label>
            <input
              id="signup-confirm-password"
              className="login-input"
              type="password"
              value={confirmPassword}
              placeholder="Repeat your password"
              onChange={(e) => {
                setValidationError(null);
                setConfirmPassword(e.target.value);
              }}
            />

            <button className="login-submit" type="submit">
              Sign up
            </button>
          </form>

          <p className="auth-switch-copy">
            Already have an account?{" "}
            <button
              className="auth-switch-btn"
              type="button"
              onClick={onOpenLogin}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
