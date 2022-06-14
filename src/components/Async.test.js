import Async from "./Async";
import { render, screen } from "@testing-library/react";

describe("Async component", () => {
  test("Renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    // Arrange
    render(<Async />);

    // Act
    // nothing

    // Assert
    const listItemElements = await screen.findAllByRole("listitem");

    expect(listItemElements).not.toHaveLength(0);
  });
});
