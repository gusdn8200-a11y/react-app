function Sec1(props) {
  const imgSrc = props.s1Imgs?.[props.i];
  const item = props.s1?.[props.i];
  const handlePlaceholderLink = (event) => {
    event.preventDefault();
  };

  return (
    <a href="/" onClick={handlePlaceholderLink}>
      <div className="img">
        <img src={imgSrc} alt={item?.t ? `${item.t} 상품 이미지` : "상품 이미지"} />
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
