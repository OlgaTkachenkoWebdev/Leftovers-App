import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';

import { validate } from "./helpers/validate";

function SignUpForm() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const register = (event) => {
    event.preventDefault();
    const data = { email: email, name: name, password: password };

    if (validate(email, "email")) {
      setError(validate(email, "email"));
    } else if (validate(password, "password")) {
      setError(validate(password, "password"));
    } else if (validate(name, "name")) {
      setError(validate(name, "name"));
    } else {
      axios
        .post("/signup", data)
        .then(() => {
          navigate("/home");
        })
        .catch((error) => {
          const errorMessage = error.response.data;
          setError(errorMessage);
        });
    }

  };
  return (
    <>
      <Form data-testid="signup-form" className="form" onSubmit={register}>
        <div className="form-label">
          <h4>Sign Up</h4>
        </div>
        <Form.Group className="mb-3 nameForm" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter full name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
        </Form.Group>

        <div className="btn-div">
          <Button data-testid="signup-btn" variant="primary" id="form-btn" type="submit">
            <p>Sign Up</p>
          </Button>
        </div>
        <div className="link-div">
          <Link to="/login" className="link">
            Already have an account? <b>Login</b>
          </Link>
        </div>
        {error && <Alert data-testid="error-message" key={"danger"} variant={"danger"} className="form-alert">{error}</Alert>}
      </Form>
    </>
  );
}

export default SignUpForm;
