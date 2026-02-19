function Main(props) {
  const imgSrc = props.imgSrc;
  const handlePlaceholderLink = (event) => {
    event.preventDefault();
  };

  return (
    <a href="/" onClick={handlePlaceholderLink}>
      <div className="imgB">
        <img src={imgSrc} alt={props.alt ?? "slide"} />
      </div>
    </a>
  )
}

export default Main
