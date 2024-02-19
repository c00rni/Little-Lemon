// import Header from './Header';
// import Footer from './Footer';
// import { Formik, Field, Form, ErrorMessage} from 'formik';
// import DatePicker from "react-datepicker";
// import * as Yup from 'yup';
// import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import BookingSlot from "./BookingSlot";

function BookingForm({data}) {
    const [stateData, dispatch] = data;
    const [active, setActive] = useState(null);
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
        if (values.resDate && values.resTime && values.guests && values.occasion) {
            dispatch(values);
        }
    }

    return (
        <>
            <form onSubmit={handleSumbmit}>
                <select name="resDate" defaultValue="Date" onChange={handleChange} id="bookingDate">
                    <option disabled hidden>Date</option>
                    {Object.keys(stateData).map(date => <option key={date} value={date}>{date}</option>)}
                </select>
                <div name="resTime" onChange={handleChange} id="bookingTime">
                    {values.resDate ? Object.keys(stateData[values.resDate]).map((time, index) => <BookingSlot index={index} activeIndex={active} onClick={setActive} children={time} handleChange={handleChange} key={index}/>) : null}
                </div>
                <select name="guests" defaultValue="Number of Diners" onChange={handleChange} id="guests">
                    <option disabled hidden>Number of Diners</option>
                    {values.resTime ? [...Array(Math.max(...stateData[values.resDate][values.resTime])).keys()].map( number => <option key={number+1} value={number+1}>{number+1}</option>) : null}
                </select>
                <select name="occasion" defaultValue="Occasion" onChange={handleChange} id="bookingOccasion">
                    <option disabled hidden>Occasion</option>
                    <option value="No special occasion">No special occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>

                <input type="submit" value="Let's go" className='btn btn-primary' id="bookingSubmit"/>
            </form>
        </>
    );
  }

  export default BookingForm;