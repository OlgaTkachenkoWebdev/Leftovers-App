import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/About.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";

import Footer from "../components/Footer";


function About() {
  return (
    <div className='about-page'>
      <Container className="about-container">
        <Col className="about-col">
          <h3 className="about-header"> Welcome to Right🥘vers! </h3>
          <p className="indent">We are your ultimate kitchen companion, providing creative and delicious recipes based on the ingredients you have in your fridge. Gone are the days of staring blankly at your leftovers, wondering what to do with them. With <b>RightOvers</b>, you can transform those forgotten ingredients into culinary masterpieces!</p>
          <h4 className="about-header"> Our Mission</h4>
          <p className="indent">Our mission at <b>RightOvers</b> is to reduce food waste and help you make the most out of your leftovers. We believe that reducing food waste is not only good for your wallet, but also for the planet. By utilizing leftovers, you're doing your part in conserving resources and minimizing your environmental footprint.</p>
          <p className="indent">Get ready to impress your family and friends with your newfound culinary prowess, all while making a positive impact on the environment. Happy cooking!</p>
          <form action="/" className="started-btn-form">
            <Button type="submit" className="started-btn">Get started!</Button>
          </form>
          <h3 className="about-header-creator"> Meet the creator! </h3>
          <Row className="creator-row">
            <Col xs={4} >
              <img src={process.env.PUBLIC_URL + "/olga.jpg"} width="75%" />
            </Col>
            <Col xs={8}>
              <p className="indent">Meet <b>Olga</b>, the creative mind behind RightOvers! Hailing from Vancouver, Canada, Olga is a aspiring full-stack web developer. With a passion for coding and a love for food, Olga came up with the idea for RightOvers as a way to combine her two interests and make a positive impact on reducing food waste.</p>
            </Col>
          </Row>
          <p className="indent">As a food enthusiast, Olga understands the frustration of having leftovers in the fridge with no idea how to use them up. That's why she put her coding skills to work and developed an innovative recipe generator that takes the guesswork out of cooking with leftovers. Her vision is to empower people to make the most out of their ingredients and create delicious meals with what they already have in their kitchens.</p>
          <p>Join Olga on this flavorful and sustainable journey, and get ready to elevate your leftovers to gourmet status!</p>
        </Col>
      </Container>
      <Footer />
    </div>
  );
}
export default About;