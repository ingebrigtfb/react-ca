import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate("/checkout")}
      className="relative flex items-center"
    >
      <FaShoppingCart className="text-2xl cursor-pointer"></FaShoppingCart>
      {cart.length > 0 && (
        <span className="ml-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
          {cart.reduce((total, item) => total + item.quantity, 0)}
        </span>
      )}
    </button>
  );
};

export default Cart;