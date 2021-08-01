import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
const ItemCard = ({ itemData }) => {
  // const [clicked, setClicked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [numberOfRequest, setNumberofRequest] = useState(0);
  const pluseClicked = () => {
    setNumberofRequest(numberOfRequest + 1);
  };
  const subtractClicked = () => {
    setNumberofRequest(numberOfRequest - 1);
  };
  function limitNumberWithinRange(num, min, max) {
    const MIN = min || 0;
    const MAX = max || 100;
    return Math.min(Math.max(numberOfRequest, MIN), MAX);
  }

  const byClick = () => {
    if (numberOfRequest > 0) {
      return (
        <counterBox>
          <subtract
            class="subtractCircle smallSubtractCircle noselect"
            style={{ cursor: "pointer" }}
            onClick={subtractClicked}
          >
            -
          </subtract>

          <counterNumber className="noselect">{limitNumberWithinRange()} </counterNumber>
          <pluse
            class="pluseCircle smallPluseCircle noselect"
            style={{ cursor: "pointer" }}
            onClick={pluseClicked}
          >
            +
          </pluse>
        </counterBox>
      );
    } else if (numberOfRequest <= 0) {
      return (
        <pluse
          class="pluseCircle noselect"
          style={{ cursor: "pointer" }}
          onClick={pluseClicked}
        >
          +
        </pluse>
      );
    }
  };

  return (
    <>
      <cards className="cards">
        <Card style={{ width: "18rem" }} className={"card"}>
          <div className="cardImageArea">
            <Card.Img
              variant="top"
              className={"cardImages"}
              src={itemData.image}
            />
            <pluse>{byClick()}</pluse>
          </div>
          <Card.Body>
            <Card.Title
              className="cardTitle"
              style={{ WebkitBoxOrient: "vertical" }}
            >
              {itemData.title}
            </Card.Title>
            <br />
            <Card.Text style={{ fontWeight: "bolder" }}>
              ${itemData.price}
            </Card.Text>
            <div className="positionButton">
              <Button
                variant="primary"
                className="Btn btn right"
                onClick={() => setShowDetails(true)}
              >
                details
              </Button>
            </div>
          </Card.Body>
        </Card>
      </cards>
      <Modal
        show={showDetails}
        onHide={() => setShowDetails(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="modalBox"
      >
        <Modal.Body>
          <cardImageArea className="cardImageArea modalCardImageArea">
            <Card.Img
              variant="top"
              className={"cardImages modalCardImages"}
              src={itemData.image}
            />
          </cardImageArea>
          <Card.Title
            className="modalCardTitle cardTitle"
            style={{ WebkitBoxOrient: "vertical" }}
          >
            {itemData.title}
          </Card.Title>
          <pluse className="modalPluse">{byClick()}</pluse>
        </Modal.Body>
        <Modal.Header closeButton>
          <Card.Body>
            <div>Description:</div>
            <br />
            <div>{itemData.description}</div>
          </Card.Body>
        </Modal.Header>
      </Modal>
    </>
  );
};
export default ItemCard;
