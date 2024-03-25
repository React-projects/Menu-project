import { Col, Row } from "react-bootstrap";

function Categories({ filterByCategory, allCategories }) {
  const onFilter = (cat) => {
    filterByCategory(cat);
  };
  return (
    <div>
      <Row className="my-2 mb-5">
        <Col sm="12">
          <div className=" title  d-flex justify-content-center text-center">
            {allCategories.length >= 1 ? (allCategories.map((cat,index)=>{
              return(
                <div key={index}>
                <button
                  onClick={() => onFilter(cat)}
                  style={{ border: "1px solid #b45b35" }}
                  className="btn mx-2"
                >
                  {cat}
                </button>
              </div>

              )

            })
              
            ) : (
              <h4>لايوجد تصنيفات</h4>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Categories;
