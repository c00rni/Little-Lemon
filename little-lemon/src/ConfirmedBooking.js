import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ConfirmedBooking = () => {
    return (
        <main>
            <div className="container confirmation">
                <div className="message">
                    <FontAwesomeIcon inverse icon={faCircleCheck} size="6x" />
                    <h2>Your confimation has been confimed !</h2>
                    <p>You will receive an email with all the details.</p>
                </div>
            </div>
        </main>
    );
}

export default ConfirmedBooking;