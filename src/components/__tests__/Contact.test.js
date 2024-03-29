import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("Contact Us Page Test Case", () =>{

    beforeAll(() => {
        console.log("Before All");
    });

    beforeEach(() => {
        console.log("Before Each");
    });

    afterEach(() => {
        console.log("After Each");
    });

    // 'it' and 'test' are same, just an alias
    it("Should load Contact component", () => {

        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    
    });
    
    test("Should load button inside Contact component", () => {
    
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        // Assertion
        expect(button).toBeInTheDocument();
    
    });
});