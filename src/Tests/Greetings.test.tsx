import { render, screen } from "@testing-library/react";
import { Greetings } from "../Components/Greetings";

describe("Greet", () => {
  test("greet component exists", () => {
    render(<Greetings />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("greet component having a text with name", () => {
    render(<Greetings name="Developer" />);
    const textElement = screen.getByText("Hello Developer");
    expect(textElement).toBeInTheDocument();
  });
});
