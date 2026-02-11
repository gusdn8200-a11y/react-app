function Sec4(props) {
  const imgSrc = props.i === 1 ? './img/s5_2.png' : `./img/s5_${props.i + 1}.jpg`;
  return (
    <li>
      <a href="#none">
        <div className="img">
          <img src={imgSrc} alt={`s5-${props.i + 1}`} />
        </div>
      </a>
    </li>
  )
}

export default Sec4
