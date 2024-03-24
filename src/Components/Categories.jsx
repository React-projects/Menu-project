import { Col, Row } from "react-bootstrap";

function Categories({ filterByCategory }) {
  const onFilter = (cat) => {
    filterByCategory(cat);
  };
  return (
    <div>
      <Row className="my-2 mb-5">
        <Col sm="12">
          <div className=" title  d-flex justify-content-center text-center">
            <div>
              <button
                onClick={() => onFilter("الكل")}
                style={{ border: "1px solid #b45b35" }}
                className="btn mx-2"
              >
                الكل
              </button>
              <button
                onClick={() => onFilter("فطار")}
                style={{ border: "1px solid #b45b35" }}
                className="btn mx-2"
              >
                فطار
              </button>
              <button
                onClick={() => onFilter("غدا")}
                style={{ border: "1px solid #b45b35" }}
                className="btn mx-2"
              >
                غداء{" "}
              </button>
              <button
                onClick={() => onFilter("عشاء")}
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
