import { useLocation, useNavigate } from "react-router";

const CheckoutSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const purchasedItems = location.state?.purchasedItems || [];

  // Calculate total amount
  const totalAmount = purchasedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h2 className="text-2xl font-bold text-green-600">🎉 Order Successful!</h2>
      <p className="text-gray-700 mt-2">Thank you for your purchase. Here is a summary of your order:</p>

      {purchasedItems.length > 0 ? (
        <ul className="mt-4 text-left border p-4 rounded shadow-md">
          {purchasedItems.map((item) => (
            <li key={item.id} className="border-b py-2">
              <span className="font-semibold">{item.title}</span> - ${item.price.toFixed(2)} x {item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mt-4">No items found in your order.</p>
      )}

      {/* Display the totla amount */}
      <h3 className="text-xl font-semibold mt-4">Total Amount: ${totalAmount.toFixed(2)}</h3>

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Back to Homepage
      </button>
    </div>
  );
};

export default CheckoutSuccess;