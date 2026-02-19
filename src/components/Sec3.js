function Sec3(props) {
  const publicUrl = process.env.PUBLIC_URL || "";
  const item = props.s3?.[props.i];
  const imgSrc = `${publicUrl}/img/s4_${props.i + 1}.jpg`;
  const thumbSrc = `${publicUrl}/img/s4_${props.i + 1}s.jpg`;
  const handlePlaceholderLink = (event) => {
    event.preventDefault();
  };

  return (
    <li className="review-card">
      <a href="/" onClick={handlePlaceholderLink} className="review-link">
        <div className="review-img">
          <img src={imgSrc} alt={item?.title ?? "리뷰 이미지"} />
        </div>
        <div className="review-body">
          <div className="review-product">
            <img src={thumbSrc} alt="" />
            <p>{item?.title ?? ""}</p>
          </div>
          <div className="review-meta">
            <img src={`${publicUrl}/img/sta.png`} alt="별점" />
            <span>{item?.user ?? ""}</span>
          </div>
          <p className="review-text">{item?.review ?? ""}</p>
        </div>
      </a>
    </li>
  )
}

export default Sec3
