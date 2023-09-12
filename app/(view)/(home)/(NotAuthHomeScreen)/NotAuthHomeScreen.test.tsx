import { render, screen } from "@testing-library/react";
import NotAuthHomeScreen from "./page";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: "/test-login-route",
  }),
}));

describe("NotAuthHomeScreen", () => {
  test("render the main image", () => {
    render(<NotAuthHomeScreen />);
    const img = screen.getByAltText("principal imagem da home");
    expect(img).toBeInTheDocument();
  });
  test("render Dar aulas button", () => {
    render(<NotAuthHomeScreen />);

    const button = screen.getByRole("button", { name: /dar aulas/i });
    expect(button).toBeInTheDocument();
  });
  test("render Estudar button", () => {
    render(<NotAuthHomeScreen />);

    const button = screen.getByRole("button", { name: /estudar/i });
    expect(button).toBeInTheDocument();
  });
});
