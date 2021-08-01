import { React, useState, useEffect } from 'react'
import ItemsCard from "../Components/ItemCard/itemCard"
function Home() {
    const [items, setItem] = useState([]);
    const [searchboxintelligence, setsearchboxintelligence] = useState('')
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://fakestoreapi.com/products')
                const itemData = (await response.json());
                setItem(itemData)
            }
            catch (error) {
                console.log(error)
                setItem([]);
            }
        })
            ();
    }, [])
    return (
        <home className="home">
            <input type="text"
                placeholder="Search..."
                onChange={event => {
                    setsearchboxintelligence(event.target.value)
                }} />
            <boxCard>
                {items && items.filter((val) => {
                    if (searchboxintelligence === "") {
                        return val
                    }
                    else if (val.title.toLowerCase().includes(searchboxintelligence.toLowerCase())) {
                        return val
                    }
                    else if (val.category.toLowerCase().includes(searchboxintelligence.toLowerCase())) {
                        return val
                    }
                    return null
                }).map((item, index) => (
                    <ItemsCard itemData={item} key={index} />
                ))}
            </boxCard>
        </home>
    )


}

export default Home
