import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const boxShadowStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  };

  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    const photoUrl = form.photoUrl.value;
    console.log(name, email, password, photoUrl);

    if (password !== confirmPassword) {
      setError("Err: Your Pass did not match ");
      return;
    } else if (password.length < 6) {
      setError("Err: password length must be 6 or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("user has been create successfully");
        varificationEmail(result.user);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const varificationEmail = (user) => {
    sendEmailVerification(user)
      .then(() => {
        setVerificationSent(true);
        alert("Please varify email");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div
      className="mt-5 w-50 mx-auto border px-5 py-3 rounded "
      style={boxShadowStyle}
    >
      <h2 className="text-center fw-bold">Create an Account</h2>

      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type="text"
            name="photoUrl"
            placeholder="Photo url"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="px-4 py-2">
          <span className="fs-6">SignUp</span>
        </Button>
        <br />
        <Form.Text className="text-muted">
          Already have an Account? <Link to="/login">Login</Link>
        </Form.Text>
      </Form>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
    </div>
  );
};

export default SignUp;
