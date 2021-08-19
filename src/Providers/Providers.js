import React, { createContext, useState } from "react";
// import Axois from "./Axois";
const CountCountextState = createContext();
const SetCountCountextState = createContext();
const ItemsCountextState = createContext();
const SetItemsCountextState = createContext();
function Providers({ children }) {
  const [items, setItems] = useState([]);
  const [globalCounter, setGlobalCounter] = useState([]);
  // const [counterRequest, setCounterRequest] = useState(0);
  return (
    <ItemsCountextState.Provider value={items}>
      <SetItemsCountextState.Provider value={setItems}>
        <CountCountextState.Provider value={globalCounter}>
          <SetCountCountextState.Provider value={setGlobalCounter}>
            {children}
          </SetCountCountextState.Provider>
        </CountCountextState.Provider>
      </SetItemsCountextState.Provider>
    </ItemsCountextState.Provider>
  );
}
function useCounterState() {
  return React.useContext(CountCountextState);
}
function useSetCounterState() {
  return React.useContext(SetCountCountextState);
}
function useItemsState() {
  return React.useContext(ItemsCountextState);
}
function useSetItemsState() {
  return React.useContext(SetItemsCountextState);
}

export { useCounterState, useItemsState, useSetItemsState, useSetCounterState };
export default Providers;
