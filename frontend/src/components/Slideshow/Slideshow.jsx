import { useState } from "react";
import "./Slideshow.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icônes légères et modernes

function Slideshow({ pictures }) {
  const [current, setCurrent] = useState(0);
  const total = pictures.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? total - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === total - 1 ? 0 : current + 1);
  };

  return (
    <div className="slideshow">
      {total > 1 && (
        <>
          <button className="arrow left" onClick={prevSlide}>
            <ChevronLeft size={32} />
          </button>
          <button className="arrow right" onClick={nextSlide}>
            <ChevronRight size={32} />
          </button>
          <div className="counter">
            {current + 1} / {total}
          </div>
        </>
      )}
      <img
        src={pictures[current]}
        alt={`Photo ${current + 1}`}
        className="slideshow-image"
      />
    </div>
  );
}

export default Slideshow;