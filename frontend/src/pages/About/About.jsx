import Collapse from "../../components/Collapse/Collapse";

function About() {
  return (
    <main className="about-page">
      <Collapse title="Fiabilité">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements.
      </Collapse>
      <Collapse title="Respect">
        La bienveillance fait partie des valeurs fondatrices de Kasa.
      </Collapse>
      <Collapse title="Service">
        Nos équipes se tiennent à votre disposition pour vous assurer une expérience parfaite.
      </Collapse>
      <Collapse title="Sécurité">
        La sécurité est la priorité de Kasa, autant pour nos hôtes que pour les voyageurs.
      </Collapse>
    </main>
  );
}

export default About;