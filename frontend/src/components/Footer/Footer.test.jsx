import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  it("affiche le logo de Kasa", () => {
    render(<Footer />);
    const logo = screen.getByAltText("Logo Kasa");
    expect(logo).toBeInTheDocument();
  });

  it("affiche le texte des droits d’auteur", () => {
    render(<Footer />);
    const text = screen.getByText(/© 2020 Kasa\. All rights reserved/i);
    expect(text).toBeInTheDocument();
  });
});