import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

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
          <div className="filter">
            <div className="search">
              <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
              <button onClick = {() => {

                console.log(searchText);
                
                let filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurant(filteredRestaurants);
              }}
              className="search-btn">Search</button>
            </div>
            <button className="filter-btn" onClick={() => {filteredList=listOfRestaurants.filter((restaurant) => restaurant.info.avgRating >= 4.5);   setListOfRestaurants(filteredList)}}>Filter</button>
          </div>
          <div className="res-container">
              {filteredRestaurant.map((restaurant) => (
                      <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard key={restaurant.info.id} resData={restaurant} /></Link>
              ))
              }
          </div>
        </div>
    );
};

export default Body;