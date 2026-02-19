import { useState } from 'react'

function Footer() {
  const [familyOpen, setFamilyOpen] = useState(false)
  const handlePlaceholderLink = (event) => {
    event.preventDefault()
  }

  return (
    <footer id="footer">
      <div className="footer-inner">
        <div className="footer-col footer-call">
          <strong className="footer-phone">02-3439-7616</strong>
          <ul className="footer-hours">
            <li>평일 : 09:00 - 18:00</li>
            <li>점심 : 12:00 - 13:00</li>
            <li>주말/공휴일 휴무</li>
          </ul>
          <div className="footer-buttons">
            <button type="button" className="footer-btn">FAQ</button>
            <button type="button" className="footer-btn">1:1 문의</button>
          </div>
        </div>
        <div className="footer-col footer-contact">
          <p>마케팅 제품 문의 : mkt123@knpharm.co.kr</p>
          <p>국내영업 문의(약국,의약품도매) : 02-3490-5143, 5147, 5148</p>
          <p>국내영업 문의(유통) : 02-3490-5135, 5142</p>
          <p>해외영업 문의 : 02-3490-5160</p>
        </div>
        <div className="footer-col footer-company">
          <p className="footer-company-name">경남제약 주식회사</p>
          <p>대표이사 김성곤, 조정영</p>
          <p>사업자등록번호 134-81-42258[사업자정보확인]</p>
          <p>통신판매업 신고 : 제2012-경남김해-0004호</p>
          <p>[서울]서울특별시 강남구 언주로 702</p>
          <p>(논현동, 경남제약 타워)6층,7층,8층,11층</p>
          <p>[본사]52153 경상남도 의령군 의령읍 구름로4길 79</p>
        </div>
        <div className="footer-col footer-etc">
          <div className="footer-brand">경남제약주</div>
          <div className={`footer-family-wrap ${familyOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="footer-family"
              aria-haspopup="true"
              aria-expanded={familyOpen}
              aria-controls="footer-family-panel"
              onClick={() => setFamilyOpen((prev) => !prev)}
            >
              FAMILY SITE
              <span className="footer-caret">▾</span>
            </button>
            <ul className="footer-family-panel" id="footer-family-panel">
              <li><a href="/" onClick={handlePlaceholderLink}>경남제약 홈페이지</a></li>
              <li><a href="/" onClick={handlePlaceholderLink}>무좀엔PM</a></li>
              <li><a href="/" onClick={handlePlaceholderLink}>자하생력</a></li>
              <li><a href="/" onClick={handlePlaceholderLink}>미놀</a></li>
              <li><a href="/" onClick={handlePlaceholderLink}>경남제약 패밀리몰</a></li>
            </ul>
          </div>
          <ul className="footer-links">
            <li><a href="/" onClick={handlePlaceholderLink}>이용약관</a></li>
            <li><a href="/" onClick={handlePlaceholderLink}>개인정보처리방침</a></li>
            <li><a href="/" onClick={handlePlaceholderLink}>이메일무단수집거부</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
