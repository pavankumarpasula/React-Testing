import { render, screen } from "@testing-library/react";
import { Counter } from "../Components/Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("render Count component", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders count 1 after increment click", async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(buttonElement);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });
  test("renders count 2 after increment click", async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.dblClick(buttonElement);

    const countElement = await screen.findByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("elements are in right order", async () => {
    user.setup();
    render(<Counter />);
    const buttonElement = screen.getByRole("button", {
      name: "Set",
    });
    const amountButton = screen.getByRole("spinbutton");
    const IncrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.tab();

    expect(IncrementButton).toHaveFocus();
    await user.tab();

    expect(amountButton).toHaveFocus();
    await user.tab();
    expect(buttonElement).toHaveFocus();
  });
});
