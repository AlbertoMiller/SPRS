import React from "react";
import { Card, Button } from "react-bootstrap";
const ItemCard = ({ itemData }) => {
  return (
    <cards className="cards">
      <Card style={{ width: "18rem" }} className={"card"}>
        <Card.Img variant="top" className={"cardImages"} src={itemData.image} />
        <Card.Body>
          <Card.Title
            className="cardTitle"
            style={{ WebkitBoxOrient: "vertical" }}
          >
            {itemData.title}
          </Card.Title>
          <br />
          <Card.Text>${itemData.price}</Card.Text>
          <div className="positionButton">
            <Button variant="primary" className="Btn btn right">
              details
            </Button>
          </div>
        </Card.Body>
      </Card>
    </cards>
  );
};
export default ItemCard;
