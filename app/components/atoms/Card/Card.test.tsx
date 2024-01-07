/* eslint-disable react/jsx-key */
import { composeStory, composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import meta, { Default as DefaultStory } from "./Card.stories";
import * as CardContentStories from "./CardContent.stories";
import * as CardFooterStories from "./CardFooter.stories";

const Card = composeStory(DefaultStory, meta);
const { Default: DefaultContent, LargePadding: LargePaddingContent } =
  composeStories(CardContentStories);
const { Default: DefaultFooter, LargePadding: LargePaddingFooter } =
  composeStories(CardFooterStories);

describe("Card Component", () => {
  test("render Card component", () => {
    render(<Card />);

    const content = screen.getByText(/card content/i);
    const footer = screen.getByText(/card footer/i);

    expect(content).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  test("render default Card content", () => {
    render(<DefaultContent />);

    const content = screen.getByText(/card content/i);

    expect(content).toBeInTheDocument();
  });

  test("render Card content with large padding", () => {
    render(<LargePaddingContent />);

    const content = screen.getByText(/card content/i);

    expect(content).toBeInTheDocument();
    expect(content).toHaveClass("px-16", "py-14");
  });

  test("render default Card footer", () => {
    render(<DefaultFooter />);

    const footer = screen.getByText(/card footer/i);

    expect(footer).toBeInTheDocument();
  });

  test("render Card footer with large padding", () => {
    render(<LargePaddingFooter />);

    const footer = screen.getByText(/card footer/i);

    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass("px-16", "py-14");
  });
});
