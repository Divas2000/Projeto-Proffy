import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import * as Stories from "./Button.stories";

const { Default, Medium, Large, Disabled, WithIcon } = composeStories(Stories);

describe("Button Component", () => {
  test("render all buttons variants", () => {
    render(
      <>
        <Default />
        <Medium />
        <Large />
        <Disabled />
        <WithIcon />
      </>,
    );

    const buttons = screen.getAllByRole("button");

    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  test("expect button to be disabled", () => {
    render(<Disabled />);

    const button = screen.getByText(/entrar/i);

    expect(button).toBeDisabled();
  });

  test("expect button to have an icon", () => {
    render(<WithIcon />);

    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
  });
});
