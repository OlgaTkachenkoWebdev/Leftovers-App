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
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [error, setError] = useState("");

  const invalidFormMessage = validate(emailReg, name, passwordReg);

  const register = (event) => {
    event.preventDefault();
    const data = { email: emailReg, name: name, password: passwordReg };

    if (invalidFormMessage) {
      setError(invalidFormMessage);
    } else {
      axios
        .post("/signup", data)
        .then(() => {
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    }

  };
  return (
    <>
    <Form className="form" onSubmit={register}>
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
          value={emailReg}
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={passwordReg}
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          placeholder="Password"
        />
      </Form.Group>

      <div className="btn-div">
        <Button variant="primary" id="form-btn" type="submit">
          <p>Sign Up</p>
        </Button>
      </div>
      <div className="link-div">
        <Link to="/login" className="link">
          Already have an account? <b>Login</b>
        </Link>
      </div>
    <Alert key={"danger"} variant={"danger"} className="form-alert">
      {error}
    </Alert>
    </Form>
    </>
  );
}

export default SignUpForm;
