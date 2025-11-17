import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header/Header";

describe("Header component", () => {
  it("affiche le logo Kasa", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const logo = screen.getByAltText(/logo kasa/i);
    expect(logo).toBeInTheDocument();
  });

  it("contient les liens de navigation Accueil et À propos", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText(/accueil/i)).toBeInTheDocument();
    expect(screen.getByText(/à propos/i)).toBeInTheDocument();
  });

  it("ajoute la classe active au lien actif", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Header />
      </MemoryRouter>
    );
    const aboutLink = screen.getByText(/à propos/i);
    expect(aboutLink.classList.contains("active")).toBe(true);
  });
});