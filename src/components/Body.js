import { useState, useEffect } from "react";
import restaurants from "../utils/mockData";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const restaurantList = useRestaurantList();
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    setFilterList(restaurantList);
  }, [restaurantList]);

  const handleFilter = () => {
    const filteredByRating = restaurantList?.filter(
      (restro) => restro?.info?.avgRating > 4.0
    );
    const filteredByText = restaurantList?.filter((restro) =>
      restro.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    const finalFilteredList = filteredByRating.filter((restro) =>
      filteredByText.includes(restro)
    );

    setFilterList(finalFilteredList);
  };

  if (!onlineStatus) {
    return (
      <div>
        <h1 className="onlineStatsus">Please Check your internet connection</h1>
      </div>
    );
  }

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="search-btn" onClick={handleFilter}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterList?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestroCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
