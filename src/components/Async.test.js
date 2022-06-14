import Async from "./Async";
import { render, screen } from "@testing-library/react";

describe("Async component", () => {
  test("Renders posts if request succeeds", async () => {
    // Arrange
    render(<Async />);

    // Act
    // nothing

    // Assert
    const listItemElements = await screen.findAllByRole("listitem");
    
    expect(listItemElements).not.toHaveLength(0);
  });
});
