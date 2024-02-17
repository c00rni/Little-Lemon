import About from './About';
import './App.css';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import OnlineShop from './OnlineShop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reservations from './Reservation';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/order-online" element={<OnlineShop />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
