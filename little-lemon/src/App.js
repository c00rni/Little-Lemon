import About from './About';
import './App.css';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import OnlineShop from './OnlineShop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
//import { useEffect, useReducer } from 'react';
import { fetchAPI} from './fakeApi';


function App() {

  const [date, setDate] = useState(null)
  const [availabaleTimes, setAvailabaleTimes] = useState([])
  useEffect((date)=> {
    setAvailabaleTimes(fetchAPI(date))
  }, [date])


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/booking" element={<BookingPage date={[date, setDate]} availabaleTimes={availabaleTimes}/>}></Route>
        <Route path="/order-online" element={<OnlineShop />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
