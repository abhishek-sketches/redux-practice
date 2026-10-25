import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

test("renders the page heading and docs link", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /react redux practice/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /react docs/i })).toBeInTheDocument();
});
