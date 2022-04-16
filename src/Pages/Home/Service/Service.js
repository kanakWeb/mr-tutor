import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";

const Service = ({ service }) => {
  const { name, price, img, description } = service;
  return (
    <div className="col">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          /* width='100px' height='100px '*/ src={img}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
