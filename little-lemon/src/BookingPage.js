import Header from './Header';
import Footer from './Footer';
import BookingForm from './BookingForm';

function BookingPage() {

    return (
        <>
            <Header />
            <div className="reserver-table">
                <div className="container">
                    <section className="booking">
                        <div className="bookingForm">
                            <div className="bookingFormHeader">
                                <h1>Little Lemon</h1>
                                <h2>Chicago</h2>

                                <h3>Find a table for any occasion</h3>
                            </div>
                            <BookingForm />
                        </div>
                        <aside>
                            <img src={require("./assets/images/restaurant.jpg")} alt="Inside the restaurant" />
                        </aside>
                    </section>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default BookingPage;
