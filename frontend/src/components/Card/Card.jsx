import "./Card.css";

function Card({ id, title, cover }) {
  return (
    <article className="card" key={id}>
      <img src={cover} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
    </article>
  );
}

export default Card;