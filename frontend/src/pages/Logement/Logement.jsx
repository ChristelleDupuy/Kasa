import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Slideshow from "../../components/Slideshow/Slideshow";
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
    </main>
  );
}

export default Logement;