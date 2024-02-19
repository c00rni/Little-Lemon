import About from './About';
import './App.css';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import OnlineShop from './OnlineShop';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useReducer } from 'react';

const decreaseMinmunValueNotNull = (arr, min) => {
  let min_find = Math.pow(10, 1000)
  let index = -1
  arr.map((elm, curr_index) => {
    if (elm >= min && elm < min_find) {
      min_find = elm
      index = curr_index
    }
  })
  if (index > -1) {
    arr[index] -= min
  }
  return arr
}

const reducer = (state, action) => {
  const seatsAtTime = decreaseMinmunValueNotNull([...state[action.resDate][action.resTime]], action.guests)
  const newState = {...state}
  if (JSON.stringify(state[action.resDate][action.resTime]) === JSON.stringify([0,0,0,0])) {
    delete newState[action.resDate][action.resTime]
  }
  else {
    newState[action.resDate][action.resTime] = seatsAtTime
  }

  return newState
}

function App() {

  const initalState = {
    "19/02/2024": {
        "11:00": [4, 4, 8, 2, 2],
        "12:00": [1, 0, 0, 0, 1],
        "13:00": [1, 0, 0, 0, 2],
        "14:00": [4, 2, 8, 0, 2],
        "15:00": [4, 4, 8, 1, 1],
        "16:00": [4, 4, 8, 1, 2],
        "17:00": [4, 4, 8, 2, 1],
        "18:00": [2, 0, 4, 0, 2],
        "19:00": [0, 0, 0, 1, 2],
        "20:00": [0, 0, 0, 2, 2],
        "21:00": [2, 4, 8, 1, 0],
        "22:00": [4, 4, 8, 2, 0],
    },
    "20/02/2024": {
        "11:00": [4, 4, 8, 2, 2],
        "12:00": [1, 0, 0, 0, 1],
        "13:00": [1, 0, 0, 0, 2],
        "14:00": [4, 2, 8, 0, 2],
        "15:00": [4, 4, 8, 1, 1],
        "16:00": [4, 4, 8, 1, 2],
        "17:00": [4, 4, 8, 2, 1],
        "18:00": [2, 0, 4, 0, 2],
        "19:00": [0, 0, 0, 1, 2],
        "20:00": [0, 0, 0, 2, 2],
        "21:00": [2, 4, 8, 1, 0],
        "22:00": [4, 4, 8, 2, 0],
    },
  };
  const [state, dispatch] = useReducer(reducer, initalState)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/booking" element={<BookingPage data={[state, dispatch]} />}></Route>
        <Route path="/order-online" element={<OnlineShop />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
