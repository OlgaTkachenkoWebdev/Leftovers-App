import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';

import { validate } from "./helpers/validate";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();

    if (validate(email, "email")) {
      setError(validate(email, "email"));
    } else if (validate(password, "password")) {
      setError(validate(password, "password"));
    } else {
      axios
        .post("/login", {
          email: email,
          password: password,
        })
        .then(() => {
          navigate("/home");
        })
        .catch(function (error) {
          const errorMessage = error.response.data;
          setError(errorMessage);
        });
    }
  }

  return (
    <Form data-testid="login-form" className="form" onSubmit={loginUser}>
      <div className="form-label">
        <h4>Login</h4>
      </div>
      <Form.Group className="mb-3 emailForm" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
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
            setError("");
          }}
          placeholder="Password"
        />
      </Form.Group>

      <div className="btn-div">
        <Button data-testid="login-btn" variant="primary" id="form-btn" type="submit">
          <p>Login</p>
        </Button>
      </div>
      <div className="link-div">
        <Link to="/" className="link">
          Don't already have an account? Click here to <b>Sign Up.</b>
        </Link>
      </div>
      {error && <Alert data-testid="error-message" key={"danger"} variant={"danger"} className="form-alert">{error}</Alert>}
    </Form>
  );
}

export default LoginForm;
