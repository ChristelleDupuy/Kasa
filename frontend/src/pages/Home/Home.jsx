import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import bannerImage from "../../assets/banner.jpg";
import "./Home.css";

function Home() {
  const logements = [
    {
      id: "1",
      title: "Appartement cosy à Paris",
      cover: "/images/logement1.jpg"
    },
    {
      id: "2",
      title: "Maison au bord de la mer",
      cover: "/images/logement2.jpg"
    },
    {
      id: "3",
      title: "Studio moderne à Lyon",
      cover: "/images/logement3.jpg"
    }
  ];

  return (
    <main className="home">
      <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
      <section className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;