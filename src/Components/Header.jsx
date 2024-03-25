import { useState } from "react";
import { Navbar, Nav, Form, Container } from "react-bootstrap";

function Header({ filterBySearch }) {
  const [searchValue, setSearchvalue] = useState(" ");
  const filterSearch = () => {
    filterBySearch(searchValue);
    setSearchvalue("");
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <div className="brand-color">مطعم جدبد</div>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="ابحث"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchvalue(e.target.value)}
              value={searchValue}
            />
            <button
              onClick={filterSearch}
              className=" btn-search mx-2"
              variant="outline-success"
            >
              ابحث
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
