function Sec2() {
  const publicUrl = process.env.PUBLIC_URL || "";
  return (
    <section id="section2">
      <div className="sec2-inner">
        <div className="sec2-copy">
          <h2>레모나</h2>
          <p>비타민 명가에서 만든 국민 비타민 C</p>
          <p>19년 연속 브랜드 대상 No.1 비타민</p>
        </div>
        <div className="sec2-cards">
          <article className="sec2-card">
            <div className="sec2-thumb">
              <img src={`${publicUrl}/img/s3_1.jpg`} alt="레모나산 비타민C 150포 - 카카오 프렌즈" />
            </div>
            <div className="sec2-info">
              <p className="sec2-title">레모나산 비타민C 150포 - 카카오 프렌즈</p>
              <div className="sec2-price">
                <span className="sec2-origin">52,500원</span>
                <div className="sec2-now">
                  <span className="sec2-discount">47%</span>
                  <strong>27,900원</strong>
                </div>
                <span className="sec2-point">적 140원 (0.50%)</span>
              </div>
            </div>
          </article>
          <article className="sec2-card">
            <div className="sec2-thumb">
              <img src={`${publicUrl}/img/s3_2.png`} alt="레모나산 비타민C 150포 x 2박스 - 카카오 (쇼핑백 대 증정)" />
            </div>
            <div className="sec2-info">
              <p className="sec2-title">레모나산 비타민C 150포 x 2박스 - 카카오 (쇼핑백 대 증정)</p>
              <div className="sec2-price">
                <span className="sec2-origin">105,000원</span>
                <div className="sec2-now">
                  <span className="sec2-discount">48%</span>
                  <strong>54,900원</strong>
                </div>
                <span className="sec2-point">적 280원 (0.50%)</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Sec2
