import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  const boxShadowStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  };

  const { logIn } = useContext(AuthContext);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error.message);
        // setError(error.message);
      });
  };
  return (
    <div
      className="mt-5 w-50 mx-auto border px-5 py-3 rounded "
      style={boxShadowStyle}
    >
      <h2 className="text-center fw-bold">Login Page</h2>
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
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
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" className="px-4 py-2">
          <span className="fs-6">Login</span>
        </Button>
        <br />
        <Form.Text className="text-muted">
          You have not an Account? <Link to="/signup">SignUp</Link>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Login;
