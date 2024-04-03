import { CDN_URL } from "../utils/constants";

const ItemsList = ({ item }) => {
  return (
    <div className="p-2 m-2">
      <div
        key={item.card.info.id}
        className="flex items-center my-1 border-b-2 border-neutral-300"
      >
        <div className="p-2 m-2 flex-grow">
          <div className="from-neutral-800 font-medium text-lg">
            {item?.card?.info?.name}
          </div>
          <div>
            ₹
            {item?.card?.info?.price
              ? item?.card?.info?.price / 100
              : item?.card?.info?.defaultPrice / 100}
          </div>
          <div className="text-base my-4 from-neutral-500 font-light">
            {item?.card?.info?.description}
          </div>
        </div>
        <div className="w-32 rounded-lg">
          <button className="absolute px-1 m-1 mx-8 bg-black text-white">
            Add
          </button>
          <img src={`${CDN_URL + item?.card?.info?.imageId}`} />
        </div>
      </div>
    </div>
  );
};
export default ItemsList;
