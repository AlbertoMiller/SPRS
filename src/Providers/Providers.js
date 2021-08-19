import React, { createContext, useState } from "react";
const ItemsCountextState = createContext();
const setItemsCountextState = createContext();
function Providers({ children }) {
  const [items, setItems] = useState([]);
  return (
    <ItemsCountextState.Provider value={items}>
      <setItemsCountextState.Provider value={setItems}>
        {children}
      </setItemsCountextState.Provider>
    </ItemsCountextState.Provider>
  );
}
function useItemsState() {
  return React.useContext(ItemsCountextState);
}
function useSetItemsState() {
  return React.useContext(setItemsCountextState);
}
export { useItemsState, useSetItemsState };
export default Providers;
