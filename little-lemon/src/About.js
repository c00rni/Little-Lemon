function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="chef-info">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.<br/><br/>
                    To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                    </p>
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