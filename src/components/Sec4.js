function Sec4(props) {
  const publicUrl = process.env.PUBLIC_URL || "";
  const imgSrc = props.i === 1
    ? `${publicUrl}/img/s5_2.png`
    : `${publicUrl}/img/s5_${props.i + 1}.jpg`;
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
