import DishCard from "./DishCard";

const data = [
    {title: "Greek salad", price: "$12.99", description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ", img: "./assets/images/greek salad.jpg"},
    {title: "Bruschetta", price: "$5.99", description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ", img: "./assets/images/bruchetta.svg"},
    {title: "Lemon Dessert", price: "$5.00", description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.", img: "./assets/images/lemon dessert.jpg"}
]

function Specials() {
    return (
        <section className="specials">
            <div className="container">
                <div className="special-heading">
                    <h2 className="special-title">Specials</h2>
                    <a className="btn btn-primary" href="/order-online">Order online</a>
                </div>
                <div className="special-dishs">
                    {data.map((data) => <DishCard title={data.title} price={data.price} description={data.description}/>)}
                </div>
            </div>
        </section>
    );
}

export default Specials;