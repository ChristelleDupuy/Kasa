import { Link } from "react-router-dom";
import "./Card.css";

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} className="card-image" />
      <div className="card-title">{title}</div>
    </Link>
  );
}

export default Card;