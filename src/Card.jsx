import './styles/main.css';

export default function Card({
  id,
  name,
  imageUrl,
  handleClick,
  storeKey,
  checkScore,
}) {
  function onClick() {
    handleClick();
    storeKey(id);
    checkScore(id);
  }

  return (
    <div className="card-stack">
      <img
        className="img-card card-animation"
        key={Math.random()}
        id={id}
        src={imageUrl}
        alt={name}
        onClick={onClick}
      />
      <img
        className="card-back"
        key={Math.random()}
        src="./src/public/mtg-card-back.jpg"
      />
    </div>
  );
}
