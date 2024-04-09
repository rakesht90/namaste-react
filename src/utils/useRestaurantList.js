import { useEffect, useState } from "react";
import { HOME_API } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(HOME_API);
    const json = await data.json();
    const restaurants =
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(restaurants);
  };
  return restaurantList;
};

export default useRestaurantList;
