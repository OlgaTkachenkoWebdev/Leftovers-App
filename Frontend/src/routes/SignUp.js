import SignUpForm from "../components/SignUpForm";
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp-LogIn.css"
import RootNavBar from '../components/RootNavBar';

function SignUp() {
  return (
    <div className='signup-page'>
      <RootNavBar />
      <div className='row g-0'>
        <Col id='message-container'>
          < div id='message'>
            <p>
              <b>Fit Cooking Back</b>
            </p>
            <p>
              <b>Into Your Schedule with</b>
            </p>
            <img src='./logo-blk.png' alt="leftovers-logo" height={40} />
          </div>
        </Col>
        <Col id='signup-form'>
          <SignUpForm />
        </Col>
      </div>
    </div>
  );
}
export default SignUp;