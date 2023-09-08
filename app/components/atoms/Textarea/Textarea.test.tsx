import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as Stories from "./Textarea.stories";

const { Default: Textarea } = composeStories(Stories);

describe("Textarea Component", () => {
  test("render the textarea element", () => {
    render(<Textarea />);

    const textarea = screen.getByPlaceholderText(/biografia/i);

    expect(textarea).toBeInTheDocument();
  });

  test("render the correct label for the textarea", () => {
    render(<Textarea />);

    const textareaLabel = screen.getByLabelText(/biografia/i);

    expect(textareaLabel).toBeInTheDocument();
  });
});
