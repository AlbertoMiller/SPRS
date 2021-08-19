import React from "react";
import { useItemsState } from "../../Providers/Providers";
import SlideBarCard from "./SlideBarCard";
function SlideBar() {
  const items = useItemsState();
  return items.map((item, index) => (
    <SlideBarCard itemData={item} key={index} />
  ));
}

export default SlideBar;
