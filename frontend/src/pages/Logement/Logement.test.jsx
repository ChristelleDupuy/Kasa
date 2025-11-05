import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Logement from "./Logement";

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: "1",
          title: "Appartement test",
          location: "Paris, France",
          tags: ["Calme", "Lumineux"],
          host: { name: "Christelle Dupuy", picture: "host.jpg" },
          rating: 4,
          description: "Très bel appartement lumineux",
          equipments: ["Wi-Fi", "Cuisine équipée"],
          pictures: ["photo1.jpg", "photo2.jpg"],
        },
      ]),
  })
);

describe("Page Logement", () => {
  it("affiche le texte 'Chargement...' au départ", () => {
    render(
      <MemoryRouter initialEntries={["/logement/1"]}>
        <Routes>
          <Route path="/logement/:id" element={<Logement />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(/Chargement/i)).toBeInTheDocument();
  });

  it("affiche les informations du logement après chargement", async () => {
    render(
      <MemoryRouter initialEntries={["/logement/1"]}>
        <Routes>
          <Route path="/logement/:id" element={<Logement />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getByText("Appartement test")).toBeInTheDocument()
    );
    expect(screen.getByText("Paris, France")).toBeInTheDocument();
    expect(screen.getByText("Christelle Dupuy")).toBeInTheDocument();
    expect(screen.getByText("Très bel appartement lumineux")).toBeInTheDocument();
    expect(screen.getByText("Cuisine équipée")).toBeInTheDocument();
  });

  it("redirige vers /error si le logement n'existe pas", async () => {
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve([]),
    });

    render(
      <MemoryRouter initialEntries={["/logement/999"]}>
        <Routes>
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/error" element={<p>Page d’erreur</p>} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getByText("Page d’erreur")).toBeInTheDocument()
    );
  });
});