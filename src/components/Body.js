import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import '../App.css'

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
        setListOfRestraunt(
            json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

    };
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>
                Looks like you're offline!! Please check your internet connection;
            </h1>
        );
    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="shadow-lg">
            <div className="flex-container">
                <div className="px-2 py-2">
                    <input type="text" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        // onKeyDown={()=>{
                        //     const filterRestaurant = listOfRestaurants.filter((res) =>
                        //     res.data.name.toLowerCase().includes(searchText.toLowerCase())
                        // );

                        // setFilteredRestaurant(filterRestaurant); 
                        // }}
                        className="border border-solid border-black" />
                    <button className="px-4 rounded-xl py-2 m-4 bg-purple-300"
                        onClick={() => {
                            const filterRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurant(filterRestaurant);
                        }}
                    >Search</button>
                </div>
                <div className='px-2 py-2'>
                    <button className="px-4 py-2 m-4 rounded-xl bg-purple-300" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4
                        );
                        setFilteredRestaurant(filteredList);
                        console.log(filteredList)

                    }}>Top Rated Restaurants</button>
                </div>
                {/* <div className='px-2 py-2'>
                 <input  className="border border-solid border-black"  value={loggedInUser}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }} />
                </div> */}
                <div className='px-2 py-2'>
                    <button className="px-4 py-2 m-4 rounded-xl bg-purple-300" onClick={() => {
                        setFilteredRestaurant(listOfRestaurants);
                    }}>Clear</button>
                </div>
            </div>
            <div className='flex-container'>
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant?.info.id} to={"/restaurant/" + restaurant?.info.id}>
                            <RestaurantCard key={restaurant?.info.id} resData={restaurant?.info} />
                        </Link>))
                }
            </div>
        </div>
    )
}