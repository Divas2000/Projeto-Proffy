import { render, screen } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import meta, { Default as DefaultStory } from "./Textarea.stories";

const Textarea = composeStory(DefaultStory, meta);

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

  test("textarea height should have value fit-content if not informed", () => {
    render(<Textarea />);

    const textarea = screen.getByPlaceholderText(/biografia/i);

    expect(textarea).toHaveStyle("height: fit-content");
  });

  test("textarea height should be in pixels if a number is informed", () => {
    render(<Textarea height={168} />);

    const textarea = screen.getByPlaceholderText(/biografia/i);

    expect(textarea).toHaveStyle("height: 168px");
  });
});
