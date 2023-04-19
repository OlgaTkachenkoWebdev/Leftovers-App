import SignUpForm from "../components/SignUpForm";
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp-LogIn.css"
import WelcomeFooter from "../components/Footer";

function SignUp() {
  return (
    <div className='signup-page'>
      <div className='row g-0'>
        <Col id='message-container'>
          < div id='message'>
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
        <Col id='signup-form'>
          <SignUpForm />
        </Col>
      </div>
      <WelcomeFooter />
    </div>
  );
}
export default SignUp;