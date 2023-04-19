import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { authContext } from "../providers/AuthProvider";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
        login(response.data.username, response.data.userid);
        window.localStorage.setItem(
          "user_info",
          JSON.stringify({
            name: response.data.username,
            id: response.data.userid,
          })
        );

        navigate("/home");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Form className="form" onSubmit={loginUser}>
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
        <Button variant="primary" id="form-btn" type="submit">
          <p>Login</p>
        </Button>
      </div>
      <div className="link-div">
        <Link to="/" className="link">
          Don't already have an account? Click here to <b>Sign Up.</b>
        </Link>
      </div>
    </Form>
  );
}

export default LoginForm;
