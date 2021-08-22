import React, { useState } from "react";
// import SorryPic from "../../static/sorry.svg";
import Stepper from '../Stepper'

const SlideBarCard = ({ itemData }) => {
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
            src={itemData.image != null ? itemData.image : ''}
            alt="ImgData"
          />
          <Stepper itemData={itemData}/>
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
