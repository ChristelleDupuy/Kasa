import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import { vi } from "vitest";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: "1",
          title: "Logement test",
          cover: "test.jpg",
        },
      ]),
  })
);

describe("Page Home", () => {
  test("affiche le message de chargement pendant la récupération des logements", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/chargement/i)).toBeInTheDocument();
  });

  test("affiche les cartes de logements après chargement", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getByText("Logement test")).toBeInTheDocument()
    );
  });
});