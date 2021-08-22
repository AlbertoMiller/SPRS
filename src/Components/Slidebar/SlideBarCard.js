import React, { useEffect, useState } from "react";
import { useSetGlobalCounterCountextState } from "../../Providers/Providers";
import SorryPic from "../../static/sorry.svg";
const SlideBarCard = ({ itemData }) => {
  const [count, setCount] = useState(itemData.counter);
  const setGlobalCounter = useSetGlobalCounterCountextState();
  let isChanged = Boolean;

  const pluseClicked = () => {
    setCount(count + 1);
    isChanged = true;
  };
  const subtractClicked = () => {
    setCount(count - 1);
    isChanged = true;
  };
  const delClicked = () => {
    itemData.counter = 0;
  };
  const byClick = () => {
    if (!isChanged) {
      console.log("in the isChange False");
      setCount(itemData.counter);
      if (itemData.counter > 0) {
        console.log("in the itemData.counter > 0");
        return (
          <div
            className={
              itemData.image != null
                ? "counterBox noSelect slidebar-ReCounterBox"
                : "counterBox slidebar-ReCounterBox"
            }
          >
            <div
              className="subtractCircle smallSubtractCircle noSelect slidebar-smallSubtractCircle"
              style={{ cursor: "pointer" }}
              onClick={() => subtractClicked()}
            >
              -
            </div>

            <div className=" counterNumber noSelect">
              {/* {itemData.counter > 0 && itemData.counter < 100
                ? itemData.counter
                : itemData.counter > 99
                ? setCount(99)
                : itemData.counter < 1
                ? setCount(0)
                : null} */}
              {count > 0 && count < 100
                ? count
                : count > 99
                ? setCount(99)
                : count < 1
                ? setCount(0)
                : null}
            </div>
            <div
              className="pluse pluseCircle smallPluseCircle noSelect slidebar-pluseCircle sslidebar-mallPluseCircle"
              style={{ cursor: "pointer" }}
              onClick={() => pluseClicked()}
            >
              +
            </div>
          </div>
        );
      } else if (itemData.counter < 1) {
        console.log("in the itemData.counter < 1");
        return (
          <pluse
            className={
              itemData.image != null
                ? "pluseCircle noSelect slidebar-pluseCircle"
                : "pluseCircle noSelect RePositionPluse slidebar-pluseCircle"
            }
            style={{ cursor: "pointer" }}
            onClick={() => pluseClicked()}
          >
            +
          </pluse>
        );
        // }
      }
    } else if (isChanged) {
      console.log("in the isChange True");
      setGlobalCounter((prev) => [
        ...prev ,
        { id: itemData.id, counter: count },
      ]);
      if (itemData.counter > 0) {
        console.log("in the itemData.counter > 0");
        return (
          <div
            className={
              itemData.image != null
                ? "counterBox noSelect slidebar-ReCounterBox"
                : "counterBox slidebar-ReCounterBox"
            }
          >
            <div
              className="subtractCircle smallSubtractCircle noSelect slidebar-smallSubtractCircle"
              style={{ cursor: "pointer" }}
              onClick={() => subtractClicked()}
            >
              -
            </div>

            <div className=" counterNumber noSelect">
              {/* {itemData.counter > 0 && itemData.counter < 100
                ? itemData.counter
                : itemData.counter > 99
                ? setCount(99)
                : itemData.counter < 1
                ? setCount(0)
                : null} */}
              {count > 0 && count < 100
                ? count
                : count > 99
                ? setCount(99)
                : count < 1
                ? setCount(0)
                : null}
            </div>
            <div
              className="pluse pluseCircle smallPluseCircle noSelect slidebar-pluseCircle sslidebar-mallPluseCircle"
              style={{ cursor: "pointer" }}
              onClick={() => pluseClicked()}
            >
              +
            </div>
          </div>
        );
      } else if (itemData.counter < 1) {
        console.log("in the itemData.counter < 1");
        return (
          <pluse
            className={
              itemData.image != null
                ? "pluseCircle noSelect slidebar-pluseCircle"
                : "pluseCircle noSelect RePositionPluse slidebar-pluseCircle"
            }
            style={{ cursor: "pointer" }}
            onClick={() => pluseClicked()}
          >
            +
          </pluse>
        );
        // }
      }
    }

    else if (itemData.counter !== count) {
      if (!isChanged) {
        setCount(itemData.counter);
        console.log(
          "false and count :" + count + "counter: " + itemData.counter
        );
      } else if (isChanged) {
        setGlobalCounter(count);
        console.log(
          "true and count :" + count + "counter: " + itemData.counter
        );
      }
    }
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
          <div className="slidebar-delete" onClick={() => delClicked()}>
            <i className="fa fa-times" />
          </div>
          <p className="slidebar-title cardTitle noSelect">
            {itemData.title != null ? itemData.title : itemData.name}
          </p>
          <p className="slidebar-price noSelect">
            ${itemData.price * itemData.counter}
          </p>
        </div>
      </div>
    </div>
  );
};
export default SlideBarCard;
