import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/Collapse";
import "./Logement.css";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setLogement(found || null);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <p>Chargement...</p>;
  if (!logement) return <Navigate to="/error" />;

  return (
    <main className="logement-page">
      <Slideshow pictures={logement.pictures} />

      <section className="logement-info">
        <div className="logement-header">
          <div className="logement-header-left">
            <h1>{logement.title}</h1>
            <p className="location">{logement.location}</p>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="logement-header-right">
            <div className="host-info">
              <div className="host-name">{logement.host.name}</div>
              <img
                src={logement.host.picture}
                alt={logement.host.name}
                className="host-picture"
              />
            </div>

            <div className="rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < logement.rating ? "star filled" : "star"}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="collapses">
          <Collapse title="Description"><p>{logement.description}</p></Collapse>
          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </section>
    </main>
  );
}

export default Logement;