
function Specials() {
    return (
        <section className="specials">
            <div className="container">
                <div className="special-heading">
                    <h2 className="special-title">Specials</h2>
                    <a className="btn btn-primary" href="/order-online">Order online</a>
                </div>
                <div className="special-dishs">
                    <article className="card">
                        <img className="card-img" src={require("./assets/images/greek salad.jpg")} alt="Greek salad dish" />
                        <div className="card-content">
                            <h2 className="card-title">Greek salad</h2>
                            <p className="card-price">$12.99</p>
                            <p className="card-description">"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <a href="#reservations">Order a delivery <img src={require("./assets/images/moped.png")} alt="" /></a>
                        </div>
                    </article>
                    <article className="card">
                        <img className="card-img" src={require("./assets/images/bruchetta.jpg")} alt="Special chef dish" />
                        <div className="card-content">
                            <h2 className="card-title">Bruschetta</h2>
                            <p className="card-price">$5.99</p>
                            <p className="card-description">"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <a href="#reservations">Order a delivery <img src={require("./assets/images/moped.png")} alt="" /></a>
                        </div>
                    </article>
                    <article className="card">
                        <img className="card-img" src={require("./assets/images/lemon dessert.jpg")} alt="Special chef dish" />
                        <div className="card-content">
                            <h2 className="card-title">Lemon Dessert</h2>
                            <p className="card-price">$5.00</p>
                            <p className="card-description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <a href="#reservations">Order a delivery <img src={require("./assets/images/moped.png")} alt="" /></a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Specials;