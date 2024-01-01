import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
// import {
//     Accordion,
//     AccordionHeader,
//     AccordionBody,
//   } from "@material-tailwind/react";

const RestaurantMenu = () => {

    const { resId } = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(-1);

    console.log("one")
    console.log(resInfo)

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;
    // const { name, cuisines } = resInfo?.cards[5]?.card?.card?.gridElements.infoWithStyle;
    
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c) => c.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories)
    const len = categories.length;

    // const [open, setOpen] = useState(1);

    const handleOpen = (value) => setOpen( value === open ? 0 : value);

    return (

        <div className="text-center">
            <h1 className="font-bold text-2xl">{name}</h1>
            <p className=" my-6 text-lg">{cuisines.join(", ")}</p>

            {/* <Accordion >

            </Accordion> */}

            <div>
                {categories.map((category, index) => <RestaurantCategory key={category?.card?.card?.title} menuData={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} />)}
            </div>
        </div>

        // <div className="menu">
        //     <h1>{name}</h1>
        //     <h3>{cuisines.join(", ")}</h3>
        //     <h2>Menu</h2>
        //     <ul>
        //         {itemCards?.map((item) => (
        //                 <li key={item.card.info.id}>
        //                     {item.card.info.name} - {"Rs."}{
        //                     item.card.info.price/100 || item.card.info.defaultPrice/100}
        //                 </li>
        //             ))
        //         }
        //     </ul>
        // </div>
    )
};

export default RestaurantMenu;