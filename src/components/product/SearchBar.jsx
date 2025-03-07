import { useState } from "react";
import { Link } from "react-router";

const SearchBar = ({ products }) => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    if (searchQuery.length > 0) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto my-4">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for products m8..."
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
      {filteredProducts.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-50">
          {filteredProducts.map((product) => (
            <li key={product.id} className="p-2 hover:bg-gray-100 cursor-pointer">
              <Link to={`/product/${product.id}`} className="flex items-center">
                <img src={product.image?.url} alt={product.title} className="w-10 h-10 object-cover rounded mr-2" />
                <span>{product.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;