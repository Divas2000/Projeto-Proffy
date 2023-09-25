/* eslint-disable react/jsx-key */
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as Stories from "./VariableBorderInput.stories";

const { Default, WithoutIcon, WithIcon } = composeStories(Stories);

describe("VariableBorderInput Component", () => {
  test("render the correct label for input with icon", () => {
    render(<WithIcon />);

    const label = screen.getByLabelText(/senha/i);

    expect(label).toBeInTheDocument();
  });

  test("render the icon for input with icon", () => {
    render(<WithIcon />);

    const icon = screen.getByRole("img");

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

  test.each([
    ["rounded", <Default />],
    ["rounded-t", <Default border="top" />],
    ["rounded-b", <Default border="bottom" />],
    ["rounded-none", <Default border="none" />],
  ])("it should apply the border-radius style corretly", (variant, element) => {
    render(element);

    const input = screen.getByLabelText(/nome/i);

    expect(input).toHaveClass(variant);
  });

  test.each([
    ["text", <Default />],
    ["email", <Default type="email" />],
    ["tel", <Default type="tel" />],
    ["password", <Default type="password" />],
  ])("it should apply the type attribute corretly", (variant, element) => {
    render(element);

    const input = screen.getByLabelText(/nome/i);

    expect(input).toHaveAttribute("type", variant);
  });
});
