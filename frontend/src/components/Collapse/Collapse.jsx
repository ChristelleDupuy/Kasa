import { useState } from "react";
import "./Collapse.css";
import { ChevronUp, ChevronDown } from "lucide-react";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        {isOpen ? (
          <ChevronUp className="collapse-icon" />
        ) : (
          <ChevronDown className="collapse-icon" />
        )}
      </div>

      {isOpen && (
        <div className="collapse-content">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;