import "./Card.css";

const Card = ({ name, imgSrc, desc, color }) => {
  return (
    <>
      <div className="globalCard">
        <p style={{ color }}>{name}</p>
        <img src={imgSrc} alt={name} />
        <p>{desc}</p>
      </div>
    </>
  );
};

export default Card;
