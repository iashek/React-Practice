import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0316299&lng=77.568395&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    

      const json = await data.json();

      console.log(json);

      // Optional Chaining
      setListOfRestaurants(json.data.cards[5]?.card.card.gridElements.infoWithStyle.restaurants);
    };

    // Conditional Rendering
    return listOfRestaurants.length === 0? (
    <Shimmer />
    ) : (
        <div className="body">
          <div className="filter">
            <div className="search">
              <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
              <button onClick = {() => {

                console.log(searchText);

                filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.includes(searchText));
                setListOfRestaurants(filteredRestaurant);
              }}
              className="search-btn">Search</button>
            </div>
            <button className="filter-btn" onClick={() => {filteredList=listOfRestaurants.filter((restaurant) => restaurant.info.avgRating >= 4.5);   setListOfRestaurants(filteredList)}}>Filter</button>
          </div>
          <div className="res-container">
              {listOfRestaurants.map((restaurant) => (
                      <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              ))
              }
          </div>
        </div>
    );
};

export default Body;