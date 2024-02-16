import "../components/Card.css";
import pic1 from "../assets/pics/viajes-1.jpg"

export const Card = () => {
  return (
    <article className="card">
      <h3>Titulo tarjeta</h3>
      <a href="">URL</a>
      <div className="foto-container">
        <img src={pic1} alt="hamaca en la playa" />
      </div>
    </article>
  );
};
