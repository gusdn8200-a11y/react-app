import { useState } from 'react';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavItemClick = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  return (
    <nav id="nav" className={isOpen ? "is-open" : ""}>
      <div className="nav-inner">
        <button
          type="button"
          className="nav-toggle"
          aria-controls="nav-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className="nav-menu" id="nav-menu">
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
              <a href="/" onClick={handleNavItemClick}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
