function DishCard({title, price, description, imagePath}) {
    return (
        <article className="card">
            <img className="card-img" src={imagePath} alt="Special chef dish" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-price">{price}</p>
                <p className="card-description">{description}</p>
                <a href="#reservations">Order a delivery <img src={require("./assets/images/moped.png")} alt="" /></a>
            </div>
        </article>
    );
}

export default DishCard;