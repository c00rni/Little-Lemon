import React, { useState } from "react";
import BookingSlot from "./BookingSlot";
import { useFormik} from 'formik';
import { useRef } from 'react';
import { submitAPI } from "./fakeApi";
import { useNavigate } from "react-router-dom";
import { object, string, number } from 'yup';

function BookingForm({availabaleTimes}) {
    const minimumDate = new Date().toISOString().split('T')[0];
    const navigate = useNavigate();
    const [times, dispatch] = availabaleTimes
    const [active, setActive] = useState(null);
    const inputRef = useRef();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmation");
        }
    }


    const toDateInput = () => {
        inputRef.current.type = 'date';
    }

    let userSchema = object({
        resDate: string().required("Required"),
        resTime: string().required("Required"),
        guests: number().min(1, "Select a number of dinner").required("Required"),
        occassion: string().optional()
    })

    const formik = useFormik({
        initialValues: {
            resDate: "",
            resTime: "",
            guests: 0,
            occasion: ""
        },
        validationSchema: userSchema,
        onSubmit: values => submitForm(values),
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <input
                value={formik.values.resDate ? formik.values.resDate : "Date"}
                onFocus={toDateInput}
                name="resDate" min={minimumDate}
                required={true}
                onChange={(event)=> {
                    dispatch(event.target.value);
                    formik.handleChange(event);
                }}
                onBlur={formik.handleBlur}
                id="bookingDate"
                ref={inputRef}
                />
                {formik.touched.resDate && formik.errors.resDate ? (
                    <div className="error errorDate">{formik.errors.resDate}</div>
                ) : null}
                <div id="bookingTime">
                    {formik.values.resDate ? [...times].map((time, index) => <BookingSlot index={index} activeIndex={active} onClick={setActive} children={time} handleChange={formik.handleChange} key={index}/>) : null}
                </div>
                {formik.touched.resTime && formik.errors.resTime ? (
                    <div className="error errorTime">{formik.errors.resTime}</div>
                ) : null}
                <select name="guests" defaultValue="Number of Diners" onChange={formik.handleChange} onBlur={formik.handleBlur} id="guests">
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
                {formik.touched.guests && formik.errors.guests ? (
                    <div className="error errorGuests">{formik.errors.guests}</div>
                ) : null}
                <select name="occasion" onChange={formik.handleChange} onBlur={formik.handleBlur} id="bookingOccasion">
                    <option disabled hidden>Occasion</option>
                    <option value="No special occasion">No special occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>
                {formik.touched.occassion && formik.errors.occassion ? (
                    <div className="error errorOccation">{formik.errors.occassion}</div>
                ) : null}
                <input type="submit" value="Let's go" className='btn btn-primary' id="bookingSubmit"/>
            </form>
        </>


    );
  }

  export default BookingForm;