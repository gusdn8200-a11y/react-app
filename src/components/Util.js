function Util() {
  const publicUrl = process.env.PUBLIC_URL || "";
  const handlePlaceholderLink = (event) => {
    event.preventDefault();
  };

  return (
    <div className="util">
      <ul>
        <li><a href="/" onClick={handlePlaceholderLink}>회원가입</a></li>
        <li><a href="/" onClick={handlePlaceholderLink}>로그인</a></li>
        <li><a href="/" onClick={handlePlaceholderLink}>고객센터</a></li>
        <li className="sns">
          <a href="/" onClick={handlePlaceholderLink}>
            <img src={`${publicUrl}/img/sns.png`} alt="sns" />
            <span>SNS</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Util
