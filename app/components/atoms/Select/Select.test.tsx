import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { composeStory } from "@storybook/react";
import meta, { Default as DefaultStory } from "./Select.stories";

const Select = composeStory(DefaultStory, meta);

const mockOnValueChange = jest.fn();

describe("Select Component", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("render select component correctly", () => {
    render(<Select />);

    const select = screen.getByRole("combobox");

    expect(select).toBeInTheDocument();
    expect(select).not.toHaveValue();
  });

  test("render select placeholder correctly", () => {
    render(<Select />);

    const select = screen.getByPlaceholderText(/selecione/i);

    expect(select).toBeInTheDocument();
  });

  test.each([Select.args.options!])(
    "render select options when clicked",
    async (optionName) => {
      const user = userEvent.setup();

      render(<Select />);

      const select = screen.getByRole("combobox", { name: /dias da semana/i });

      await user.click(select);

      const options = screen.getAllByRole("option") as HTMLOptionElement[];

      expect(options).toHaveLength(7);
      expect(
        screen.getByRole("option", { name: optionName }),
      ).toBeInTheDocument();
    },
  );

  test("call onValueChange when an option is clicked", async () => {
    const user = userEvent.setup();

    render(<Select onValueChange={mockOnValueChange} />);

    const select = screen.getByRole("combobox", { name: /dias da semana/i });

    await user.click(select);

    const option = screen.getByRole("option", { name: "Sexta" });

    expect(option).toBeInTheDocument();

    await user.click(option);

    expect(mockOnValueChange).toHaveBeenCalledWith("Sexta");
  });

  test.each([Select.args.options!])(
    "render select options on enter keydown",
    async (optionName) => {
      const user = userEvent.setup();

      render(<Select />);

      await user.keyboard("{Tab}{Enter}");

      const options = screen.getAllByRole("option") as HTMLOptionElement[];

      expect(options).toHaveLength(7);
      expect(
        screen.getByRole("option", { name: optionName }),
      ).toBeInTheDocument();
    },
  );

  test("call onValueChange on enter keydown on a option", async () => {
    const user = userEvent.setup();

    render(<Select onValueChange={mockOnValueChange} />);

    await user.keyboard("{Tab}{Enter}");

    const option = screen.getByRole("option", { name: "Segunda" });

    expect(option).toBeInTheDocument();

    await user.keyboard("{ArrowDown}{ArrowDown}{Enter}");

    expect(mockOnValueChange).toHaveBeenCalledWith("Segunda");
  });
});
