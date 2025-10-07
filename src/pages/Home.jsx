import React from "react";
import "./Home.css";
import maclenin from "../assets/maclenin.jpg";
import triethoc from "../assets/triethoc.jpg";

const Home = () => {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img src={maclenin} alt="Banner" className="hero-bg" />
        <div className="hero-content">
          <h1 className="hero-title">Nhận Thức Luận Mác - Lênin</h1>
          <p className="hero-subtitle">
            Khám phá <strong>bản chất, nguồn gốc và đặc điểm của nhận thức</strong> — 
            nền tảng triết học giúp con người hiểu và cải tạo thế giới.
          </p>
          <button
            className="hero-btn"
            onClick={() => (window.location.href = "/ly-thuyet")}
          >
            Khám phá ngay →
          </button>
        </div>
      </section>

      {/* Theory Intro Section */}
      <section className="intro-section">
        <p>
          Chủ nghĩa duy vật biện chứng khẳng định nhận thức là sự phản ánh thế giới
          khách quan vào tư duy con người, thông qua hoạt động thực tiễn. 
          Từ đó hình thành nên <strong>quá trình phát triển tư duy và nhận thức khoa học</strong>.
        </p>
      </section>

      {/* Cards Section */}
      <section className="cards-section">
        <div className="cards-container">
          <div className="card" onClick={() => (window.location.href = "/ly-thuyet")}>
            <div className="card-icon theory-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h3 className="card-title">Lý Thuyết</h3>
            <p className="card-description">
              Hiểu rõ nền tảng triết học, khái niệm và nguyên lý nhận thức luận Mác-Xít.
            </p>
          </div>

          <div className="card" onClick={() => (window.location.href = "/lien-he-thuc-tien")}>
            <div className="card-icon practice-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="card-title">Liên Hệ Thực Tế</h3>
            <p className="card-description">
              Ứng dụng lý thuyết vào các hiện tượng thực tiễn trong đời sống xã hội.
            </p>
          </div>

          <div className="card" onClick={() => (window.location.href = "/quiz")}>
            <div className="card-icon quiz-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3Z"/>
              </svg>
            </div>
            <h3 className="card-title">Quiz</h3>
            <p className="card-description">
              Trắc nghiệm nhanh — củng cố hiểu biết về nhận thức luận Mác - Lênin.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <img src={triethoc} alt="Triết học" className="quote-bg" />
        <div className="quote-overlay"></div>
        <blockquote className="quote-content">
          <p>
            “Thực tiễn cao hơn nhận thức lý thuyết, vì nó không những có phẩm giá của tính phổ biến 
            mà còn có phẩm giá của tính hiện thực trực tiếp.”
          </p>
          <cite>— V.I. Lenin</cite>
        </blockquote>
      </section>

      
    </div>
  );
};

export default Home;