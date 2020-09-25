import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders princy element", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/princy/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders five element", () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/hello/i);
  expect(linkElement.length).toBe(5);
});
