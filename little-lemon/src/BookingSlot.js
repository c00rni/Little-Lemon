function BookingSlot({ index, activeIndex, onClick, children, handleChange}){

    const handleClick = event => {
        onClick(index);
        handleChange(event)
    };

    return (
        <button type="button" value={children} name="resTime" className={activeIndex === index ? "btn btn-primary" : "btn btn-secondary-inverted"} onClick={handleClick}>
            {children}
        </button>
    );
}

export default BookingSlot;