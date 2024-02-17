function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="chef-info">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>

                <div className="chef-img">
                    <img className="chef-img-1" src={require("./assets/images/Mario and Adrian A.jpg")} alt="Mario and Andian" />
                    <img className="chef-img-2" src={require("./assets/images/restaurant chef B.jpg")} alt="Chef while cooking" />
                </div>
            </div>
        </section>
    );
}

export default About;