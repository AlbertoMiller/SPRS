import axios from 'axios';
import { React, useEffect, useState } from 'react'
// import axios from "axios"
import ItemsCard from "../Components/ItemCard/ItemCard"
import { useItemsState, useSetItemsState } from '../Providers/Providers'
function Home() {
    // const [items, setItem] = useState([]);
    // const [errorItems, setErrorItems] = useState();
    const [searchboxintelligence, setsearchboxintelligence] = useState('')
    const items = useItemsState();
    const setItems = useSetItemsState()
    useEffect(() => {
        const axiosBusinesses = () => {
            return (async () => {
                try {
                    await axios.get("http://fakestoreapi.com/products").then((res) => {
                        const products = res.data;
                        setItems(products);
                    });
                } catch (error) {
                    await axios
                        .get("https://jsonplaceholder.typicode.com/users")
                        .then((res) => {
                            const products = res.data;
                            setItems(products);
                        });
                    console.log(error);
                    // setItem([]);
                    // setErrorItems("server don't response call back later")
                }
            })();
        }
        axiosBusinesses();
    }, []);
    return (
        <div className="home">
            <input type="text"
                placeholder="Search..."
                onChange={event => {
                    setsearchboxintelligence(event.target.value)
                }} />
            <div className="BoxCard">
                {items && items.filter((val) => {
                    const filterValueOne = val.title != null ? val.title : val.name;
                    const filterValueTwo = val.category != null ? val.category : val.email;

                    if (searchboxintelligence === "") {
                        return val
                    }
                    else if (filterValueOne.toLowerCase().includes(searchboxintelligence.toLowerCase())) {
                        return val
                    }
                    else if (filterValueTwo.toLowerCase().includes(searchboxintelligence.toLowerCase())) {
                        return val
                    }
                    return null
                }).map((item, index) => (
                    <ItemsCard itemData={item} key={index} />

                ))}
                {/* <div>{errorItems} </div> */}
            </div>
        </div>
    )


}

export default Home
