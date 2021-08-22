import React from "react";
import { useItemsState } from "../../Providers/Providers";
import SlideBarCard from "./SlideBarCard";
function SlideBar() {
  const items = useItemsState();
  return items.map((item) => (
    <SlideBarCard itemData={item} key={item.id} />
  ));
}

export default SlideBar;
