import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as Stories from "./Label.stories";

const { Default: Label, WithHelperText: LabelWithHelperText } =
  composeStories(Stories);

describe("Label Component", () => {
  test("render the correct content for Label", () => {
    render(<Label />);

    const label = screen.getByText(/biografia/i);

    expect(label).toBeInTheDocument();
  });

  test("render helper text when informed", () => {
    render(<LabelWithHelperText />);

    const helperText = screen.getByLabelText(/aviso/i);

    expect(helperText).toBeInTheDocument();
  });
});
