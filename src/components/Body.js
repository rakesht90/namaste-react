import { useState, useEffect } from "react";
import RestroCard, { PromtedLabel } from "./RestroCard";
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
import { HOME_API } from "../utils/constants";
const Body = () => {
  const restaurantList = useRestaurantList();
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const ResturantCardPromoted = PromtedLabel(RestroCard);
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
    <div className="p-4 m-4">
      <div className="flex">
        <div className="p-2 m-2">
          <input
            type="text"
            className="mx-2 border-blue-100"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 rounded-md bg-green-300"
            onClick={handleFilter}
          >
            Search
          </button>
        </div>
        <button className="border bg-gray-100 " onClick={handleFilter}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="flex p-4 m-4 flex-wrap">
        {filterList?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <ResturantCardPromoted resData={restaurant} />
            ) : (
              <RestroCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
