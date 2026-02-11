import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Util, Nav, Main, Sec1, Sec2, Sec3, Sec4, Footer } from './components';
import { s1, s1Imgs, s3, s4 } from './data';
import './App.css';
import './App.media.css';

function App() {
  const publicUrl = process.env.PUBLIC_URL || "";
  const mainImgs = [
    `${publicUrl}/img/s1.png`,
    `${publicUrl}/img/s2.png`,
    `${publicUrl}/img/s3.jpg`,
    `${publicUrl}/img/s4.png`
  ];
  const appStyle = {
    "--logo-img": `url(${publicUrl}/img/logo.png)`,
    "--section2-bg": `url(${publicUrl}/img/s3bg.jpg)`
  };

  return (
    <div className="App" style={appStyle}>
      <header id="header">
        <div className="up">
          <h1 id="logo"><a href="#"></a></h1>
          <Util />
        </div>
        <Nav />
      </header>
      <div className="main">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}          
          navigation={{
            nextEl: ".s-next",
            prevEl: ".s-prev",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {mainImgs.map((src, i) => (
            <SwiperSlide key={i}>
              <Main i={i} imgSrc={src} alt={`slide-${i + 1}`} />
            </SwiperSlide>
          ))}
          <button className="s-next">다음</button>
          <button className="s-prev">이전</button>
        </Swiper>
      </div>
      <div className="section">
        <section id="section1">
          <p>신제품</p>
          <h2>오늘부터 시작하는 신상 건강 아이템</h2>
          <div className="boxWrap">
            <div className="slide">
              <Swiper
                spaceBetween={24}
                slidesPerView={3}
                slidesPerGroup={3}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                {s1Imgs.map((_, i) => (
                  <SwiperSlide key={i}>
                    <Sec1 s1={s1} s1Imgs={s1Imgs} i={i} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <Sec2 />
        <section id="section3">
          <div className="section3-head">
            <div className="section3-title">
              <p className="section3-kicker">실시간 리뷰</p>
              <h2>실시간 업데이트! 리얼 구매 후기</h2>
            </div>
            <a href="#" className="section3-more">생생후기 더보기 &gt;</a>
          </div>
          <div className="boxWrap">
            <ul>
              {s3.map((_, i) => (
                <Sec3 key={i} s3={s3} i={i} />
              ))}
            </ul>
          </div>
        </section>
        <section id="section4">
          <ul>
            {s4.map((_, i) => (
              <Sec4 key={i} s4={s4} i={i} />
            ))}
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
