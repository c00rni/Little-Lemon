import Button from "./Button";


function Hero() {
    return (
        <main>
            <div className="container">
                <div className="left">
                    <h1>Little Lemon</h1>
                    <h2 className="subtitle">Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button>Reserve a table</Button>
                </div>

                <div className="right">
                    <div className="best-dish-img"></div>
                </div>
            </div>

        </main>
    );
}

export default Hero;