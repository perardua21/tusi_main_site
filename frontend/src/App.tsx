import React, { useEffect, useState } from "react";
import "./App.css";
import mainLogo from "./assets/main_logo.png";

interface Award {
  date: string;
  title: string;
  prize: string;
}

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  const slogan = "Revolutionizing Space Technology";

  const awards: Award[] = [
    { date: "2025. 09", title: "한화에어로스페이스 2025 spacechallenger 우주동아리 지원 공모전", prize: "수상" },
    { date: "2024. 12", title: "2024 DRB Space Challenge", prize: "최우수상" },
    { date: "2024. 02", title: "2024 DRB Space Challenge", prize: "우수상" },
    { date: "2023. 05", title: "제 59회 한국추진공학회 2022년도 추계학술대회", prize: "전국대학생로켓연합회 우수발표논문상" },
    { date: "2022. 11", title: "제 20회 전국 항공우주과학경진대회 로켓학술대회 부문", prize: "대상" },
    { date: "2021. 12", title: "제 19회 전국 항공우주과학경진대회 로켓학술대회 부문", prize: "동상" },
    { date: "2021. 12", title: "제 19회 전국 항공우주과학경진대회 로켓학술대회 부문", prize: "장려상" },
    { date: "2018. 08", title: "제 27회 전국 대학생 로켓 발사 대회", prize: "동상" },
    { date: "2017. 08", title: "제 26회 전국 대학생 로켓 발사 대회", prize: "동상" },
    { date: "2016. 08", title: "제 25회 전국 대학생 로켓 발사 대회", prize: "은상" },
    { date: "2015. 08", title: "제 24회 전국 대학생 로켓 발사 대회", prize: "동상" },
    { date: "2004. 07", title: "제 5회 전국대학교로켓연하회 캠프 소형로켓부문", prize: "동상" },
    { date: "2000. 08", title: "제 9회 전국대학생 로켓발사대회 제 1회 대학생 로켓캠프 소형로켓 부문", prize: "은상" },
    { date: "1998. 10", title: "전국 로케트 경진대회 소형부문", prize: "대상" },
    { date: "1997. 09", title: "제 6회 전국대학생 로켓 경진대회 소형부문", prize: "금상" },
    { date: "1997. 09", title: "제 6회 전국대학생 로켓 경진대회 모델부문", prize: "금상" },
    { date: "1995. 09", title: "제 5회 전국연합ROCKET 경진대회 소형 ROCKET 부문", prize: "대상" },
    { date: "1994. 10", title: "제3회 전국대학 로켓경진대회 소형부문", prize: "대상" },
    { date: "1993. 10", title: "제2회 전국대학 로케트 경진대회", prize: "대상" },
  ];

  // Intro animation
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!showIntro) {
      const delay = 500;
      const timer = setTimeout(() => {
        let index = 0;
        const interval = setInterval(() => {
          setTypedText(slogan.slice(0, index + 1));
          index++;
          if (index === slogan.length) clearInterval(interval);
        }, 80);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  // Visitor count fetch (수정됨: 상대 경로 사용)
  useEffect(() => {
    if (!showIntro) {
      // Minikube나 배포 환경에서는 Nginx가 Proxy 역할을 하므로
      // 도메인 상관없이 /api/visitors로 보내면 Nginx가 Backend로 전달해줌
      const apiUrl = "/api/visitors";

      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setVisitorCount(data.visitors))
        .catch((err) => {
          console.error("Failed to fetch visitor count:", err);
          setVisitorCount(1985); // 에러 발생 시 기본값 표시
        });
    }
  }, [showIntro]);

  return (
    <>
      <div className="stars"></div>
      <div className="twinkling"></div>

      {showIntro && (
        <div className="intro-overlay">
          <div className="intro-line"></div>
          <div className="intro-text-fade">TUSI</div>
        </div>
      )}

      <div className={`app-container ${showIntro ? "hidden" : "visible"}`}>
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-content">
            <a href="#home" className="nav-logo">TUSI</a>
            <div className="nav-links">
              <a href="#about">소개</a>
              <a href="#activity">활동</a>
              <a href="#awards">실적</a>
              <a href="#location">위치</a>
            </div>
          </div>
        </nav>

        {/* HOME */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <img src={mainLogo} alt="TUSI Logo" className="logo-img" />
            <h1 className="hero-title">TUSI</h1>
            <p className="hero-subtitle">Time Universe Space & I</p>
            <p className="hero-desc">경희대학교 로켓연구회 Since 1985</p>

            <div className="slogan-container">
              <span className="hero-slogan">{typedText}</span>
              <span className="cursor">|</span>
            </div>

            {visitorCount !== null && (
              <div className="visitor-badge">
                <span className="label">Visitor</span>
                <span className="count">{visitorCount.toLocaleString()}</span>
              </div>
            )}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="content-section">
          <h2 className="section-title">Who We Are</h2>
          <div className="card glass-card intro-card">
            <p>
              <strong>경희대학교 로켓연구회 TUSI</strong>는 1985년 창립된 우주과학 소모임입니다.
            </p>
            <p>
              초기에는 18cm 컴퍼지트 모터 자체 제작을 시작으로, 현재는{" "}
              <strong>전국대학생로켓연합대회(NURA)</strong> 및 캔위성 대회에서 꾸준히 성과를 내고 있습니다.
            </p>
            <p>로켓을 사랑하는 누구에게나 열려 있는 공동체입니다.</p>
          </div>
        </section>

        {/* ACTIVITIES */}
        <section id="activity" className="content-section">
          <h2 className="section-title">Activities</h2>

          <div className="grid-container">
            <div className="card glass-card">
              <h3>🚀 정기 로켓 발사</h3>
              <p>매주 목요일 총회 및 5월/8월 로켓 발사 행사 진행</p>
            </div>

            <div className="card glass-card">
              <h3>🛰 프로젝트 연구</h3>
              <p>임베디드·제어·기체설계 등 다양한 프로젝트 수행</p>
            </div>

            <div className="card glass-card">
              <h3>🤝 네트워킹 & MT</h3>
              <p>선후배 교류 및 타 대학 로켓 동아리와 네트워킹</p>
            </div>
          </div>
        </section>

        {/* AWARDS */}
        <section id="awards" className="content-section">
          <h2 className="section-title">Awards & History</h2>

          <div className="card glass-card full-width">
            <div className="awards-list">
              {awards.map((item, idx) => (
                <div key={idx} className="award-item">
                  <span className="award-date">{item.date}</span>
                  <div className="award-info">
                    <span className="award-name">{item.title}</span>
                    <span className="award-prize">{item.prize}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section id="location" className="content-section">
          <h2 className="section-title">Contact & Location</h2>

          <div className="card glass-card map-card">
            <div className="contact-info">
              <h3>문의 및 가입</h3>
              <p>새로운 우주를 함께 탐험할 부원을 기다립니다.</p>

              <div className="contact-links">
                <a className="contact-pill" target="_blank"
                  href="https://jajudy.khu.ac.kr/club/462">
                  🏫 경희대 중앙동아리 TUSI
                </a>
                <a className="contact-pill" target="_blank"
                  href="https://www.instagram.com/tusi_rocket">
                  📷 @tusi_rocket
                </a>
              </div>
            </div>

            <div className="map-wrapper">
              <iframe
                title="Kyung Hee University"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.692347668616!2d127.07823331530666!3d37.24296157985959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b44d32f7404e1%3A0x6b772183c5108625!2z44KreXVWZyBIZWUgVW5pdmVyc2l0eSwgR2xvYmFsIENhbXB1cw!5e0!3m2!1sen!2skr!4v1678123456789!5m2!1sen!2skr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen={true} 
              />
              <p className="address-text">
                경기도 용인시 기흥구 덕영대로 1732 경희대학교 국제캠퍼스
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© 2025 Kyung Hee Univ. Rocket Research Club <strong>TUSI</strong></p>
        </footer>
      </div>
    </>
  );
};

export default App;