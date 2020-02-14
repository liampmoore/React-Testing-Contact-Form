import React from "react";
import { render, fireEvent, getByRole, getByAltText }  from '@testing-library/react'
import 'mutationobserver-shim';
import ContactForm from "./ContactForm";
import { act } from "react-dom/test-utils";

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
    const message = getByLabelText("Message");


    //Assert
    expect(firstName).toBeInTheDocument()
    expect(lastName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(message).toBeInTheDocument()
})

test("Make sure that the submit button works", () => {
  const dummyFunction = jest.fn();
  //Arrange
  const {getByTestId, getByText, getByLabelText} = render(<ContactForm />);

  //Act
  const firstName = getByLabelText("First Name*");
  const lastName = getByLabelText("Last Name*");
  const email = getByLabelText("Email*");
  const message = getByLabelText("Message");
  const form = getByTestId('form');

  

  act(() => {
  fireEvent.change(firstName, { target: { value: 'aaa' } })
})

act(() => {
 fireEvent.change(lastName, { target: { value: 'aaa' } })
})

act(() => {
  fireEvent.change(email, { target: { value: 'aaa@email.com' } })
})

act(() => {
  fireEvent.change(message, { target: { value: 'aaa' } })
})

act(() => {
  fireEvent.submit(form)
})





})
