import { render, screen, fireEvent } from "@testing-library/react";
import Collapse from "../components/Collapse/Collapse";

describe("Collapse component", () => {
  it("affiche le titre du collapse", () => {
    render(<Collapse title="Titre de test">Contenu</Collapse>);
    expect(screen.getByText("Titre de test")).toBeInTheDocument();
  });

  it("le contenu est caché au départ", () => {
    render(<Collapse title="Titre">Texte de test</Collapse>);
    const content = screen.getByText("Texte de test");

    expect(content.closest(".collapse").classList.contains("open")).toBe(false);
  });

  it("le contenu s’affiche après clic sur le titre", () => {
    render(<Collapse title="Titre">Texte de test</Collapse>);
    const header = screen.getByText("Titre");
    fireEvent.click(header);
    const container = screen.getByText("Texte de test").closest(".collapse");
    expect(container.classList.contains("open")).toBe(true);
  });
});