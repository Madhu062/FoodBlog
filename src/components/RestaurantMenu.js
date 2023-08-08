import React, { useState } from 'react'
import { useParams } from 'react-router'
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { AccordionSummary, Accordion, Divider, Typography, AccordionDetails } from '@mui/material';
import { CDN_URL } from '../utils/constants';
import { Rating } from '@mui/material';
import Switch from '@mui/material/Switch';
import '../App.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RestaurantCategory from './RestaurantCategory';

function RestaurantMenu() {
    const { resId } = useParams();
    const [veg, setVeg] = useState([])
    const resInfo = useRestaurantMenu(resId);
    const [checked, setChecked] = React.useState(false);
    const [showIndex, setShowIndex] = useState(null);
    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating } =
        resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
    const handleChange = (event) => {
        setChecked(event.target.checked);
        if (checked === false) {
            const filteredList = itemCards.filter((res) =>

                res.card.info.itemAttribute.vegClassifier === "VEG"
            );
            setVeg(filteredList)

        }

    };


    return checked === false ? (<div className='px-8 shadow-lg'>
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
            {category.map((c, index) => (<RestaurantCategory data={c?.card?.card}
        
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
            />))}


        </div>

    </div>) : (<div className='px-8 shadow-lg'>
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
            {category.map((c, index) => (<RestaurantCategory data={c?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
            />))}


        </div>

    </div>)


}

export default RestaurantMenu
