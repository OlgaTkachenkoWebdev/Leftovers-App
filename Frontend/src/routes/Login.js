import LoginForm from "../components/LoginForm";
import WelcomeFooter from "../components/Footer";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp-LogIn.css";

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
      <WelcomeFooter />
    </div>
  );
}
export default Login;
