import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useCart } from "../../context/CartContext";

const ProductHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://v2.api.noroff.dev/online-shop");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();

        if (Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          console.error("Expected an array but got:", data);
          setProducts([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  if (loading) return <p className="text-center text-xl">Loading products...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
          <img
            src={product.image?.url}
            alt={product.image?.alt || "Product image"}
            className="w-full h-48 object-cover rounded-md"
            onError={(e) => { e.target.src = "/fallback-image.jpg"; }}
          />
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>

       
          <div className="mt-2">
            {product.price !== product.discountedPrice ? (
              <p>
                <span className="text-red-500 text-xl font-bold">
                  ${product.discountedPrice.toFixed(2)}
                </span>
                <span className="text-gray-500 line-through ml-2">
                  ${product.price.toFixed(2)}
                </span>
              </p>
            ) : (
              <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-4 py-2 mt-3 rounded hover:bg-gray-800 w-full cursor-pointer"
          >
            Add to Cart
          </button>
          <Link
            to={`/product/${product.id}`}
            className="block text-center mt-2 text-black hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductHome;