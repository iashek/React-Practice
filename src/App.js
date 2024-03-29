import React, { lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext.js";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

//const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React!");

// const parent = React.createElement(
//     "div", {id: "parent"}, [
//         React.createElement("div", {id: "child1"}, [
//             React.createElement("h1", {id: "child11"}, "Hello World"), 
//             React.createElement("h1", {id: "child12"}, "I'm at child1 h1 tag")]),
//         React.createElement("div", {id: "child2"}, [
//             React.createElement("h1", {id: "child21"}, "I'm at child2 h1 tag"), 
//             React.createElement("h1", {id: "child22"}, "I'm at child2 h1 tag")]), 
//     ]);

// console.log(parent); // returns object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


// const heading = React.createElement("h1", {id: "heading"}, "The Reactor Welcomes You!");

// console.log(heading);

// const Title = () => <h1 className="head">JSX Reactor Welcomes You!</h1>;
// const title = (<h1 className="head">JSX Reactor Welcomes You!</h1>);

// // console.log(jsxHeading);

// // React functional component
// const HeadingComponent = () => (
//     <div id="container">
//         <Title />
//         <Title></Title>
//         {Title()}
//         {title}
//         <h1>{20+30}</h1>
//         <h1 className="heading">Functional Reactor Component</h1>
//     </div>
// )



// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

const resObj = {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "265272",
          "name": "Hotel Empire",
          "cloudinaryImageId": "wxiqzeafmwowtfuskf1z",
          "locality": "Mathikere",
          "areaName": "New Bel Road",
          "costForTwo": "₹800 for two",
          "cuisines": [
            "North Indian",
            "Kebabs",
            "Biryani"
          ],
          "avgRating": 4.2,
          "feeDetails": {
            "restaurantId": "265272",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 3200
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 3200
          },
          "parentId": "475",
          "avgRatingString": "4.2",
          "totalRatingsString": "10K+",
          "promoted": true,
          "adTrackingId": "cid=9390017~p=1~eid=0000018b-c2d4-b932-4eec-affb00ff0145~srvts=1699780802866~83649",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 1,
            "serviceability": "SERVICEABLE",
            "slaString": "24 mins",
            "lastMileTravelString": "1.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-13 03:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=265272&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
}

const Grocery = lazy(() => import("./components/Grocery.js"));

const Cart = lazy(() => import("./components/Cart.js"));

const About = lazy(() => import("./components/About.js"));

const AppLayout = () => {

  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    // make an API call and send username and password
    const data = {
      name: 'Abhishek Singh'
    };
    setUserName(data.name);
  }, []);



    return (
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
            <div className="app">
              <Header />
              <Outlet />
            </div>
        </UserContext.Provider>
      </Provider>
    );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Suspense fallback={<h1>Loading...</h1>}><Cart /></Suspense>,
      },
    ],
    errorElement: <Error />,
  },
])


const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);