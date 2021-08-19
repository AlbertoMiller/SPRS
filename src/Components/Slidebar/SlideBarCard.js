import React, { useState } from "react";
import SorryPic from "../../static/sorry.svg";
const SlideBarCard = ({ itemData }) => {
  const [count, setCount] = useState(0);
  const byClick = () => {
    if (itemData.counter > 0) {
      return (
        <div
          className={
            itemData.image != null
              ? "counterBox noSelect slidebar-ReCounterBox"
              : "counterBox slidebar-ReCounterBox"
          }
        >
          <subtract
            class="subtractCircle smallSubtractCircle noSelect slidebar-smallSubtractCircle"
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
            class="pluseCircle smallPluseCircle noSelect slidebar-pluseCircle sslidebar-mallPluseCircle"
            style={{ cursor: "pointer" }}
            onClick={pluseClicked}
          >
            +
          </pluse>
        </div>
      );
    } else if (itemData.counter < 1) {
      return (
        <pluse
          class={
            itemData.image != null
              ? "pluseCircle noSelect slidebar-pluseCircle"
              : "pluseCircle noSelect RePositionPluse slidebar-pluseCircle"
          }
          style={{ cursor: "pointer" }}
          onClick={pluseClicked}
        >
          +
        </pluse>
      );
    }
  };
  const pluseClicked = () => {
    setCount(count + 1);
  };
  const subtractClicked = () => {
    setCount(count - 1);
  };
  return (
    <div className="slidebar-cards">
      <div className="slidebar-card">
        <div className="slidebar-imageArea">
          <img
            className={
              itemData.image != null
                ? "slidebar-cardImages"
                : "slidebar-cardImages withoutPadding"
            }
            src={itemData.image != null ? itemData.image : SorryPic}
            alt="ImgData"
          />
          <div className="pluse">{byClick()}</div>
        </div>
        <div className="slidebar-bodyArea">
          <p className="slidebar-title cardTitle noSelect">
            {itemData.title != null ? itemData.title : itemData.name}
          </p>
          <p className="slidebar-price noSelect">{itemData.price}</p>
        </div>
      </div>
    </div>
  );
};
export default SlideBarCard;
