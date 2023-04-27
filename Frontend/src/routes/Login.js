import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/SignUp-LogIn.css";

import Col from "react-bootstrap/Col";

import LoginForm from "../components/Auth/LoginForm";
import Footer from "../components/Footer";

function Login() {
  return (
    <div className="login-page">
      <div className="row g-0">
        <Col id="message-container">
          <div className="align-self-center" id="message">
            <p>
              <b>Reduce food waste</b>
            </p>
            <p>
              <b>with</b>
            </p>
            <p>
              <b>Right🥘vers</b>
            </p>
          </div>
        </Col>
        <Col id="login-form">
          <LoginForm />
        </Col>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
