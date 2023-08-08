import { CDN_URL } from "../utils/constants";

function RestaurantCard({resData})   {
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData;
    const {deliveryTime} = resData?.sla
 
    return (
      <div className='m-4 p-4 rounded-lg flex-wrap bg-gray-200 hover:bg-gray-300 w-[400px] h-[450px] break-words'>  
        <img className=' rounded-lg w-[350px]' src={CDN_URL + cloudinaryImageId} alt="logo" />
        <h3 className="font-bold text-xl py-2">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} starts</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    )
  }

  export default RestaurantCard