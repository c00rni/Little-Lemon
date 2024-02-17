function DishCard(props) {
    return (
        <article className="card">
            <img className="card-img" src={require("./assets/images/lemon dessert.jpg")} alt="Special chef dish" />
            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-price">{props.price}</p>
                <p className="card-description">{props.description}</p>
                <a href="#reservations">Order a delivery <img src={require("./assets/images/moped.png")} alt="" /></a>
            </div>
        </article>
    );
}

export default DishCard;