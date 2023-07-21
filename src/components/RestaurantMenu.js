import React from 'react'
import { useParams } from 'react-router'
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { Divider } from '@mui/material';
import { CDN_URL } from '../utils/constants';
import { Rating } from '@mui/material';

function RestaurantMenu() {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating } =
        resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className='px-8'>
            <img className='w-[1500px] py-8 h-[600px]' src={CDN_URL + cloudinaryImageId} alt="logo" />
            <h1 className='font-bold py-4 text-7xl'>{name}</h1>
            <h2 className='font-medium  text-lg'>
                {cuisines.join(", ")} - {costForTwoMessage}
            </h2>
            <Rating name="read-only" precision={0.5}
                value={avgRating} readOnly />

            <div className='w-[800px] flex-row'>
                {itemCards.map((item) => (
                    <div className='bg-gray-100' >
                        <div className='py-2' key={item.card.info.id}>
                            <img className='rounded-lg w-[300px] h-[250px]' src={CDN_URL + item.card.info.imageId} alt="logo" />

                        </div>
                        <div >
                            {item.card.info.name}
                        </div>
                        <div >
                            Cost -{" Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                        </div>
                        <div >{item.card.info.description}</div>
                        <div> {item.card.info.ratings.aggregatedRating.rating}</div>
                        <div>  <Divider /></div>

                    </div>

                ))}
            </div>
        </div>
    );

}

export default RestaurantMenu
