import { render, screen } from "@testing-library/react";
import RestroCard, { PromtedLabel } from "../RestroCard";
import MOCK_DATA from "../../mocks/resturantCardMock.json";
import "@testing-library/jest-dom";

it("it should load resturant card data", () => {
  render(<RestroCard resData={MOCK_DATA} />);
  const name = screen.getByText("Red Chilli");
  expect(name).toBeInTheDocument();
});

it("should render the component only when the condition passes", () => {
  const condition = MOCK_DATA.info.promoted;
  const ConditionalComponent = condition
    ? PromtedLabel(RestroCard)
    : RestroCard;

  render(<ConditionalComponent resData={MOCK_DATA} />);
  if (condition) {
    const renderedComponent = screen.getByText("Promoted");
    expect(renderedComponent).toBeInTheDocument();
  }
});
