import { useEffect, useState } from "react";
import restaurants from "../utils/mockData";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleFilter = () => {
    const filterData = restaurants.filter((restro) => {
      return restro?.info?.avgRating > 4.0;
    });
    setRestaurantList(filterData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=25.59080&lng=85.13480"
      );
      const restrodata = await response.json();
      const res =
        restrodata?.data?.success?.cards[4]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants;

      setRestaurantList(res);
      setFilterList(res);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  };
  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return restaurantList.length === 0 ? (
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
          <button
            className="search-btn"
            onClick={() => {
              console.log("restaurantList" + restaurantList);
              const filterList = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              if (filterList.length === 0) {
                return (
                  <div>
                    <h1>No item found with search {searchText}</h1>
                  </div>
                );
              }
              setFilterList(filterList);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterList.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
