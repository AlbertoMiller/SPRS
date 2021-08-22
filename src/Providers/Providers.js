import React, { createContext, useState } from "react";
const ItemsCountextState = createContext();
const SetItemsCountextState = createContext();
const PaymentCountextState = createContext();
const SetPaymentCountextState = createContext();
const GlobalCounterCountextState = createContext();
const SetGlobalCounterCountextState = createContext();
function Providers({ children }) {
  const [items, setItems] = useState([]);
  const [globalCounter, setGlobalCounter] = useState([{ id: 0, counter: 0 }]);
console.log("Test "+ globalCounter.map((item)=> item.id+" "+item.counter))
  const [payment, setPayment] = useState([0]);
  return (
    <ItemsCountextState.Provider value={items}>
      <SetItemsCountextState.Provider value={setItems}>
        <GlobalCounterCountextState.Provider value={globalCounter}>
          <SetGlobalCounterCountextState.Provider value={setGlobalCounter}>
            <PaymentCountextState.Provider value={payment}>
              <SetPaymentCountextState.Provider value={setPayment}>
                {children}
              </SetPaymentCountextState.Provider>
            </PaymentCountextState.Provider>
          </SetGlobalCounterCountextState.Provider>
        </GlobalCounterCountextState.Provider>
      </SetItemsCountextState.Provider>
    </ItemsCountextState.Provider>
  );
}
function useItemsState() {
  return React.useContext(ItemsCountextState);
}
function useSetItemsState() {
  return React.useContext(SetItemsCountextState);
}
function usePaymentState() {
  return React.useContext(ItemsCountextState);
}
function useSetPaymentState() {
  return React.useContext(SetItemsCountextState);
}
function useGlobalCounterCountextState() {
  return React.useContext(GlobalCounterCountextState);
}
function useSetGlobalCounterCountextState() {
  return React.useContext(SetGlobalCounterCountextState);
}
export {
  useItemsState,
  useSetItemsState,
  usePaymentState,
  useSetPaymentState,
  useGlobalCounterCountextState,
  useSetGlobalCounterCountextState,
};
export default Providers;
