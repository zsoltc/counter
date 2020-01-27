import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./index";

test("renders prop value", () => {
  const el = render(
    <Counter value={42} dispatch={() => {}} fetchRandom={() => {}} />
  );
  expect(el.getByText(/42/)).toBeInTheDocument();
});

test("prop functions are called when appropriate buttons are clicked", () => {
  const dispatch = jest.fn();
  const fetchRandom = jest.fn();
  const el = render(<Counter value={42} {...{ dispatch, fetchRandom }} />);

  fireEvent.click(el.getByText(/\-/));
  expect(dispatch.mock.calls.length).toBe(1);

  fireEvent.click(el.getByText(/\+/));
  expect(dispatch.mock.calls.length).toBe(2);

  fireEvent.click(el.getByText(/Reroll/));
  expect(fetchRandom.mock.calls.length).toBe(1);
});
