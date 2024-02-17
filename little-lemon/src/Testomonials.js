import Review from "./Review";

const data = [{rating: 4, name: "John doe", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a augue quis ipsum blandit laoreet at nec urna. Donec non metus pharetra, egestas tortor at, luctus felis. Pellentesque in tellus."},
{rating: 5, name: "William", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a augue quis ipsum blandit laoreet at nec urna. Donec non metus pharetra, egestas tortor at, luctus felis. Pellentesque in tellus."},
{rating: 5, name: "Bob", comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a augue quis ipsum blandit laoreet at nec urna. Donec non metus pharetra, egestas tortor at, luctus felis. Pellentesque in tellus."}]

function Testimonials() {
    return (
        <section className="testimonials">
            <div className="container">
                <h2>Testimonials</h2>
                <div className="review-container">
                    {data.map((data) => <Review key={data.name} rating={data.rating} name={data.name} comment={data.comment}/>)}
                </div>
            </div>

        </section>
    );
}

export default Testimonials;