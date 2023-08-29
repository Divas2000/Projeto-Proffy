import { fireEvent, render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as Stories from "./Checkbox.stories";

const { Default: Checkbox } = composeStories(Stories);

describe("Checkbox Component", () => {
  test("render the checkbox", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument();
  });

  test("render the correct label for checkbox", () => {
    render(<Checkbox />);

    const inputLabel = screen.getByLabelText(/lembrar-me/i);

    expect(inputLabel).toBeInTheDocument();
  });

  test("checkbox be checked on the click", () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
