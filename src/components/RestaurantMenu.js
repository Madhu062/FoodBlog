import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router'
import { MENU_API } from '../utils/constants'



function RestaurantMenu() {
    const [resInfo, setResInfo] = useState([])
    const [itemCards, setItemCards] = useState([])
const {resId} = useParams();

    useEffect(() => {
        fetchMenu()
    }, [])
    const fetchMenu = async () => {
        console.log(resInfo)
        const data = await fetch( MENU_API+resId

        );
        const json = await data.json();
        setResInfo(json?.data?.cards[0]?.card?.card?.info);
        setItemCards(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards)

    }
   console.log(itemCards)
    const { name, cuisines, costForTwoMessage } = resInfo;
//   const itf = itemCards[0]?.card?.info?.name
//   console.log(itf)
    return (
        <div className='menu'>

            <h1>{name}</h1>
            <h2>{cuisines}- {costForTwoMessage}</h2>
            <h2>Menu</h2>
            {itemCards.map((item) =><li key={item.card.info.id}>{item.card.info.name} - Rs.{(item.card.info.price)/100}</li> )}
        
        </div>
    );

}

export default RestaurantMenu
