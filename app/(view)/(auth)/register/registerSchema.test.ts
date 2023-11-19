import { RegisterData, registerSchema } from "./registerSchema";

const registerData: RegisterData = {
  name: "John",
  lastName: "Doe",
  email: "john@email.com",
  password: "12345678",
};

describe("Register Schema", () => {
  test("should pass with valid data", () => {
    const validationResult = registerSchema.safeParse(registerData);

    expect(validationResult.success).toBe(true);
  });

  test("should fail when required fields are missing", () => {
    const missingFields = {
      name: "",
      lastName: "",
      email: "",
      password: "",
    };
    const validationResult = registerSchema.safeParse(missingFields);

    expect(validationResult.success).toBe(false);
  });

  test("should fail when the name is invalid", () => {
    const invalidName = { ...registerData, name: "Lu" };
    const validationResult = registerSchema.safeParse(invalidName);

    expect(validationResult.success).toBe(false);
  });

  test("should fail when the last name is invalid", () => {
    const invalidLastName = { ...registerData, lastName: "Mo" };
    const validationResult = registerSchema.safeParse(invalidLastName);

    expect(validationResult.success).toBe(false);
  });

  test("should fail when the email is invalid", () => {
    const invalidEmail = { ...registerData, email: "john.com" };
    const validationResult = registerSchema.safeParse(invalidEmail);

    expect(validationResult.success).toBe(false);
  });

  test("should fail when the password is invalid", () => {
    const invalidPassword = { ...registerData, password: "12345" };
    const validationResult = registerSchema.safeParse(invalidPassword);

    expect(validationResult.success).toBe(false);
  });
});
