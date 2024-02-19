import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";

describe("Static text of the booking form", () => {

    test('Renders the BookingForm heading', () => {
        render(<BookingPage availabaleTimes={[]} date={[0,1]}/>);
        const headingElement = screen.getByText("Little Lemon");
        expect(headingElement).toBeInTheDocument();
    });

    test('Renders the BookingForm footer', () => {
        render(<BookingPage availabaleTimes={[]} date={[0,1]}/>);
        const headingElement = screen.getByText("Social Media links");
        expect(headingElement).toBeInTheDocument();
    })
})

