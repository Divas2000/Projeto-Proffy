import { LoginData, loginSchema } from "./loginSchema";

const loginData: LoginData = {
  email: "john@email.com",
  password: "12345678",
};

describe("Login Schema", () => {
  test("should pass with valid data", () => {
    const validationResult = loginSchema.safeParse(loginData);

    expect(validationResult.success).toBe(true);
  });

  test("should fail when required fields are missing", () => {
    const missingFields = {
      email: "",
      password: "",
    };
    const validationResult = loginSchema.safeParse(missingFields);

    expect(validationResult.success).toBe(false);
  });

  test("should fail when the email is invalid", () => {
    const invalidEmail = { ...loginData, email: "john.com" };
    const validationResult = loginSchema.safeParse(invalidEmail);

    expect(validationResult.success).toBe(false);
  });

  test("should fail when the password is invalid", () => {
    const invalidPassword = { ...loginData, password: "12345" };
    const validationResult = loginSchema.safeParse(invalidPassword);

    expect(validationResult.success).toBe(false);
  });
});
