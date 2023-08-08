import React, { useState } from 'react';
import { AccordionSummary, Accordion, Divider, Typography, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../App.css'
import ItemList from './ItemList';



function RestaurantCategory({ data, showItems, setShowIndex }) {
    const handleClick = () => {
        setShowIndex();
    };

 
    return (
        <div className='w-[800px]'>
            <Accordion onChange={handleClick}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header" >{data.title}({data.itemCards.length})</AccordionSummary>
                <AccordionDetails>
                    {showItems && <ItemList items={data.itemCards} />}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default RestaurantCategory