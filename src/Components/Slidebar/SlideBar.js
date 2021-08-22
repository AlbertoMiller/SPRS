import React from "react";
import { useItemsState } from "../../Providers/Providers";
import SlideBarCard from "./SlideBarCard";
function SlideBar() {
  const items = useItemsState();
  return items.map((item, index) =>
  
    item.isValue ? <SlideBarCard itemData={item} key={index} /> : null
  );
}

export default SlideBar;
