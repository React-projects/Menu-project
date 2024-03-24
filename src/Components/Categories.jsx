import { Col, Row } from "react-bootstrap";

function Categories() {
  return (
    <div>
      <Row className="my-2 mb-5">
        <Col sm="12">
          <div className=" title  d-flex justify-content-center text-center">
            <div>
              <button
                style={{ border: "1px solid #b45b35" }}
                className="btn mx-2"
              >
                الكل
              </button>
              <button
                style={{ border: "1px solid #b45b35" }}
                className="btn mx-2"
              >
                فطار
              </button>
              <button
                style={{ border: "1px solid #b45b35" }}
                className="btn mx-2"
              >
                غداء{" "}
              </button>
              <button
                style={{ border: "1px solid #b45b35" }}
                className="btn mx-2"
              >
                عشاء
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Categories;
