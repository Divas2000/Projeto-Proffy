/* eslint-disable react/jsx-key */
import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import * as Stories from "./Button.stories";

const { Default, Medium, Large, Disabled, WithIcon } = composeStories(Stories);

describe("Button Component", () => {
  test.each([
    ["Default", <Default />],
    ["Medium", <Medium />],
    ["Large", <Large />],
    ["Disabled", <Disabled />],
    ["WithIcon", <WithIcon />],
  ])("render %s button variant", (_, element) => {
    render(element);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("expect Button to be disabled", () => {
    render(<Disabled />);

    const button = screen.getByRole("button", { name: /entrar/i });

    expect(button).toBeDisabled();
  });

  test("expect Button to have an icon", () => {
    render(<WithIcon />);

    const icon = screen.getByRole("img");

    expect(icon).toBeInTheDocument();
  });
});
