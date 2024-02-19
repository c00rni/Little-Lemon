// import Header from './Header';
// import Footer from './Footer';
// import { Formik, Field, Form, ErrorMessage} from 'formik';
// import DatePicker from "react-datepicker";
// import * as Yup from 'yup';
// import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import BookingSlot from "./BookingSlot";
import { useRef } from 'react';

function BookingForm({availabaleTimes}) {
    const minimumDate = new Date().toISOString().split('T')[0];
    //const [availabaleTimes, dispatch] = data;
    //const [selectedDate, setSelectedDate] = date
    const [times, dispatch] = availabaleTimes
    const [active, setActive] = useState(null);
    const [values, setValues] = useState({
        resDate: null,
        resTime: null,
        guests: 0,
        occasion: null
    });
    const inputRef = useRef();

    const handleChange = event => {

        if (event.target.name === "resDate") {
            dispatch(event.target.value)
        }

        setValues(prevState => {
            return {
              ...prevState,
              [event.target.name]: event.target.value
            }
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (values.resDate && values.resTime && values.guests && values.occasion) {
           // dispatch(values);
           console.log(values)
        }
    }

    const toDateInput = () => {
        inputRef.current.type = 'date';
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input
                value={values.resDate ? values.resDate : "Date"}
                onFocus={toDateInput}
                name="resDate" min={minimumDate}
                required={true}
                onChange={handleChange}
                id="bookingDate"
                ref={inputRef}
                />
                <div name="resTime" onChange={handleChange} id="bookingTime">
                    {values.resDate ? [...times].map((time, index) => <BookingSlot index={index} activeIndex={active} onClick={setActive} children={time} handleChange={handleChange} key={index}/>) : null}
                </div>
                <select name="guests" defaultValue="Number of Diners" onChange={handleChange} id="guests">
                    <option disabled hidden>Number of Diners</option>
                    <option key={1} values={1}>1</option>
                    <option key={2} values={2}>2</option>
                    <option key={3} values={3}>3</option>
                    <option key={4} values={4}>4</option>
                    <option key={5} values={5}>5</option>
                    <option key={6} values={6}>6</option>
                    <option key={7} values={7}>7</option>
                    <option key={8} values={8}>8</option>
                    <option key={9} values={9}>More</option>
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