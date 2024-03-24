import { Col, Row } from "react-bootstrap";

function MainTitle() {
  return (
    <div>
      <Row>
        <Col sm="12">
          <div className=" title  d-flex justify-content-center text-center">
            قائمه الطعام
          </div>
          <div className="d-flex justify-content-center">
            <p className="underline"></p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MainTitle;
