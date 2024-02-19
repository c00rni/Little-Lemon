// Accepts a date as a parameter and returns an array of available reservation times for the provided date
const fetchAPI = (date) => {
    const numberOfTime = Math.floor(Math.random() * 8);
    const times = new Set(Object.keys([...Array(numberOfTime)]).map(() => (Math.floor(Math.random()*(23-10))+10)+":00"));
    return times;
}



// This function accepts the booking form data as a parameter and will return true if the data was successfully submitted.
const submitAPI = (formData) => {
    return true;
}

export { fetchAPI, submitAPI };