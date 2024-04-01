import { useState } from "react";
import ItemsList from "./ItemsList";

const MenuItems = (props) => {
  const [showItem, setShowItem] = useState(true);
  const handleShowItem = () => {
    setShowItem(!showItem);
  };
  const category = props.data;
  console.log(category);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-grey-100 p-4">
        <div
          onClick={handleShowItem}
          className="flex justify-between cursor-pointer"
        >
          <span className="font-bold text-xl">
            {category?.title}({category?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItem && <ItemsList items={category?.itemCards} />}
      </div>
    </div>
  );
};
export default MenuItems;
