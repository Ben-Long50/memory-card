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
    <img
      className="img-card card-animation"
      key={Math.random()}
      id={id}
      src={imageUrl}
      alt={name}
      onClick={onClick}
    />
  );
}
