import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: "/test-forgot-password",
  }),
}));

describe("LoginForm Component", () => {
  test("submit button should be disabled when no value is provided", () => {
    render(<LoginForm />);

    const button = screen.getByRole("button", { name: /entrar/i });

    expect(button).toBeDisabled();
  });

  test("submit button should be disabled when all inputs are not filled correctly", () => {
    render(<LoginForm />);

    const emailInput = screen.getByRole("textbox", { name: /e-mail/i });
    const passwordInput = screen.getByLabelText(/senha/i);

    fireEvent.input(emailInput, {
      target: { value: "john-doe.com" },
    });

    fireEvent.input(passwordInput, {
      target: { value: "123456" },
    });

    const button = screen.getByRole("button", { name: /entrar/i });

    expect(button).toBeDisabled();
  });

  test("error messages should be displayed on blur when an input is filled incorrectly", async () => {
    render(<LoginForm />);

    const user = userEvent.setup();

    const emailInput = screen.getByRole("textbox", { name: /e-mail/i });

    await user.type(emailInput, "john-doe.com");
    await user.tab();
    await user.tab();

    const errors = await screen.findAllByRole("alert");

    expect(errors).toHaveLength(2);
  });
});
