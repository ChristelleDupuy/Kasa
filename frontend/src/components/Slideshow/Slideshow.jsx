import { useState } from "react";
import "./Slideshow.css";

function Slideshow({ pictures }) {
  const [current, setCurrent] = useState(0);
  const total = pictures.length;

  const prevSlide = () => setCurrent(current === 0 ? total - 1 : current - 1);
  const nextSlide = () => setCurrent(current === total - 1 ? 0 : current + 1);

  return (
    <div className="slideshow">
      {total > 1 && (
        <>
          <button className="arrow left" onClick={prevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button className="arrow right" onClick={nextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
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