import { useEffect, useState } from "react";
import { SWIGGY_MENU } from "./constants";

const useRestaurantMenu = ({ resId }) => {
  const [menuInfo, setMenuInfo] = useState(null);
  useEffect(() => {
    if (resId) {
      fetchMenu();
    }
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_MENU + resId);
    const json = await data.json();
    setMenuInfo(json);
  };

  return menuInfo;
};
export default useRestaurantMenu;
