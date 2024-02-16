import Button from "./Button";


function Hero() {
    return (
        <main>
            <div className="left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button />
            </div>

            <div className="right">
                <img src={require("./assets/images/restauranfood.jpg")} alt="Dish from the restaurant" />
            </div>
        </main>
    );
}

export default Hero;