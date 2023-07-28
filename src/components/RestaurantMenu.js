import React, { useState } from 'react'
import { useParams } from 'react-router'
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { Divider } from '@mui/material';
import { CDN_URL } from '../utils/constants';
import { Rating } from '@mui/material';
import Switch from '@mui/material/Switch';
import '../App.css'

function RestaurantMenu() {
    const { resId } = useParams();
    const [veg, setVeg] = useState([])
    const resInfo = useRestaurantMenu(resId);
    const [checked, setChecked] = React.useState(false);


    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating } =
        resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    const handleChange = (event) => {
        setChecked(event.target.checked);
        if (checked === false) {
            const filteredList = itemCards.filter((res) =>

                res.card.info.itemAttribute.vegClassifier === "VEG"
            );
            setVeg(filteredList)

        }

    };



    return checked === false ?
        <div className='px-8'>
            <img className='w-[1800px] py-8 h-[800px]' src={CDN_URL + cloudinaryImageId} alt="logo" />
            <div className='flex-containerMenu'>
                <div className='font-bold py-4 text-7xl'>{name}</div>
                <div className='font-medium  text-lg'>
                    {cuisines.join(", ")} - {costForTwoMessage}
                </div>
                <div>
                    <Rating name="read-only" precision={0.5}
                        value={avgRating} readOnly />
                </div>
                <div className='font-semibold'>       Veg Only         <Switch
                    onChange={
                        handleChange
                    }
                />
                </div>

                <div className='w-[800px]'>
                    {itemCards.map((item) => (
                        <div key={item.card.info.id} >
                            <div className='flex-containerMenu bg-slate-50'>
                                <div className='py-2' key={item.card.info.id}>
                                    <img className=' w-[300px] h-[250px]' src={CDN_URL + item.card.info.imageId} alt="logo" />
                                </div>
                                <div >
                                    {item.card.info.name}
                                </div>
                                <div >
                                    Cost -{" Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                </div>
                                <div >{item.card.info.description}</div>
                                <div>Ratings - {item.card.info.ratings.aggregatedRating.rating}</div>
                            </div>

                            <div className='py-2'>  <Divider /></div>


                        </div>


                    ))}
                </div>
            </div>

        </div>
        : (
            <div className='px-8'>
                <img className='w-[1800px] py-8 h-[800px]' src={CDN_URL + cloudinaryImageId} alt="logo" />
                <div className='flex-containerMenu'>
                    <div className='font-bold py-4 text-7xl'>{name}</div>
                    <div className='font-medium  text-lg'>
                        {cuisines.join(", ")} - {costForTwoMessage}
                    </div>
                    <div>
                        <Rating name="read-only" precision={0.5}
                            value={avgRating} readOnly />
                    </div>
                    <div className='font-semibold'>       Veg Only         <Switch
                        onChange={
                            handleChange
                        }
                    />
                    </div>

                    <div className='w-[800px] '>
                        {veg.map((item) => (
                            <div key={item.card.info.id} >
                                <div className='flex-containerMenu bg-slate-50'>
                                    <div className='py-2' key={item.card.info.id}>
                                        <img className=' w-[300px] h-[250px]' src={CDN_URL + item.card.info.imageId} alt="logo" />
                                    </div>
                                    <div >
                                        {item.card.info.name}
                                    </div>
                                    <div >
                                        Cost -{" Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                                    </div>
                                    <div >{item.card.info.description}</div>
                                    <div>Ratings - {item.card.info.ratings.aggregatedRating.rating}</div>
                                </div>

                                <div className='py-2'>  <Divider /></div>


                            </div>

                        ))}
                    </div>
                </div>
            </div>
        );

}

export default RestaurantMenu
