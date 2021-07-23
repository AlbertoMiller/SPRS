import { React, useState, useEffect } from 'react'
import ItemsCard from "../Components/ItemCard/itemCard"
function Home() {
    const [items, setItem] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://fakestoreapi.com/products')
                const itemData = (await response.json());
                setItem(itemData)
            } catch (error) {
                console.log(error)
                setItem([]);
            }

        })
            ();
    }, [])
    return items && items.map((item, index) => (
        <ItemsCard itemData={item} key={index} />
    ))


}

export default Home
