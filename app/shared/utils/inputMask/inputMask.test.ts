import {
  currencyMask,
  onlyLettersMask,
  onlyNumbersMask,
  phoneMask,
  timeMask,
} from "./inputMask";

describe("inputMask Utils", () => {
  test.each([
    ["onlyNumbersMask", onlyNumbersMask],
    ["phoneMask", phoneMask],
    ["timeMask", timeMask],
    ["currencyMask", currencyMask],
  ])("it should return only numbers from %s function", (variant, fn) => {
    const returnedValue = fn(`
      The quick brown fox jumps over the lazy dog
      !@#$%^&()_+{}[]|:;<>,\\.?/~\`'"-=
    `);

    if (variant.includes("currency")) {
      expect(returnedValue).toBe("R$ ");
    } else {
      expect(returnedValue).toBe("");
    }
  });

  test("it should return the formatted phone number from phoneMask function", () => {
    const returnedValue = phoneMask("11987654321");

    expect(returnedValue).toBe("(11) 98765-4321");
  });

  test("it should return the formatted time from timeMask function", () => {
    const returnedValue = timeMask("0845");

    expect(returnedValue).toBe("08:45");
  });

  test("it should return the formatted currency from currencyMask function", () => {
    const returnedValue = currencyMask("12568");

    expect(returnedValue).toBe("R$ 125,68");
  });

  test("it should return only letters from onlyLetters function", () => {
    const returnedValue = onlyLettersMask(
      "John Doe0123456789\\><!|@#¨{}}'\"/?$%^&*()+=,[]:;._-",
    );

    expect(returnedValue).toBe("John Doe");
  });
});
