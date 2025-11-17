import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "../components/Card/Card";

const logement = {
  id: "abc123",
  title: "Appartement cosy",
  cover: "image.jpg",
};

describe("Card component", () => {
  test("affiche le titre du logement", () => {
    render(
      <MemoryRouter>
        <Card {...logement} />
      </MemoryRouter>
    );
    expect(screen.getByText("Appartement cosy")).toBeInTheDocument();
  });

  test("affiche l'image de couverture", () => {
    render(
      <MemoryRouter>
        <Card {...logement} />
      </MemoryRouter>
    );
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "image.jpg");
  });
});