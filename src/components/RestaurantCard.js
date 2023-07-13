import { CDN_URL } from "../utils/constants";
const styleCard = {
    backgroundColor: "#f0f0f0"
  }
function RestaurantCard({resData})   {
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.data;
    return (
      <div className='res-card' style={styleCard}>  
        <img className='biryani' src={CDN_URL + cloudinaryImageId} alt="logo" />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} starts</h4>
        <h4>{costForTwo /100}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    )
  }

  export default RestaurantCard