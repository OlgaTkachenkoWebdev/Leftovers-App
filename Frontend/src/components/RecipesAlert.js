import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import "./RecipesAlert.css";

function RecipesAlert() {
  return (
    <Row className='alertRow'>
      <Col xs={10}>
        <Alert variant="success" className='alert'>
          <Alert.Heading>🔍 Looks like we can't find more recipes 🔎</Alert.Heading>
          <h5>
            <hr class='dotted'></hr>
            Please <b>edit your leftovers</b> or <b>change filters</b>
          </h5>
        </Alert>
      </Col>
    </Row >
  );
}

export default RecipesAlert;