import { render, screen, waitFor } from "@testing-library/react";
import Home from "./Home";
import * as React from "react";

vi.mock("../../components/Banner/Banner", () => ({
  default: ({ text }) => <div data-testid="banner">{text}</div>,
}));

vi.mock("../../components/Card/Card", () => ({
  default: ({ title }) => <div data-testid="card">{title}</div>,
}));

global.fetch = vi.fn();

describe("Page Home", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("affiche le message de chargement pendant la récupération des logements", () => {
    fetch.mockImplementation(() => new Promise(() => {}));
    render(<Home />);
    expect(screen.getByText(/Chargement des logements.../i)).toBeInTheDocument();
  });

  it("affiche les cartes de logements après chargement", async () => {
    const fakeData = [
      { id: "1", title: "Logement 1", cover: "img1.jpg" },
      { id: "2", title: "Logement 2", cover: "img2.jpg" },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => fakeData,
    });

    render(<Home />);

    await waitFor(() => {
      expect(screen.getAllByTestId("card")).toHaveLength(2);
    });

    expect(screen.getByTestId("banner")).toBeInTheDocument();
    expect(screen.getByText("Logement 1")).toBeInTheDocument();
    expect(screen.getByText("Logement 2")).toBeInTheDocument();
  });

});