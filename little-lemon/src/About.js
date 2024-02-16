function About() {
    return (
        <section className="about">
            <div className="left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            </div>

            <div className="right">
                <img src={require("./assets/images/Mario and Adrian A.jpg")} alt="Mario and Andian" />
                <img src={require("./assets/images/restaurant chef B.jpg")} alt="Chef while cooking" />
            </div>
        </section>
    );
}

export default About;