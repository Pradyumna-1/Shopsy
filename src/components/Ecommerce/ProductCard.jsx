import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import CardTitle from "react-bootstrap/esm/CardTitle";
const ProductCard = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    let x = axios.get("https://fakestoreapi.com/products");
    x.then((data) => {
      setState(data.data);
    }).catch((error) => console.log(error));
  }, []);
  return (
    <Row xs={1} md={4} className="g-4 p-3">
      {state.map((obj) => {
        let { id, title, image, price, category } = obj;

        return (
          <Col key={id} className="">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={image}
                style={{ height: "150px", objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>💲{price}</Card.Text>
                <Card.Text>{category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ProductCard;
