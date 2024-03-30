import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();

  const { resId } = params;
  const menuInfo = useRestaurantMenu({ resId });

  const { cuisines, areaName, feeDetails, avgRating, costForTwoMessage } =
    menuInfo?.data?.cards[2]?.card?.card?.info || {};

  const { title = "Default Value", itemCards = [] } =
    menuInfo?.data?.cards[5]?.groupedCard.cardGroupMap?.REGULAR?.cards[4].card
      ?.card || {};

  return (
    <div className="Menu-container">
      {menuInfo && (
        <>
          <div>
            <h1>{menuInfo?.data?.cards[0].card?.card?.text}</h1>

            <h3>{cuisines?.join(", ")}</h3>
            <h3>{areaName}</h3>
            <h3>{feeDetails?.message}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwoMessage}</h3>
          </div>
          <div className="horizonalLine"></div>
          <div>
            <h1>{title}</h1>
            {itemCards?.map((item) => (
              <div className="menu-item-list" key={item.card.info.id}>
                <h3>{item.card.info.name}</h3>
                <h3>
                  ₹
                  {(item?.card?.info?.price / 100) |
                    (item?.card?.info?.defaultPrice / 100)}
                </h3>
                <div className="horizonalLine"></div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
