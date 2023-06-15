import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import "./Spinner.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function ShowSpinner() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Spinner animation="border" className="spinner" />
        </Col>
      </Row>
    </Container>
  );
}

export default ShowSpinner;