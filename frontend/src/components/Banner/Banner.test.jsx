import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner component", () => {
  test("affiche le texte passé en prop", () => {
    render(<Banner image="test.jpg" text="Bienvenue sur Kasa" />);
    const textElement = screen.getByText(/Bienvenue sur Kasa/i);
    expect(textElement).toBeInTheDocument();
  });

  test("affiche bien l’image", () => {
    render(<Banner image="test.jpg" />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "test.jpg");
  });
});