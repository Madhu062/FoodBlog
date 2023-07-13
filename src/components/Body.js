import RestaurantCard from "./RestaurantCard"
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export default function Body() {
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);

    };

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.avgRating > 4);
                    setListOfRestraunt(filteredList);

                }}>Top Rated Restaurants</button>
                {/* <button className="clear-btn" onClick={() => {
                    setListOfRestraunt(resObj)
                }}> Clear</button> */}
                <div className="search">
                    <input type="text" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        className="search-box" />
                    <button
                        onClick={() => {
                            console.log(searchText);
                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.data.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >Search</button>
                </div>
            </div>
            <div className='res-container'>
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link to={"/restaurant/" + restaurant.data.id}>
                            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                        </Link>))
                }
            </div>
        </div>
    )
}