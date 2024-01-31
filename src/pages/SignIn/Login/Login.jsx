import React, { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const { logIn, resetPassword } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const handleReserPassword = (event) => {
    const emaill = emailRef.current.value;
    console.log(emaill);
    if (!emaill) {
      alert("Please provide valid email and reset your password");
      return;
    }
    resetPassword(emaill)
      .then(() => {
        alert("Please cheak your email");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="mt-5 mx-auto border px-5 py-3 rounded w-75 shadow-lg p-3 mb-5 bg-body-tertiary rounded ">
      <h2 className="text-center fw-bold">Login Page</h2>
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            ref={emailRef}
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Form.Text className="text-muted">
            Forget Password? Please
            <Button onClick={handleReserPassword} variant="link">
              {" "}
              Reset Password
            </Button>
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" className="px-4 py-2">
          <span className="fs-6">Login</span>
        </Button>
        <br />
        <Form.Text className="text-muted">
          You have not an Account? <Link to="/signup">SignUp</Link>
        </Form.Text>
      </Form>
      <p className="text-danger">{error}</p>
    </div>
  );
};

export default Login;
