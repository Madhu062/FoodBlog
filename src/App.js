import './App.css';
import React from "react";
import download from './download.png';

const styleCard = {
  backgroundColor: "#f0f0f0"
}
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className='logo' src={download} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>

        </ul>
      </div>
    </div>
  )
};
const RestaurantCard = ({ resData }) => {
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.data;
  return (
    <div className='res-card' style={styleCard}>

      <img className='biryani' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} starts</h4>
      <h4>{costForTwo /100}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  )
}
const resObj =[
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "418389",
      "name": "Auntie Fung's",
      "uuid": "49b76eeb-4daa-420a-9323-120673a39310",
      "city": "1",
      "area": "Indiranagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "rwwc0xufjuiityzgpfme",
      "cuisines": [
        "Chinese",
        "Thai",
        "Asian"
      ],
      "tags": [
        
      ],
      "costForTwo": 60000,
      "costForTwoString": "₹600 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 4.5,
      "slugs": {
        "restaurant": "auntie-fung’s-indiranagar-indiranagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "NO.4009, 1ST FLOOR, 100FT ROAD, HAL 2ND STAGE, INDIRANAGAR BANGALORE, INDIA, Sarvagna Nagar , B.B.M.P East, Karnataka-560008",
      "locality": "HAL 2nd Stage",
      "parentId": 1290,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7367089~p=1~eid=00000189-314d-17ef-05b1-7a52006c011a~srvts=1688749283311",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "418389",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 4.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "428",
      "name": "Biryani Pot",
      "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
      "city": "1",
      "area": "Btm Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
      "cuisines": [
        "North Indian",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 19,
      "minDeliveryTime": 19,
      "maxDeliveryTime": 19,
      "slaString": "19 MINS",
      "lastMileTravel": 1.899999976158142,
      "slugs": {
        "restaurant": "biryani-pot-madiwala-junction-btm",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
      "locality": "Maruti Nagar",
      "parentId": 21798,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.8 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "428",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 1.899999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "229",
      "name": "Meghana Foods",
      "uuid": "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "xqwpuhgnsaf18te7zvtv",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 1.399999976158142,
      "slugs": {
        "restaurant": "meghana-foods-5th-block-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",
      "locality": "5th Block",
      "parentId": 635,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "229",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 1.399999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "10823",
      "name": "California Burrito",
      "uuid": "fd9dd048-93cf-4ffb-a389-1f628f9d8a35",
      "city": "1",
      "area": "Indiranagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "b3lmeehefsg2lprmv9wr",
      "cuisines": [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 5.699999809265137,
      "slugs": {
        "restaurant": "california-burrito-2nd-stage-indiranagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "23, 3rd Main, 1st B Cross, 2nd Stage, Bangalore",
      "locality": "Indiranagar",
      "parentId": 1252,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7300300~p=4~eid=00000189-314d-17ef-05b1-7a53006c046d~srvts=1688749283311",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "10823",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 5.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "121603",
      "name": "Kannur Food Point",
      "uuid": "51983905-e698-4e31-b0d7-e376eca56320",
      "city": "1",
      "area": "Tavarekere",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
      "cuisines": [
        "Kerala",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "kannur-food-point-btm",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
      "locality": "SG Palya",
      "parentId": 20974,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "121603",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "337335",
      "name": "Kannur food kitchen",
      "uuid": "c70b61bc-0f68-4e24-996b-749fbf295c35",
      "city": "1",
      "area": "BTM Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "a27weqanhnszqiuzsoik",
      "cuisines": [
        "Kerala",
        "Biryani",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 2.9000000953674316,
      "slugs": {
        "restaurant": "kannur-food-kitchen-btm-btm",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India",
      "locality": "1st  Stage",
      "parentId": 114756,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.9 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "337335",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 2.9000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.7",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "667571",
      "name": "Popeyes",
      "uuid": "5fdc0488-c767-4322-83f4-f761e622253f",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "61f2bd5d86640a55419ffe358af97b03",
      "cuisines": [
        "American",
        "Burgers",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 1.399999976158142,
      "slugs": {
        "restaurant": "popeyes-80-feet-road-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Site No 9, PID No 67-7-9, 7th Block, 80 feet Road, Koramangala",
      "locality": "80 feet Road",
      "parentId": 397044,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7397720~p=16~eid=00000189-314d-17ef-05b1-7a57006c105e~srvts=1688749283311",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "667571",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 1.399999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "59593",
      "name": "Al Daaz",
      "uuid": "c189b92c-d842-4595-9a1f-ff85bd67bc2a",
      "city": "1",
      "area": "Hsr Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "rxsvhvcdip9dbfdijzk9",
      "cuisines": [
        "American",
        "Arabian",
        "Chinese",
        "Desserts",
        "Mughlai",
        "North Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 39,
      "minDeliveryTime": 39,
      "maxDeliveryTime": 39,
      "slaString": "39 MINS",
      "lastMileTravel": 4.400000095367432,
      "slugs": {
        "restaurant": "al-daaz-hsr-hsr",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#64 & 65, 27th Main Rd, 1st Sector HSR Layout - 560102",
      "locality": "HSR",
      "parentId": 21640,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "59593",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "lastMileTravel": 4.400000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "56589",
      "name": "Roti-wala.com",
      "uuid": "257a0889-b243-4252-b84a-6c9f1760d58f",
      "city": "1",
      "area": "BTM Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "ptetuqkrhmpd8tiqiztg",
      "cuisines": [
        "North Indian",
        "Home Food",
        "Thalis",
        "Chinese",
        "Punjabi",
        "South Indian",
        "Ice Cream"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 4,
      "slugs": {
        "restaurant": "roti-wala-lavelle-road-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#239, 7TH Cross, Btm Stage 2. NS Palya, 560076",
      "locality": "2nd Stage",
      "parentId": 415860,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "56589",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 4,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "425",
      "name": "Hotel Empire",
      "uuid": "9fd1a436-595a-4737-9f10-0a20c9f2e93c",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "un4omn7rcunkmlw6vikr",
      "cuisines": [
        "North Indian",
        "Kebabs",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "slaString": "33 MINS",
      "lastMileTravel": 1.2999999523162842,
      "slugs": {
        "restaurant": "hotel-empire-5th-block-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "103, Industrial Area, 5th Block, Near Jyothi Nivas College, Koramangala 5th Block, Bangalore",
      "locality": "Koramangala",
      "parentId": 475,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "425",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "17036",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "uuid": "1e3e90a8-2897-4b6e-b7fc-260524697270",
      "city": "1",
      "area": "HSR Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "ykkoaqqefmycmwsjmxcm",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 4.699999809265137,
      "slugs": {
        "restaurant": "leon-grill-3rd-sector-hsr",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "No.17, Ground Floor, 18th Cross Road, 3rd Sector, HSR Layout, Bangalore.",
      "locality": "HSR Layout",
      "parentId": 371281,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7403820~p=13~eid=00000189-314d-17ef-05b1-7a56006c0d04~srvts=1688749283311",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "17036",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 4.699999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "94703",
      "name": "Sri Punjabi Dhaba",
      "uuid": "244943ac-cb6b-439f-9a09-687af66615b1",
      "city": "1",
      "area": "BTM Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "i53hrycmcn2oehrojag0",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Chinese",
        "Kebabs"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 2.5,
      "slugs": {
        "restaurant": "sri-punjabi-dhaba-bangalore-btm",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Opposite 11th Cross 20th Main Rd,beside sri balaji wood Old Madiwala, Cashier Layout,  1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029",
      "locality": "Cashier Layout",
      "parentId": 21426,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "94703",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 2.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.0",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "709170",
      "name": "Imperio Restaurant",
      "uuid": "b831b957-c7b1-4fb4-bb7c-b07ce0c72cb1",
      "city": "1",
      "area": "HSR",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "a1629b9c7f59577a55411e94425c6d99",
      "cuisines": [
        "Chinese",
        "South Indian",
        "North Indian",
        "Continental",
        "Desserts",
        "Kerala",
        "Andhra",
        "Beverages",
        "Mughlai",
        "Seafood",
        "Hyderabadi",
        "Healthy Food",
        "Arabian",
        "Biryani",
        "Burgers",
        "Barbecue",
        "Oriental"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "slaString": "37 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "imperio-restaurant-hsr-hsr-2",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "imperio restaurant , 495, 17th Cross Rd, Parangi Palaya, Sector 2, HSR Layout, Bengaluru, Karnataka",
      "locality": "Sector 2",
      "parentId": 5610,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "709170",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "5934",
      "name": "Burger King",
      "uuid": "ac56f2ac-71d3-4978-9513-b3aa68e25463",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "slaString": "31 MINS",
      "lastMileTravel": 1.600000023841858,
      "slugs": {
        "restaurant": "burger-king-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Unit No. 1, Davar Atrium, Corporation No. 118, Koramangala Industrial Area 7th Block, Bangalore 560095",
      "locality": "7th Block",
      "parentId": 166,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "5934",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 1.600000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "32911",
      "name": "Salt Mango Tree",
      "uuid": "74f3f32c-0302-4091-b930-9ac7cdb8a296",
      "city": "1",
      "area": "Indiranagar",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "dop9h8a7rjuab7j9ddy3",
      "cuisines": [
        "Kerala",
        "South Indian",
        "Seafood",
        "Biryani",
        "Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 41,
      "minDeliveryTime": 41,
      "maxDeliveryTime": 41,
      "slaString": "41 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "salt-mango-tree-indiranagar-indiranagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "971, 5th Cross, 12th A main, HAL II Stage, Indiranagr Bangalore 560008",
      "locality": "HAL 2nd Stage",
      "parentId": 799,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5500,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7403171~p=19~eid=00000189-314d-17ef-05b1-7a58006c1379~srvts=1688749283311",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "25% OFF",
        "subHeader": "UPTO ₹65",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "32911",
        "deliveryTime": 41,
        "minDeliveryTime": 41,
        "maxDeliveryTime": 41,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  }
];

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {
          resObj.map((restaurant) => (<RestaurantCard key={restaurant.data.id} resData={restaurant} />))
        }
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
