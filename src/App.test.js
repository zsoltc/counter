import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders with 'App' class", () => {
  const { container } = render(<App />);
  expect(container.firstChild.classList.contains("App")).toBe(true);
});
