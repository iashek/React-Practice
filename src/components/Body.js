import RestaurantCard, { withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // console.log(listOfRestaurants);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(`${MENU_API}`);
    

      const json = await data.json();

      console.log(json);

      // Optional Chaining
      setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
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

                console.log(searchText);
                
                let filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurant(filteredRestaurants);
              }}
              className="px-4 py-2 bg-green-100 m-4 rounded-lg">Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
              <button className="border px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {filteredList=listOfRestaurants.filter((restaurant) => restaurant.info.avgRating >= 4.5);   setListOfRestaurants(filteredList)}}>Top Rated Restaurants</button>
            </div>
          </div>
          <div className="flex flex-wrap">
              {filteredRestaurant.map((restaurant) => (
                      <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        {restaurant.info.isOpen? ( <RestaurantCardPromoted key={restaurant.info.id} resData={restaurant} /> ) : ( <RestaurantCard key={restaurant.info.id} resData={restaurant}  /> )}
                      </Link>
              ))
              }
          </div>
        </div>
    );
};

export default Body;