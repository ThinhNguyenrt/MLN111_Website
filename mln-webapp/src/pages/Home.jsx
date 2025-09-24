import React from "react";
import "./Home.css";
import Header from "../components/Header";
const Home = () => {
  return (
    <div className="home-container">
      <Header />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-description">
            Nhận thức luận của chủ nghĩa duy vật biện chứng nghiên cứu{" "}
            <strong>bản chất, nguồn gốc, quá trình và đặc điểm của nhận thức</strong>, 
            gắn với mối quan hệ giữa{" "}
            <strong>con người và thế giới khách quan</strong>.
          </p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="cards-section">
        <div className="cards-container">
          <div className="card" onClick={() => window.location.href = '/theory'}>
            <div className="card-icon theory-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </div>
            <h3 className="card-title">Lý Thuyết</h3>
            <p className="card-description">
              Tìm hiểu các khái niệm cơ bản và nguyên lý của nhận thức luận Mác-Xít
            </p>
            <div className="card-arrow">→</div>
          </div>

          <div className="card" onClick={() => window.location.href = '/practice'}>
            <div className="card-icon practice-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="card-title">Liên Hệ Thực Tế</h3>
            <p className="card-description">
              Áp dụng lý thuyết nhận thức luận vào thực tiễn cuộc sống và xã hội
            </p>
            <div className="card-arrow">→</div>
          </div>

          <div className="card" onClick={() => window.location.href = '/quiz'}>
            <div className="card-icon quiz-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
              </svg>
            </div>
            <h3 className="card-title">Quiz</h3>
            <p className="card-description">
              Kiểm tra kiến thức và củng cố hiểu biết về nhận thức luận
            </p>
            <div className="card-arrow">→</div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-container">
          <blockquote className="quote">
            <p>
              "Thực tiễn cao hơn nhận thức lý thuyết vì nó không những có phẩm giá của tính phổ biến 
              mà còn có phẩm giá của tính hiện thực trực tiếp."
            </p>
            <cite>- V.I.Lenin</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home;