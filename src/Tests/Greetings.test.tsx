import { render, screen } from "@testing-library/react";
import { Greetings } from "../Components/Greetings";

test("greet component exists", () => {
  render(<Greetings />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("greet component with name", () => {
  render(<Greetings name="Developer" />);
  const textElement = screen.getByText("Hello Developer");
  expect(textElement).toBeInTheDocument();
});
