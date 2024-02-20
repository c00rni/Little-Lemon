import Header from './Header';
import Footer from './Footer';
import { MdConstruction } from "react-icons/md";

function NotFoundPage() {
    return (
      <>
        <Header />
        <div className="container confirmation">
                <div className="message center">
                    <MdConstruction size={100}/>
                    <h2>Website is under contrcution</h2>
                </div>
        </div>
        <Footer />
      </>
    );
  }

  export default NotFoundPage;