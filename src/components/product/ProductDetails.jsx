import { useState, useEffect } from "react";
import { useParams } from "react-router"; 
import { useCart } from "../../context/CartContext";

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const { data } = await response.json();
        console.log("Fetched product:", data);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center text-xl">Loading product...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!product) return null;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <img 
        src={product.image?.url} 
        alt={product.image?.alt || ""} 
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>

      <div className="mt-4">
        {product.discountedPrice < product.price ? (
          <p className="text-lg font-bold text-red-500">
            ${product.discountedPrice.toFixed(2)} 
            <span className="text-gray-400 line-through ml-2">${product.price.toFixed(2)}</span>
          </p>
        ) : (
          <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        )}
      </div>

      <button 
        onClick={() => addToCart(product)} 
        className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
      >
        Add to Cart
      </button>

      <h2 className="text-xl font-semibold mt-4">Reviews</h2>
      {product.reviews && product.reviews.length > 0 ? (
        <ul className="mt-2">
          {product.reviews.map((review) => (
            <li key={review.id} className="border-b py-2">
              <p className="text-sm font-semibold">{review.username}</p>
              <p className="text-sm">{review.description}</p>
              <p className="text-yellow-500">⭐ {review.rating}/5</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mt-2">No reviews yet.</p>
      )}
    </div>
  );
};

export default ProductDetails;