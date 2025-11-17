import { render, screen, fireEvent } from "@testing-library/react";
import Slideshow from "../components/Slideshow/Slideshow";
import { describe, it, expect } from "vitest";

describe("Slideshow component", () => {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

  it("affiche la première image au départ", () => {
    render(<Slideshow pictures={images} />);
    const displayedImage = screen.getByRole("img");
    expect(displayedImage).toHaveAttribute("src", "img1.jpg");
  });

  it("change d'image quand on clique sur la flèche droite", () => {
    render(<Slideshow pictures={images} />);
    const rightArrow = document.querySelector(".arrow.right");
    fireEvent.click(rightArrow);
    const displayedImage = screen.getByRole("img");
    expect(displayedImage).toHaveAttribute("src", "img2.jpg");
  });

  it("revient à la dernière image quand on clique sur la flèche gauche au début", () => {
    render(<Slideshow pictures={images} />);
    const leftArrow = document.querySelector(".arrow.left");
    fireEvent.click(leftArrow);
    const displayedImage = screen.getByRole("img");
    expect(displayedImage).toHaveAttribute("src", "img3.jpg");
  });
});