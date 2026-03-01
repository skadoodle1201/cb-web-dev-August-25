import React, { useState } from "react";
import { login } from "../utility/helper";
import ErrorComponent from "./ErrorComponent";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../redux/user.slice";

const LoginModal = ({ showModal, setShowModal, onOpenSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (formEvent) => {
    formEvent.preventDefault();

    const santizedEmail = email.toLowerCase().trim();
    const santizedPass = password.trim();
    const invalidMessage = [];
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!santizedEmail || !emailRegex.test(santizedEmail)) {
      invalidMessage.push("Email is invalid");
    }

    if (!santizedPass || !passRegex.test(santizedPass)) {
      invalidMessage.push("Password is invalid");
    }

    if (invalidMessage.length) {
      setValidationError(invalidMessage.join(","));
      return;
    }

    const userDetails = await login(email, password);
    if (!userDetails) {
      setValidationError("Unable to login. Please verify your credentials.");
      return;
    }

    dispatch(setUserDetails(userDetails));

    setShowModal(false);
  };

  return (
    <div id="modal" className={showModal ? "modal modal-show" : "modal"}>
      <div className="modal-content">
        <button
          className="close"
          type="button"
          aria-label="Close login modal"
          onClick={() => {
            setShowModal(false);
          }}
        >
          &times;
        </button>
        <div className="login-modal-body">
          <h2 className="modal-title">Welcome back</h2>
          <p className="modal-subtitle">Login to continue drawing.</p>
          {validationError && <ErrorComponent message={validationError} />}
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="login-email" className="login-label">
              Email
            </label>
            <input
              id="login-email"
              className="login-input"
              type="text"
              value={email}
              placeholder="name@example.com"
              onChange={(e) => {
                setValidationError(null);
                setEmail(e.target.value);
              }}
            />

            <label htmlFor="login-password" className="login-label">
              Password
            </label>
            <input
              id="login-password"
              className="login-input"
              type="password"
              value={password}
              placeholder="At least 8 characters"
              onChange={(e) => {
                setValidationError(null);
                setPassword(e.target.value);
              }}
            />

            <button className="login-submit" type="submit">
              Login
            </button>
          </form>

          <p className="auth-switch-copy">
            New here?{" "}
            <button
              className="auth-switch-btn"
              type="button"
              onClick={onOpenSignup}
            >
              Create an account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
