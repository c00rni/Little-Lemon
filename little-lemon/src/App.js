import About from './About';
import './App.css';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import OnlineShop from './OnlineShop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer } from 'react';
import { fetchAPI} from './fakeApi';
import ConfirmationPage from './ConfirmationPage';


function App() {

  const updateTimes = (date) => fetchAPI(date)
  const [availabaleTimes, dispatch] = useReducer(updateTimes, [])


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/booking" element={<BookingPage availabaleTimes={[availabaleTimes, dispatch]}/>}></Route>
        <Route path="/order-online" element={<OnlineShop />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/confirmation" element={<ConfirmationPage />}></Route>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
