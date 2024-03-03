import { render,screen } from "@testing-library/react";
import ContactPage from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component",()=>{
    render(<ContactPage/>);


    const heading = screen.getByRole("heading");

    //Assertion---
    expect(heading).toBeInTheDocument();

    


})