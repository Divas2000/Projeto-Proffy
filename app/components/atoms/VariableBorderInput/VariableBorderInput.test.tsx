import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as Stories from "./VariableBorderInput.stories";

const { WithoutIcon, WithIcon } = composeStories(Stories);

describe("VariableBorderInput Component", () => {
  test("render the correct label for input with icon", () => {
    render(<WithIcon />);

    const label = screen.getByLabelText(/senha/i);

    expect(label).toBeInTheDocument();
  });

  test("render the icon for input with icon", () => {
    render(<WithIcon />);

    const icon = screen.getByLabelText(/ícone/i);

    expect(icon).toBeInTheDocument();
  });

  test("render the input with icon", () => {
    render(<WithIcon />);

    const inputWithIcon = screen.getByPlaceholderText(/senha/i);

    expect(inputWithIcon).toBeInTheDocument();
  });

  test("render the correct label for input without icon", () => {
    render(<WithoutIcon />);

    const label = screen.getByLabelText(/e-mail/i);

    expect(label).toBeInTheDocument();
  });

  test("render the input without icon", () => {
    render(<WithoutIcon />);

    const input = screen.getByPlaceholderText(/e-mail/i);

    expect(input).toBeInTheDocument();
  });
});
