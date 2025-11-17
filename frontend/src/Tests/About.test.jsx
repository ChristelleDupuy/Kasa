import { render, screen } from "@testing-library/react";
import About from "../pages/About/About";
import { vi } from "vitest";

vi.mock("../components/Collapse/Collapse", () => ({
  default: ({ title }) => <div data-testid="collapse">{title}</div>,
}));

describe("Page About", () => {
  test("affiche la bannière", () => {
    render(<About />);
    const bannerElement = screen.getByRole("img", { name: /bannière/i });
    expect(bannerElement).toBeInTheDocument();
  });

  test("affiche 4 sections Collapse", () => {
    render(<About />);
    const collapses = screen.getAllByTestId("collapse");
    expect(collapses).toHaveLength(4);
  });

  test("affiche les bons titres dans les collapses", () => {
    render(<About />);
    expect(screen.getByText(/Fiabilité/i)).toBeInTheDocument();
    expect(screen.getByText(/Respect/i)).toBeInTheDocument();
    expect(screen.getByText(/Service/i)).toBeInTheDocument();
    expect(screen.getByText(/Sécurité/i)).toBeInTheDocument();
  });
});