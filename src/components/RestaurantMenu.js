import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuItems from "./MenuItems";
import { useState } from "react";

const RestaurantMenu = () => {
  const params = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const { resId } = params;
  const menuInfo = useRestaurantMenu({ resId });

  const menuCategories =
    menuInfo?.data?.cards[5]?.groupedCard.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  const { cuisines, areaName, feeDetails, avgRating, costForTwoMessage } =
    menuInfo?.data?.cards[2]?.card?.card?.info || {};

  return (
    <div className="w-full m-12 p-8 justify-center">
      {menuInfo && (
        <div className="py-2 items-center from-neutral-500 ">
          <h1 className="font-bold text-2xl">
            {menuInfo?.data?.cards[0].card?.card?.text}
          </h1>

          <h3 className="from-neutral-200 text-slate-500">
            {cuisines?.join(", ")}
          </h3>
          <div className="py-2 my-2">
            <div className="flex pr-4 mr-8 text-slate-400">
              <h3>❇️{avgRating}</h3>
              <h3 className="pl-4">{costForTwoMessage}</h3>
            </div>
            <h3 className="text-slate-400">🌏{areaName}</h3>

            <h3 className="text-slate-400"> 🚴🏿‍♂️{feeDetails?.message}</h3>
          </div>

          <div className="w-full  shadow-xl"></div>
        </div>
      )}
      <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
      {menuCategories?.map((category, index) => (
        <div className="py-4 m-4" key={category.card.card.title}>
          <MenuItems
            data={category.card.card}
            showItem={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
