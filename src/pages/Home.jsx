import { React, useState } from 'react'
import ItemsCard from "../Components/ItemCard/itemCard"
import { useItemsState } from '../Providers/Providers'
function Home() {

    const [searchBoxIntelligence, setSearchBoxIntelligence] = useState('')
    const items = useItemsState();

    return (
        <div className="home">
            <input type="text"
                placeholder="Search..."
                onChange={event => {
                    setSearchBoxIntelligence(event.target.value)
                }} />
            <div className="BoxCard">
                {items && items.filter((val) => {
                    const filterValueOne = val.title != null ? val.title : val.name;
                    const filterValueTwo = val.category != null ? val.category : val.email;

                    if (searchBoxIntelligence === "") {
                        return val
                    }
                    else if (filterValueOne.toLowerCase().includes(searchBoxIntelligence.toLowerCase())) {
                        return val
                    }
                    else if (filterValueTwo.toLowerCase().includes(searchBoxIntelligence.toLowerCase())) {
                        return val
                    }
                    return null
                }).map((item, index) => (
                    <ItemsCard itemData={item} key={index} />

                ))}
            </div>
        </div>
    )


}

export default Home
