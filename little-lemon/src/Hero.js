
function Hero() {
    return (
        <main>
            <div className="container">
                <div className="left">
                    <h1>Little Lemon</h1>
                    <h2 className="subtitle">Chicago</h2>
                    <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <a className="btn btn-primary mt-4" href="/booking">Reserve a table</a>
                </div>

                <div className="right">
                    <img className="best-dish-img" src={require("./assets/images/restauranfood.jpg")} alt="Best dish of the chef" />
                </div>
            </div>

        </main>
    );
}

export default Hero;