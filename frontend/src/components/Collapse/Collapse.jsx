import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import "./Collapse.css";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggleCollapse = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <ChevronDown
          className={`collapse-icon ${isOpen ? "open" : ""}`}
          size={35}
        />
      </div>

      <div
        ref={contentRef}
        className="collapse-content"
        style={{ maxHeight: height }}
      >
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Collapse;