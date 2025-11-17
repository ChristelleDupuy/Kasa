import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Error from "../pages/Error/Error";

describe("Error page", () => {
  test("affiche le code 404", () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  test("affiche le message d’erreur", () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );
    expect(screen.getByText(/Oups ! La page que vous demandez n’existe pas/i)).toBeInTheDocument();
  });

  test("affiche le lien de retour vers l’accueil", () => {
    render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );
    expect(screen.getByText(/Retourner sur la page d’accueil/i)).toBeInTheDocument();
  });
});