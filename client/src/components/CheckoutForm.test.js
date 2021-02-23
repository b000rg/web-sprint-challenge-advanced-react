import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

const tick = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};

test("form header renders", () => {
  render(<CheckoutForm />);

  const header = screen.getByText(/checkout form/i);

  expect(header).toBeVisible();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);
  const submit = screen.getByText(/checkout$/i);

  fireEvent.change(firstName, { target: { value: "Joe" } });
  fireEvent.change(lastName, { target: { value: "Biden" } });
  fireEvent.change(address, { target: { value: "1600 Pennsylvania Ave NW" } });
  fireEvent.change(city, { target: { value: "Washington" } });
  fireEvent.change(state, { target: { value: "DC" } });
  fireEvent.change(zip, { target: { value: "20500" } });
  fireEvent.click(submit);

  await tick();

  const successMessage = screen.getByTestId(/successMessage/);

  expect(successMessage).toBeVisible();
});
