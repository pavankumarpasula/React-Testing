import { render, screen } from "@testing-library/react";
import { Application } from "../Components/Application";

describe("Application component", () => {
  test("renders application component", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const pageHeading2 = screen.getByRole("heading", {
      level: 2,
    });
    expect(pageHeading2).toBeInTheDocument();
    const textAreaElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(textAreaElement).toBeInTheDocument();
    const textElementLabel = screen.getByLabelText("Bio");
    expect(textElementLabel).toBeInTheDocument();

    const applicationElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(applicationElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();

    const placeholderText = screen.getByPlaceholderText("FirstName");
    expect(placeholderText).toBeInTheDocument();
  });
});
