import { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import bannerImage from "../../assets/banner.jpg";
import "./Home.css";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setLogements(data))
      .catch((err) => console.error("Erreur lors du chargement :", err));
  }, []);

  return (
    <main className="home">
      <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
      <section className="cards-container">
        {logements.length > 0 ? (
          logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))
        ) : (
          <p>Chargement des logements...</p>
        )}
      </section>
    </main>
  );
}

export default Home;