import About from './About';
import './App.css';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer } from 'react';
import { fetchAPI} from './fakeApi';
import ConfirmationPage from './ConfirmationPage';
import NotFoundPage from './NotFoundPage';

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
        <Route path="/confirmation" element={<ConfirmationPage />}></Route>
        <Route path="/construction" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
