import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-5 p-5 text-center">
      <h1 className="text-2xl text-bold"> Cart</h1>
      {items.length > 0 && (
        <button
          className="btn-primary items-end rounded-xl p-1 m-1 border border-red-500"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
      <div className="w-1/2 m-auto">
        {items.map((item) => (
          <ItemsList key={item.card.info.id} item={item} />
        ))}
      </div>
      {items.length === 0 && (
        <div>
          <h2>Cart is empty . please add items to cart</h2>
        </div>
      )}
    </div>
  );
};
export default Cart;
