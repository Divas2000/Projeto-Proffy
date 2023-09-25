/* eslint-disable react/jsx-key */
import { fireEvent, render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as Stories from "./Input.stories";

const {
  Default,
  WithHelperLabel,
  OnlyLettersInput,
  OnlyNumbersInput,
  PhoneInput,
  TimeInput,
  CurrencyInput,
} = composeStories(Stories);

describe("Input Component", () => {
  test.each([
    ["Default", <Default />],
    ["WithHelperLabel", <WithHelperLabel />],
    ["OnlyLettersInput", <OnlyLettersInput />],
    ["OnlyNumbersInput", <OnlyNumbersInput />],
    ["PhoneInput", <PhoneInput />],
    ["TimeInput", <TimeInput />],
    ["CurrencyInput", <CurrencyInput />],
  ])("render %s variant", (_, element) => {
    render(element);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });

  test.each([
    ["WithOnlyNumbersInput", <OnlyNumbersInput />],
    ["WithPhoneInput", <PhoneInput />],
    ["WithTimeInput", <TimeInput />],
    ["CurrencyInput", <CurrencyInput />],
  ])("it should allow only numbers in the %s variant", (variant, element) => {
    render(element);

    const input = screen.getByLabelText(
      /whatsapp|até|preço/i,
    ) as HTMLInputElement;

    const value = `
      The quick brown fox jumps over the lazy dog
      !@#$%^&()_+{}[]|:;<>,\\.?/~\`'"-=
    `;

    expect(input.value).toBe("");

    fireEvent.input(input, { target: { value } });

    if (variant.includes("Currency")) {
      expect(input.value).toBe("R$ ");
    } else {
      expect(input.value).toBe("");
    }
  });

  test("it should format the phone number correctly in the phoneMask input", () => {
    render(<PhoneInput />);

    const input = screen.getByLabelText(/whatsapp/i) as HTMLInputElement;

    expect(input.value).toBe("");

    fireEvent.input(input, { target: { value: "87987654321" } });

    expect(input.value).toBe("(87) 98765-4321");
  });

  test("it should format the time correctly in the timeMask input", () => {
    render(<TimeInput />);

    const input = screen.getByLabelText(/até/i) as HTMLInputElement;

    expect(input.value).toBe("");

    fireEvent.input(input, { target: { value: "1230" } });

    expect(input.value).toBe("12:30");
  });

  test("it should format the currency correctly in the currencyMask input", () => {
    render(<CurrencyInput />);

    const input = screen.getByLabelText(/preço/i) as HTMLInputElement;

    expect(input.value).toBe("");

    fireEvent.input(input, { target: { value: "35869" } });

    expect(input.value).toBe("R$ 358,69");
  });

  test("it should allow only letters in the onlyLettersMask input", () => {
    render(<OnlyLettersInput />);

    const input = screen.getByLabelText(/nome/i) as HTMLInputElement;

    expect(input.value).toBe("");

    fireEvent.input(input, {
      target: { value: "John Doe0123456789\\><!|@#¨{}}'\"/?$%^&*()+=,[]:;._-" },
    });

    expect(input.value).toBe("John Doe");
  });

  test("if no mask is provided, the input must return the same value", () => {
    render(<Default />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input.value).toBe("");

    fireEvent.input(input, {
      target: { value: "John Doe123#" },
    });

    expect(input.value).toBe("John Doe123#");
  });
});
