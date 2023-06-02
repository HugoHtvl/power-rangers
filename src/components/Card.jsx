import "./Card.css";

const Card = ({ name, imgSrc, desc }) => {
  return (
    <>
      <div className="globalCard">
        <p>{name}</p>
        <img src={imgSrc} alt={name} />
        <p>{desc}</p>
      </div>
    </>
  );
};

export default Card;
