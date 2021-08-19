import React, { useState } from "react";
import { useCounterState } from "../../Providers/Providers";
import SorryPic from "../../static/sorry.svg";
const SlideBarCard = ({ itemData }) => {
  const globalCounter = useCounterState();
  //   console.log(
  //     "your id is :" +
  //       globalCounter.map((countes) => countes.id) +
  //       " your counter:" +
  //       globalCounter.map((countes) => countes.counter)
  //   );
  console.log(globalCounter)
  const [count, setCount] = useState(0);
  const [counterRequest, setCounterRequest] = useState([
    {
      id: itemData.id,
      counter: count,
    },
  ]);
  //   const globalId = globalCounter.map((countes) => countes.id);
  //   const counterId = counterRequest.map((num) => num.id);

  //   setCount(globalCounter.map((countes) => countes.counter))
  const byClick = () => {
    if (
    //   globalCounter.map((countes) => countes.counter)
      count >
      0 /*&& counterRequest.counter === globalCounter.counter */
    ) {
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
            {/* {count > 0 && count < 100
              ? count
              : count > 99
              ? setCount(99)
              : count < 1
              ? setCount(0)
              : null} */}
            {itemData.counter}
            {/* {globalCounter.map((countes) => countes.counter)} */}
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
    } else if (
      //   globalCounter.map((countes) => countes.counter) <
      count < 1
      /*&& counterRequest.counter === globalCounter.counter */
    ) {
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
    //  else {
    //   setCounterRequest({
    //     id: itemData.id,
    //     counter: (counterRequest.counter = globalCounter.counterّ),
    //   });
    // }
  };
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
