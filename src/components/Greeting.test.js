import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

describe("Greeting component", () => {
  test("renders hello world as a test", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // Nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument;
  });

  test("renders its good to see you if button was not clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // Nothing

    // Assert
    const goodToSeeYouElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(goodToSeeYouElement).toBeInTheDocument;
  });

  test("renders changed if button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedElement = screen.queryByText("changed", { exact: false });
    expect(changedElement).toBeInTheDocument;
  });

  test("paragraph should not be visible when button is clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const goodToSeeYouElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(goodToSeeYouElement).toBeNull;
  });
});
