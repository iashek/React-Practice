import RestaurantCard, { withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MENU_API, RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    console.log("LOR");
    console.log(listOfRestaurants);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(`${RES_API}`);
    

      const json = await data.json();

      console.log("Fetch");
      console.log(json);

      // Optional Chaining
      const res = json?.data?.cards.filter( (c) => c?.card?.card?.gridElements?.infoWithStyle?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle");
      // setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(res);
      setListOfRestaurants(res[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(res[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
      return (
        <h1>
          Looks like you're offline!! Please check your internet connection;
        </h1>
      );


    // Conditional Rendering
    return (listOfRestaurants == undefined || listOfRestaurants.length === 0)? (
    <Shimmer />
    ) : (
        <div className="body">
          <div className="filter flex">
            <div className="search m-4 p-4">
              <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
              <button onClick = {() => {
                let filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurant(filteredRestaurants);
              }}
              className="px-4 py-2 bg-green-100 m-4 rounded-lg">Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
              <button className="border px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {filteredList=listOfRestaurants.filter((restaurant) => restaurant.info.avgRating >= 4.2);   setFilteredRestaurant(filteredList)}}>Top Rated Restaurants</button>
            </div>
          </div>
          <div className="flex flex-wrap">
              {filteredRestaurant.map((restaurant) => (
                      <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        {restaurant?.info?.promoted ? ( <RestaurantCardPromoted key={restaurant.info.id} resData={restaurant} /> ) : ( <RestaurantCard key={restaurant.info.id} resData={restaurant}  /> )}
                      </Link>
              ))
              }
          </div>
        </div>
    );
};

export default Body;