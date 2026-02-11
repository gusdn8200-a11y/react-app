function Util() {
  const publicUrl = process.env.PUBLIC_URL || "";
  return (
    <div className="util">
      <ul>
        <li><a href="#">회원가입</a></li>
        <li><a href="#">로그인</a></li>
        <li><a href="#">고객센터</a></li>
        <li className="sns">
          <a href="#">
            <img src={`${publicUrl}/img/sns.png`} alt="sns" />
            <span>SNS</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Util
