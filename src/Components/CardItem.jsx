import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function CardItem({ itemData }) {
  return (
    <div>
      <Row>
        {itemData.length > 1 ? (
          itemData.map((item) => {
            return (
              <Col sm="12" className="mb-3"    key={item.id}>
                <Card       
                  className="d-flex flex-row"
                  style={{ background: " #F8F8F8" }}
         
                >
                  <Card.Img className="img-item" src={item.imgUrl} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div className="item-title"> {item.title}</div>
                      <div className="item-price">{item.price}</div>
                    </Card.Title>
                    <Card.Text className="py-2">
                      <div className="item-description">{item.description}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h3> لا يوجد اصناف</h3>
        )}
      </Row>
    </div>
  );
}

export default CardItem;
