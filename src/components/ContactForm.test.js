import React from "react";
import { render }  from '@testing-library/react'
import 'mutationobserver-shim';
import ContactForm from "./ContactForm";

test("renders Contactform without crashing", () => {
  render(<ContactForm />);
} );


test("Each form field renders to the DOM", () => {
    //Arrange
    const {getByLabelText} = render(<ContactForm />);

    //Act
    const firstName = getByLabelText("First Name*");
    const lastName = getByLabelText("Last Name*");
    const email = getByLabelText("Email*");
    const message = getByLabelText("Message*");

})