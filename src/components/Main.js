function Main(props) {
  const imgSrc = props.imgSrc;
  return (
    <a href="#">
      <div className="imgB">
        <img src={imgSrc} alt={props.alt ?? "slide"} />
      </div>
    </a>
  )
}

export default Main
