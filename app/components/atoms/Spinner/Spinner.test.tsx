import { composeStory } from "@storybook/react";
import meta, { Default as DefaultStory } from "./Spinner.stories";
import { render, screen } from "@testing-library/react";

const Spinner = composeStory(DefaultStory, meta);

describe("Spinner Component", () => {
  test("render spinner component correctly", () => {
    render(<Spinner />);

    const spinner = screen.getByRole("status");

    expect(spinner).toBeInTheDocument();
  });
});
