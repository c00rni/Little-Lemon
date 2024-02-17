function Header() {
    return (
      <nav>
        <div className="container">
            <div className="header">
                <img src="./Logo.svg" alt="Logo"/>
                <ul>
                <li><a href="#home">Home</a> </li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order-online">Order online</a></li>
                <li><a href="#login">Login</a></li>
                </ul>
            </div>
        </div>
      </nav>
    );
}

export default Header;