import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(    //this heading is not a tag, its an object 
// "h1", 
// {id:"heading"}, 
// "Hello World form React!");



//Component composition, React element, Jsx, React components- functional vs class etc..

const Header= () =>{
    return(
        <div className="header">
            <div className="logo-container"> 
                <img className="logo"src="https://static.vecteezy.com/system/resources/previews/017/504/075/non_2x/hot-burgers-logo-illustration-modern-burgers-emblem-art-vector.jpg"/>
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
    );

};


const AllResData= [
 
  {
    info: {
      id: "16064",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Viman Nagar",
      areaName: "Viman Nagar",
      costForTwo: "₹400 for two",
      cuisines: [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      avgRating: 4,
      parentId: "547",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 74,
        lastMileTravel: 10.4,
        serviceability: "SERVICEABLE",
        slaString: "70-75 mins",
        lastMileTravelString: "10.4 km",
        iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
        nextCloseTime: "2024-02-01 00:00:00",
        opened: true
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV2: {},
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-viman-nagar-pune-16064",
      type: "WEBLINK"
    }
  }
  ,
  {
      info: {
        id: 340851,
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Dhanori Road",
        areaName: "Vishrantwadi",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
        parentId: 721,
        avgRatingString: "4.1",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-02-01 02:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pizza-hut-dhanori-road-vishrantwadi-pune-340851",
        type: "WEBLINK"
      }
    }
    ,
{
      info: {
        id: "188935",
        name: "Theobroma",
        cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
        locality: "Viman Nagar",
        areaName: "Viman Nagar",
        costForTwo: "₹400 for two",
        cuisines: [
          "Bakery",
          "Desserts"
        ],
        avgRating: 4.5,
        parentId: "1040",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 49,
          lastMileTravel: 9.9,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "9.9 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-01-31 23:59:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/theobroma-viman-nagar-pune-188935",
        type: "WEBLINK"
      }
  }
    ,
{
     info: {
        id: "65583",
        name: "McDonald's",
        cloudinaryImageId: "405645b3118d83e89db4c65361e43733",
        locality: "Phoenix Market city",
        areaName: "Viman Nagar",
        costForTwo: "₹400 for two",
        cuisines: [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        avgRating: 4.4,
        parentId: "630",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 68,
          lastMileTravel: 10.4,
          serviceability: "SERVICEABLE",
          slaString: "65-70 mins",
          lastMileTravelString: "10.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-01-31 22:45:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹199"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mcdonalds-phoenix-market-city-viman-nagar-pune-65583",
        type: "WEBLINK"
      }
    }
    ,
    
    {
      info: {
        id: "8777",
        name: "Subway",
        cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
        locality: "VIMAN NAGAR",
        areaName: "Town Square Shopping Centre",
        costForTwo: "₹350 for two",
        cuisines: [
          "Healthy Food",
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages",
          "North Indian",
          "Indian",
          "Italian"
        ],
        avgRating: 4,
        parentId: "2",
        avgRatingString: "4.0",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 52,
          lastMileTravel: 8.9,
          serviceability: "SERVICEABLE",
          slaString: "50-55 mins",
          lastMileTravelString: "8.9 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-01-31 23:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹599",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/subway-viman-nagar-town-square-shopping-centre-pune-8777",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "33328",
        name: "Faasos - Wraps, Rolls & Shawarma",
        cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
        locality: "NEAR INDRAYANI NAGAR",
        areaName: "Bhosari",
        costForTwo: "₹200 for two",
        cuisines: [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        avgRating: 4.2,
        parentId: "21809",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 7.2,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "7.2 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-01-31 23:59:00",
          opened: true
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available"
                  }
                }
              ]
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-near-indrayani-nagar-bhosari-pune-33328",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "35788",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
        locality: "Dutta Mandir Chowk",
        areaName: "Viman Nagar",
        costForTwo: "₹200 for two",
        cuisines: [
          "Waffle",
          "Desserts",
          "Ice Cream"
        ],
        avgRating: 4.4,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 63,
          lastMileTravel: 9.7,
          serviceability: "SERVICEABLE",
          slaString: "60-65 mins",
          lastMileTravelString: "9.7 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-02-01 01:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-dutta-mandir-chowk-viman-nagar-pune-35788",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "12838",
        name: "Hotel Al Zaika",
        cloudinaryImageId: "l38zo8lr0bbmmw66hkwn",
        locality: "Weikfield Chowk",
        areaName: "Wadgaon Sheri",
        costForTwo: "₹500 for two",
        cuisines: [
          "Mughlai",
          "North Indian",
          "Chinese"
        ],
        avgRating: 4.1,
        parentId: "97829",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 65,
          lastMileTravel: 10.3,
          serviceability: "SERVICEABLE",
          slaString: "65-70 mins",
          lastMileTravelString: "10.3 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-01-31 23:59:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/hotel-al-zaika-weikfield-chowk-wadgaon-sheri-pune-12838",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "48332",
        name: "ROYCE' Chocolate",
        cloudinaryImageId: "654071511f2a6e2bc89f8abbeaef8ded",
        locality: "Viman Nagar",
        areaName: "Viman Nagar",
        costForTwo: "₹750 for two",
        cuisines: [
          "Desserts"
        ],
        avgRating: 4.9,
        parentId: "5168",
        avgRatingString: "4.9",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 60,
          lastMileTravel: 10.2,
          serviceability: "SERVICEABLE",
          slaString: "60-65 mins",
          lastMileTravelString: "10.2 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-01-31 21:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet"
            },
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg"
            }
          ]
        },
        select: true,
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png"
                  }
                },
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/royce-chocolate-viman-nagar-pune-48332",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "3165",
        name: "Eatsome- Wraps & Rolls",
        cloudinaryImageId: "e56240a4b58956f47a5a1f8392470fbe",
        locality: "Sakore Nagar",
        areaName: "Viman Nagar",
        costForTwo: "₹300 for two",
        cuisines: [
          "North Indian",
          "Street Food",
          "Biryani",
          "Snacks",
          "Beverages"
        ],
        avgRating: 4.2,
        parentId: "471587",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 55,
          lastMileTravel: 9.1,
          serviceability: "SERVICEABLE",
          slaString: "50-55 mins",
          lastMileTravelString: "9.1 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-02-01 00:30:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/eatsome-wraps-and-rolls-sakore-nagar-viman-nagar-pune-3165",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "50799",
        name: "Pind Punjab",
        cloudinaryImageId: "fu6hew6ih1h8bxgkipip",
        locality: "Konark Nagar",
        areaName: "Viman Nagar",
        costForTwo: "₹450 for two",
        cuisines: [
          "North Indian",
          "Indian",
          "Punjabi",
          "Chinese",
          "Biryani",
          "Thalis",
          "Mughlai",
          "Beverages",
          "Desserts"
        ],
        avgRating: 4.3,
        parentId: "4196",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 69,
          lastMileTravel: 9.3,
          serviceability: "SERVICEABLE",
          slaString: "65-70 mins",
          lastMileTravelString: "9.3 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-01-31 23:30:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/pind-punjab-konark-nagar-viman-nagar-pune-50799",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "7888",
        name: "Chili's American Grill & Bar",
        cloudinaryImageId: "gzdatent51xve06quegy",
        locality: "Viman Nagar",
        areaName: "Viman Nagar",
        costForTwo: "₹700 for two",
        cuisines: ["American", "Mexican"],
        avgRating: 3.8,
        parentId: "1870",
        avgRatingString: "3.8",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 81,
          lastMileTravel: 10.4,
          serviceability: "SERVICEABLE",
          slaString: "80-85 mins",
          lastMileTravelString: "10.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-01-31 23:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet"
            }
          ]
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {}
          }
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/chilis-american-grill-and-bar-viman-nagar-pune-7888",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "11607",
        name: "Mad Momos",
        cloudinaryImageId: "pw5iq9ufesy1m4yy68pw",
        locality: "Tingre Nagar",
        areaName: "Vishrantwadi",
        costForTwo: "₹200 for two",
        cuisines: ["Chinese", "Tibetan", "Nepalese", "Pizzas", "Snacks", "Beverages"],
        avgRating: 4.1,
        parentId: "610",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 48,
          lastMileTravel: 6.5,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "6.5 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-02-01 00:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/mad-momos-tingre-nagar-vishrantwadi-pune-11607",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "284460",
        name: "Smoke House Deli",
        cloudinaryImageId: "kye5srvtnjgikbqdiagd",
        locality: "Viman Nagar",
        areaName: "Viman Nagar",
        costForTwo: "₹800 for two",
        cuisines: ["American", "Italian"],
        avgRating: 4.1,
        parentId: "874",
        avgRatingString: "4.1",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 77,
          lastMileTravel: 10.4,
          serviceability: "SERVICEABLE",
          slaString: "75-80 mins",
          lastMileTravelString: "10.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-02-01 00:00:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet"
            }
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "brand",
              fontColor: "#7E808C"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "brand"
                  }
                }
              ]
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹200 OFF",
          subHeader: "ABOVE ₹999",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/smoke-house-deli-viman-nagar-pune-284460",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "66309",
        name: "Uncle's Chinese",
        cloudinaryImageId: "le6yt8pgom0gx9zi0bwa",
        locality: "Viman Nagar",
        areaName: "Viman Nagar",
        costForTwo: "₹450 for two",
        cuisines: ["Chinese"],
        avgRating: 4.2,
        parentId: "219488",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 58,
          lastMileTravel: 8.3,
          serviceability: "SERVICEABLE",
          slaString: "55-60 mins",
          lastMileTravelString: "8.3 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-02-01 02:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹399",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/uncles-chinese-viman-nagar-pune-66309",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "404219",
        name: "Crazy Cheesy",
        cloudinaryImageId: "08e14182422ec9399c65c9df84099434",
        locality: "Satyam Marg",
        areaName: "Viman Nagar",
        costForTwo: "₹400 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "American",
          "Italian"
        ],
        avgRating: 4,
        veg: true,
        parentId: "10638",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 57,
          lastMileTravel: 9.7,
          serviceability: "SERVICEABLE",
          slaString: "55-60 mins",
          lastMileTravelString: "9.7 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-01-31 23:59:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "ABOVE ₹1000",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/crazy-cheesy-satyam-marg-viman-nagar-pune-404219",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "61765",
        name: "Social",
        cloudinaryImageId: "sdcggvrq67mwdztr3lb5",
        locality: "Viman Nagar",
        areaName: "Viman Nagar",
        costForTwo: "₹500 for two",
        cuisines: [
          "Chinese",
          "Fast Food",
          "Biryani",
          "Pizzas",
          "Salads",
          "Kebabs",
          "Juices",
          "Desserts",
          "Beverages"
        ],
        avgRating: 3.8,
        parentId: "2146",
        avgRatingString: "3.8",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 75,
          lastMileTravel: 10.4,
          serviceability: "SERVICEABLE",
          slaString: "75-80 mins",
          lastMileTravelString: "10.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-02-01 00:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/social-viman-nagar-pune-61765",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "360054",
        name: "The Brooklyn Creamery - Healthy Ice Cream",
        cloudinaryImageId: "b1b35780a9b1dfeb26d680506d494eaa",
        locality: "Konark Nagar Road",
        areaName: "Viman Nagar",
        costForTwo: "₹200 for two",
        cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
        avgRating: 4.3,
        veg: true,
        parentId: "236673",
        avgRatingString: "4.3",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 50,
          lastMileTravel: 9.5,
          serviceability: "SERVICEABLE",
          slaString: "45-50 mins",
          lastMileTravelString: "9.5 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-02-01 00:00:00",
          opened: true
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "brand",
              fontColor: "#7E808C"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "brand"
                  }
                }
              ]
            }
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹599",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-konark-nagar-road-viman-nagar-pune-360054",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "31517",
        name: "Street Foods By Punjab Grill",
        cloudinaryImageId: "hssxfbymoq62thuhg0am",
        locality: "Viman Nagar",
        areaName: "Viman Nagar",
        costForTwo: "₹400 for two",
        cuisines: [
          "North Indian",
          "Kebabs",
          "Biryani",
          "Mughlai"
        ],
        avgRating: 3.6,
        parentId: "1345",
        avgRatingString: "3.6",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 80,
          lastMileTravel: 10.4,
          serviceability: "SERVICEABLE",
          slaString: "80-85 mins",
          lastMileTravelString: "10.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-01-31 22:45:00",
          opened: true
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description: "Gourmet"
            }
          ]
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Gourmet",
                    imageId: "newg.png"
                  }
                }
              ]
            },
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/street-foods-by-punjab-grill-viman-nagar-pune-31517",
        type: "WEBLINK"
      }
    }
    ,
    {
      info: {
        id: "243171",
        name: "BOSS Burger",
        cloudinaryImageId: "t3mjacitbch7x8zhuqw3",
        locality: "Phoenix Market city",
        areaName: "Viman Nagar",
        costForTwo: "₹500 for two",
        cuisines: [
          "Burgers",
          "American",
          "Fast Food",
          "Snacks"
        ],
        avgRating: 4.1,
        parentId: "8594",
        avgRatingString: "4.1",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 75,
          lastMileTravel: 10.4,
          serviceability: "SERVICEABLE",
          slaString: "70-75 mins",
          lastMileTravelString: "10.4 km",
          iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
          nextCloseTime: "2024-02-01 00:00:00",
          opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {}
          }
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL"
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {}
          }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/boss-burger-phoenix-market-city-viman-nagar-pune-243171",
        type: "WEBLINK"
      }
    }
    
];
  
    
    

const RestaurantCard= (props)=>{
    const{resData}= props;  //destructing object in JS study 

    //const{name,cuisines,avgRating,costForTwo,deliveryTime}= resData?.info; //optional chaining read
    
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
            <h3>{resData.info.name}</h3>                      
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );                              
};


const Body= () =>{
   return (
      <div className="body">
        <div className="search">Search</div>
          <div className="res-container">
         
          {AllResData.map((restaurant)=>(             //study map,filter,reduce...
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>  //every card should have a unique key, bina uske bhi ho jayega but it should have keys...
          ))}
         
          </div>
      </div>

   );
};


const AppLayout =()=>{
    return <div className="app">
        <Header/>
        <Body/>
    </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

