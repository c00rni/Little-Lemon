// import Header from './Header';
// import Footer from './Footer';
// import { Formik, Field, Form, ErrorMessage} from 'formik';
// import DatePicker from "react-datepicker";
// import * as Yup from 'yup';
// import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";

const data = {
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

function BookingForm() {
    const [values, setValues] = useState({
        resDate: null,
        resTime: null,
        guests: 0,
        occasion: null
    });

    const handleChange = event => {
        setValues(prevState => {
            return {
              ...prevState,
              [event.target.name]: event.target.value
            }
        });
    }

    const handleSumbmit = (event) => {
        event.preventDefault();
        if (values.resDate && values.resTime && values.guests && values.occasion)
        console.log(values);
    }

    return (
        <>
            <form onSubmit={handleSumbmit}>
                <select name="resDate" defaultValue="Date" onChange={handleChange} id="bookingDate">
                    <option disabled hidden>Date</option>
                    {Object.keys(data).map(date => <option key={date} value={date}>{date}</option>)}
                </select>
                <select name="resTime" defaultValue="Time" onChange={handleChange} id="bookingTime">
                    <option disabled hidden>Time</option>
                    {values.resDate ? Object.keys(data[values.resDate]).map(time => <option key={time} value={time}>{time}</option>) : null}
                </select>
                <select name="guests" defaultValue="Number of Diners" onChange={handleChange} id="guests">
                    <option disabled hidden>Number of Diners</option>
                    {values.resTime ? [...Array(Math.max(...data[values.resDate][values.resTime])).keys()].map( number => <option key={number+1} value={number+1}>{number+1}</option>) : null}
                </select>
                <select name="occasion" defaultValue="Occasion" onChange={handleChange} id="bookingOccasion">
                    <option disabled hidden>Occasion</option>
                    <option value="No special occasion">No special occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                {/* <div className="bookingOptions">
                    <h3 id="bookingOptionsTitle">Seating options</h3>
                    <p>Standard</p><input type="radio" name="options" value="Standard" id="optStd"/>
                    <p>Outside</p><input type="radio" name="options" value="Outside" id="optOut"/>
                </div> */}

                <input type="submit" value="Let's go" className='btn btn-primary' id="bookingSubmit"/>
            </form>
        </>
    );
  }

  export default BookingForm;