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
    <div className="img-card-container">
      <img
        className="img-card"
        id={id}
        src={imageUrl}
        alt={name}
        onClick={onClick}
      />
    </div>
  );
}
