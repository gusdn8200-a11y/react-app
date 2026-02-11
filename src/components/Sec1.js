function Sec1(props) {
  const imgSrc = props.s1Imgs?.[props.i];
  const item = props.s1?.[props.i];
  return (
    <a href="#">
      <div className="img">
        <img src={imgSrc} alt="0" />
      </div>
      <div className="txt">
        <p>{item?.t ?? ""}</p>
        <p className="price-original">{item?.d ?? ""}</p>
        <p>{item?.p ?? ""}</p>
      </div>
    </a>
  )
}

export default Sec1
