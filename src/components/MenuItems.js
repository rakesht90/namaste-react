import ItemsList from "./ItemsList";

const MenuItems = ({ showItem, setShowIndex, data }) => {
  const handleShowItem = () => {
    setShowIndex((prevState) => !prevState);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-grey-100 p-4">
        <div
          onClick={handleShowItem}
          className="flex justify-between cursor-pointer"
        >
          <span className="font-bold text-xl">
            {data?.title}({data?.itemCards.length})
          </span>
          <span>{showItem ? "⬆️" : "⬇️"}</span>
        </div>

        {showItem &&
          data?.itemCards?.map((item) => (
            <ItemsList key={item.card.info.id} item={item} />
          ))}
      </div>
    </div>
  );
};
export default MenuItems;
