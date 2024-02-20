function Footer() {
    return (
        <footer>
            <div className="container">
                <img src="./Logo.svg" alt="Logo"/>
                <div className="footer-links">
                    <ul>
                        <h2>Navigation</h2>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>

                    <ul>
                        <h2>Contact</h2>
                        <li>Little Lemon</li>
                        <li>29 route du bima</li>
                        <li>St naza Street Chicago</li>
                    </ul>

                    <ul>
                        <h2>Social Media links</h2>
                        <li>
                            {" "}
                            <a
                                href="https://www.facebook.com/littlelemon"
                                rel="external"
                            >
                                Facebook
                            </a>{" "}
                            </li>
                            <li>
                            {" "}
                            <a
                                href="https://www.instagram.com/littlelemon"
                                rel="external"
                            >
                                Instagram
                            </a>{" "}
                            </li>
                            <li>
                            {" "}
                            <a
                                href="https://twitter.com/littlelemon"
                                rel="external"
                            >
                                Twitter
                            </a>{" "}
                            </li>
                    </ul>
                </div>
            </div>

        </footer>
    );
}

export default Footer;