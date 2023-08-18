import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as Stories from "./HomeButton.stories";

const { Primary, Secondary } = composeStories(Stories);

describe("HomeButton Component", () => {
  test("render the correct label for primary button", () => {
    render(<Primary />);

    const label = screen.getByLabelText(/clique em dar aulas/i);

    expect(label).toBeInTheDocument();
  });
  test("render the correct label for secondary button", () => {
    render(<Secondary />);

    const label = screen.getByText(/clique em estudar/i);

    expect(label).toBeInTheDocument();
  });
});
