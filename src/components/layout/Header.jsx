import { Link } from "react-router";
import Cart from "./Cart";
import logo from "/src//assets/logo-ecom.png"


const Header = () => {
    return (
        <header className="bg-white">
            <div className="flex flex-row justify-between px-6 items-center h-[140px] max-w-[1400px] mx-auto">
            <div className="text-black">
                <Link to="/">
                <img src={logo} alt="Logo" className="w-42 h-auto" /></Link>
            </div>
            <nav>
            <ul className="flex flex-row gap-6 text-black">
                <li>
                    <Link to="/" className="text-lg">Home</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-lg">Contact Us</Link> 
                </li>
                <li>
                    <Cart />
                </li>
            </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header  