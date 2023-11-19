import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./page";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: "/test-login-route",
  }),
}));

describe("Register Page", () => {
  test("submit button should be disabled when no value is provided", () => {
    render(<Register />);

    const button = screen.getByRole("button", { name: /concluir cadastro/i });

    expect(button).toBeDisabled();
  });

  test("submit button should be disabled when all inputs are not filled correctly", () => {
    render(<Register />);

    const nameInput = screen.getByRole("textbox", { name: /^nome/i });
    const lastNameInput = screen.getByRole("textbox", { name: /sobrenome/i });
    const emailInput = screen.getByRole("textbox", { name: /e-mail/i });
    const passwordInput = screen.getByLabelText(/senha/i);

    fireEvent.input(nameInput, {
      target: { value: "John" },
    });

    fireEvent.input(lastNameInput, {
      target: { value: "Doe" },
    });

    fireEvent.input(emailInput, {
      target: { value: "john-doe.com" },
    });

    fireEvent.input(passwordInput, {
      target: { value: "123456" },
    });

    const button = screen.getByRole("button", { name: /concluir cadastro/i });

    expect(button).toBeDisabled();
  });

  test("error messages should be displayed on blur when an input is filled incorrectly", async () => {
    render(<Register />);

    const user = userEvent.setup();

    const nameInput = screen.getByRole("textbox", { name: /^nome/i });
    const emailInput = screen.getByRole("textbox", { name: /e-mail/i });
    const passwordInput = screen.getByLabelText(/senha/i);

    await user.click(nameInput);
    await user.tab();
    await user.tab();
    await user.type(emailInput, "john-doe.com");
    await user.type(passwordInput, "123456");
    await user.tab();

    const errors = await screen.findAllByRole("alert");

    expect(errors).toHaveLength(4);
  });
});
