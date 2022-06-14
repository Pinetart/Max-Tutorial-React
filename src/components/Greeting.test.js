import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

test("renders hello world as a test", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // Nothing

  // Assert
  const helloWorldElement = screen.getByText("Hello World", { exact: false });
  expect(helloWorldElement).toBeInTheDocument;
});
