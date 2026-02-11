function Nav() {
  return (
    <nav id="nav">
      <div className="nav-inner">
        <ul className="nav-menu">
          {[
            "히스토리",
            "브랜드",
            "레모나LAB",
            "이너뷰티 젤",
            "KALO 칼로",
            "생유산균",
            "멜라꾸미",
            "데일리 바이탈",
            "레모나 간식",
            "레모나 드링크",
            "베스트",
            "이벤트",
            "서비스",
            "고객센터"
          ].map((label) => (
            <li key={label}>
              <a href="#">{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
