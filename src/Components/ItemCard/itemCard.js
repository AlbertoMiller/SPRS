import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
const ItemCard = ({ itemData }) => {
  var myString = itemData.description;
  var stringLength = myString.length;
  console.log(stringLength);
  //   const [readMore, setReadMore] = useState([]);
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore && stringLength > 81 ?  text.slice(0,81) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };
  //   setReadMore(itemData.description);
  return (
    // <div>
    //     {itemData.price}
    // </div>
    <cards className={"cards"}>
      <Card style={{ width: "18rem" }} className={"card"}>
        <Card.Img variant="top" src={itemData.image} />
        <Card.Body>
          <Card.Title>{itemData.title}</Card.Title>
          <Card.Text className={"container"}>
            <ReadMore style={{ lineHeight: 9 }}>
              {itemData.description}
            </ReadMore>
          </Card.Text>
          <br />
          <Card.Text>{itemData.price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </cards>
  );
};
export default ItemCard;
