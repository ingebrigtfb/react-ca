import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
    return (
        <header className="bg-gray-700">
            <div className="flex flex-row justify-between px-6 items-center h-[140px] max-w-[1400px] mx-auto">
            <div className="text-white">
                <Link to="/" className="text-lg">E-commerce</Link>
            </div>
            <nav>
            <ul className="flex flex-row gap-6 text-white">
                <li>
                    <Link to="/" className="text-lg">Home</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-lg">Contact Us</Link> 
                </li>
                <li>
                    <Link to="/cart" className="text-white"><FaShoppingCart className="text-2xl inline-block" /></Link>
                </li>
            </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header  