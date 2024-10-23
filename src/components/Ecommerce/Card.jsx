import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import MyImage from "../../assets/shopping.png";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Card() {
  const [state, setState] = useState([]);

  useEffect(() => {
    // Fetching images from an API
    let x = axios.get("https://fakestoreapi.com/products");
    x.then((data) => {
      setState(data.data.slice(0, 4));
    }).catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* Navbar  */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={MyImage}
              alt="E-commerce Logo"
              width="70"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-4 my-lg-2" navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="/productcard">Product</Nav.Link> 
            </Nav>
            {/* <Form >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Bootstrap Carousel */}
      <Container className="my-4">
        <Carousel controls={false}>
          {state.length > 0 &&
            state.map((item, index) => (
              <Carousel.Item key={index} interval={1000}>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  style={{ height: "500px", objectFit: "contain" }}
                />
              </Carousel.Item>
            ))}
        </Carousel>
      </Container>
    
    </>
  );
}

export default Card;
