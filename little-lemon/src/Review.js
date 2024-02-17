import { FaStar } from 'react-icons/fa'

function Review(props) {
    const numbers = [1, 2, 3, 4, 5]
    return (
        <>
            <article className="review">
                <div className="reviewer">
                    <img src={require("./assets/images/profile.png")} alt={props.name} />
                    <div className="reviewer-info">
                        {numbers.map((n) => (n <= props.rating) ? <FaStar color="#F4CE14" size={18}/> : <FaStar color="#333333" size={18}/>)}
                        <p>{props.name}</p>
                    </div>
                </div>
                <p className='reviewer-comment'>
                    {props.comment}
                </p>
            </article>
        </>
    );
}

export default Review;