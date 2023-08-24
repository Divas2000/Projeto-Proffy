import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as Stories from "./VariableBorderInput.stories";

const { WithoutIcon, WithIcon } = composeStories(Stories);

describe("VariableBorderInput Component", () => {
  test("render the correct label for input with icon", () => {
    render(<WithIcon />);

    const inputLabel = screen.getByLabelText(/senha/i);

    expect(inputLabel).toBeInTheDocument();
  });

  test("render the icon for input with icon", () => {
    render(<WithIcon />);

    const iconLabel = screen.getByLabelText(/ícone/i);

    expect(iconLabel).toBeInTheDocument();
  });

  test("render the correct label for input without icon", () => {
    render(<WithoutIcon />);

    const inputLabel = screen.getByLabelText(/e-mail/i);

    expect(inputLabel).toBeInTheDocument();
  });
});
