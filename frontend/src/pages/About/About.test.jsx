import { render, screen, fireEvent } from "@testing-library/react";
import About from "./About";
import { vi } from "vitest";

vi.mock("../../components/Banner/Banner", () => ({
  default: ({ image, brightness }) => (
    <div data-testid="banner" data-image={image} data-brightness={brightness}>
      Bannière mockée
    </div>
  ),
}));

vi.mock("../../components/Collapse/Collapse", () => ({
  default: ({ title, children }) => (
    <div data-testid="collapse">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  ),
}));

describe("Page About", () => {
  it("affiche la bannière", () => {
    render(<About />);
    const banner = screen.getByTestId("banner");
    expect(banner).toBeInTheDocument();
  });

  it("affiche 4 sections Collapse", () => {
    render(<About />);
    const collapses = screen.getAllByTestId("collapse");
    expect(collapses).toHaveLength(4);
  });

  it("affiche les bons titres dans les collapses", () => {
    render(<About />);
    const expectedTitles = ["Fiabilité", "Respect", "Service", "Sécurité"];
    expectedTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});