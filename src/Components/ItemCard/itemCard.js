import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useSetCounterState } from "../../Providers/Providers";
import SorryPic from "../../static/sorry.svg";
const ItemCard = ({ itemData }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [count, setCount] = useState(0);
  const setGlobalCounter = useSetCounterState();
  // const globalCounter = useCounterState();
  itemData.counter = count;
  const [counterRequest, setCounterRequest] = useState([
    {
      id: itemData.id,
      counter: count,
    },
  ]);

  const pluseClicked = () => {
    setCounterRequest((prev) =>
      prev.map((item) =>
        item.id === itemData.id ? { ...item, counter: count + 1 } : item
      )
    );
    setCount(count + 1);
  };
  const subtractClicked = () => {
    setCounterRequest((prev) =>
      prev.map((item) =>
        item.id === itemData.id ? { ...item, counter: count - 1 } : item
      )
    );
    setCount(count - 1);
  };
  const byClick = () => {
    if (count > 0) {
      setGlobalCounter(itemData.counter);

      return (
        <div
          className={
            itemData.image != null
              ? " counterBox noSelect"
              : "counterBox  ReCounterBox"
          }
        >
          <subtract
            class="subtractCircle smallSubtractCircle noSelect"
            style={{ cursor: "pointer" }}
            onClick={subtractClicked}
          >
            -
          </subtract>

          <div className=" counterNumber noSelect">
            {itemData.counter > 0 && itemData.counter < 100
              ? itemData.counter
              : itemData.counter > 99
              ? setCount(99)
              : itemData.counter < 1
              ? setCount(0)
              : null}
          </div>
          <pluse
            class="pluseCircle smallPluseCircle noSelect"
            style={{ cursor: "pointer" }}
            onClick={pluseClicked}
          >
            +
          </pluse>
        </div>
      );
    } else if (count < 1) {
      return (
        <pluse
          class={
            itemData.image != null
              ? "pluseCircle noSelect"
              : "pluseCircle noSelect RePositionPluse"
          }
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
              className={
                itemData.image != null
                  ? "cardImages"
                  : "cardImages withoutPadding"
              }
              src={itemData.image != null ? itemData.image : SorryPic}
              style={{ padding: "unset !important" }}
            />
            <pluse>{byClick()}</pluse>
          </div>
          <Card.Body className="cardBody">
            <Card.Title
              className="cardTitle"
              style={{ WebkitBoxOrient: "vertical" }}
            >
              {itemData.title != null ? itemData.title : itemData.name}
            </Card.Title>
            <br />
            <Card.Text style={{ fontWeight: "bolder" }}>
              $
              {itemData.price != null
                ? itemData.price
                : itemData.address.zipcode}
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
              src={itemData.image != null ? itemData.image : SorryPic}
            />
          </cardImageArea>
          <Card.Title
            className="modalCardTitle cardTitle"
            style={{ WebkitBoxOrient: "vertical" }}
          >
            {itemData.title != null ? itemData.title : itemData.name}
          </Card.Title>
          <pluse className="modalPluse">{byClick()}</pluse>
        </Modal.Body>
        <Modal.Header closeButton>
          <Card.Body>
            <div>Description:</div>
            <br />
            <div>
              {itemData.description != null
                ? itemData.description
                : itemData.email}
            </div>
          </Card.Body>
        </Modal.Header>
      </Modal>
    </>
  );
};
export default ItemCard;
