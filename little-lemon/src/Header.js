import { RxHamburgerMenu } from "react-icons/rx";
import basket_img from "./assets/images/Basket.svg";

function Header() {
    return (
      <nav>
        <div className="container">
            <div className="header">
                <div className="tinymenu"><RxHamburgerMenu size={40}/></div>
                <img className="logo" src="./Logo.svg" alt="Logo"/>
                <ul>
                <li><a href="/">Home</a> </li>
                <li><a href="/about">About</a></li>
                <li><a href="/order-online">Menu</a></li>
                <li><a href="/booking">Reservations</a></li>
                <li><a href="/order-online">Order online</a></li>
                <li><a href="/login">Login</a></li>
                </ul>
                <img className="basket" src={basket_img} alt="Basket" />
            </div>
        </div>
      </nav>
    );
}

export default Header;