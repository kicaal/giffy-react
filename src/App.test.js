import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "intersection-observer";

test("renders learn react link", () => {
  render(<App />);
  const title = screen.getByText(/Los gifs más populares/i);
  expect(title).toBeInTheDocument();
});
