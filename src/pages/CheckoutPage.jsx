import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";

const CheckoutPage = () => {
  const { cart, addToCart, removeFromCart, decreaseQuantity, clearCart } = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    paymentMethod: "credit-card",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", formData);

    // Redirect to success page and pass purchased items
    navigate("/checkout-success", { state: { purchasedItems: cart } });

    // Clear the cart after successful order
    clearCart();
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty/void/blank/vacant/hallow/barren/unoccupied/devoid.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center p-2 border-b">
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">
                ${item.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="ml-2 px-2 text-yellow-500 hover:text-yellow-700 cursor-pointer"
              >
                ➖
              </button>
              <span className="text-lg font-bold px-2">{item.quantity}</span>
              <button
                onClick={() => addToCart(item)}
                className="ml-2 px-2 text-green-500 hover:text-green-700 cursor-pointer"
              >
                ➕
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-500 hover:text-red-700 cursor-pointer"
              >
                ❌
              </button>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h3>

          {/* Checkout Form */}
          <form onSubmit={handleSubmit} className="mt-6 bg-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Checkout Details</h3>

            <label className="block mb-2">
              Full Name:
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </label>

            <label className="block mb-2">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </label>

            <label className="block mb-2">
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </label>

            <label className="block mb-2">
              Payment Method:
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="apple-pay">Apple Pay</option>
              </select>
            </label>

            <button
              type="submit"
              className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Complete Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;