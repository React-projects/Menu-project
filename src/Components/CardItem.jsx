import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function CardItem() {
  return (
    <div>
      <Row>
        <Col sm="12" className="mb-3">
          <Card className="d-flex flex-row" style={{background:' #F8F8F8'}}>
            <Card.Img className="img-item" src="/images/1.png" />
            <Card.Body>
              <Card.Title className="d-flex justify-content-between">
                <div className="item-title"> Card Title</div>
                <div className="item-price"> 50 polpol</div>
              </Card.Title>
              <Card.Text className="py-2">
                <div className="item-description"></div>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CardItem;
