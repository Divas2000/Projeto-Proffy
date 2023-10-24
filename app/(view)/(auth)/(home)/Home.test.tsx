import { render, screen } from "@testing-library/react";
import HomeScreen from "./page";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: "/test-login-route",
  }),
}));

describe("Home screen", () => {
  test("render the main image", () => {
    render(<HomeScreen />);
    const img = screen.getByAltText("principal imagem da home");
    expect(img).toBeInTheDocument();
  });
  test("render Dar aulas button", () => {
    render(<HomeScreen />);

    const button = screen.getByRole("button", { name: /dar aulas/i });
    expect(button).toBeInTheDocument();
  });
  test("render Estudar button", () => {
    render(<HomeScreen />);

    const button = screen.getByRole("button", { name: /estudar/i });
    expect(button).toBeInTheDocument();
  });
});
