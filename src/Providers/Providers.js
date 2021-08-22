import React, { createContext, useState,useEffect } from "react";
import axios from 'axios';

const ItemsContextState = createContext();
const setItemsContextState = createContext();
function Providers({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const axiosBusinesses = () => {
        return (async () => {
            try {
                await axios.get("http://fakestoreapi.com/products").then((res) => {
                    const products = res.data;
                    setItems(products.map(i=>({...i,count:0})));
                });
            } catch (error) {
                await axios
                    .get("https://jsonplaceholder.typicode.com/users")
                    .then((res) => {
                        const products = res.data;
                        setItems(products.map(i=>({...i,count:0})));
                      });
                console.log(error);
            }
        })();
    }
    axiosBusinesses();
}, [setItems]);

  return (
    <ItemsContextState.Provider value={items}>
      <setItemsContextState.Provider value={setItems}>
        {children}
      </setItemsContextState.Provider>
    </ItemsContextState.Provider>
  );
}
function useItemsState() {
  return React.useContext(ItemsContextState);
}
function useSetItemsState() {
  return React.useContext(setItemsContextState);
}
export { useItemsState, useSetItemsState };
export default Providers;
