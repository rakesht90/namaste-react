import "@testing-library/jest-dom";
import ContactUs from "../ContactUs";
import { render, screen } from "@testing-library/react";

it("Should load contact us component", () => {
  render(<ContactUs />);
  const mainHeading = screen.getByRole("heading", {
    level: 1,
    name: /Contact Us/i,
  });
  expect(mainHeading).toBeInTheDocument();
});
it("Should load text Our Company", () => {
  render(<ContactUs />);
  const ourCompany = screen.getByText(/Our company/i);
  expect(ourCompany).toBeInTheDocument();
});
