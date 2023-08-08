import React, { useState } from 'react'
import { CDN_URL } from '../utils/constants';
import { Divider } from '@mui/material';

function ItemList({ items }) {

    return  (
        <div >{items.map((item) =>
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
        )}</div>
    ) 

}

export default ItemList