import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import meta, { Default as DefaultStory } from "./IconButton.stories";

const IconButton = composeStory(DefaultStory, meta);

describe("IconButton Component", () => {
  test("render the button", () => {
    render(<IconButton />);

    const button = screen.getByLabelText(/envie uma foto/i);

    expect(button).toBeInTheDocument();
  });

  test("render the icon", () => {
    render(<IconButton />);

    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
  });
});
