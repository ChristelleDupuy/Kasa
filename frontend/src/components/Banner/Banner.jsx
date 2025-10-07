import "./Banner.css";

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="bannière" className="banner-image" />
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  );
}

export default Banner;