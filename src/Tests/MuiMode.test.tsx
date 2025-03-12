import { render, screen } from ".././test-utilis";
import { MuiMode } from "../Components/MuiMode";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });

  test("renders text in white color for dark mode", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" });
  });
});
