import React, { useState, useEffect } from "react";
import { ChevronRight, Lightbulb, CheckCircle, AlertCircle, BookOpen, Zap } from "lucide-react";
import Header from "../components/Header";
import "./Application.css";
import AI from "../assets/AI.png";
const Application = () => {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const examples = [
    {
      title: "Lọc thông tin chính xác",
      content: "Xe xăng dầu ngừng bán năm 2030 - thông tin không chính xác theo báo Tuổi Trẻ",
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      title: "Kiểm chứng qua thực tiễn",
      content: "Xây dựng thói quen kiểm tra nguồn tin trước khi đưa ra kết luận",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const aiAnalysis = [
    {
      phase: "Thực tiễn",
      content: "AI phát sinh từ nhu cầu tự động hóa, phân tích dữ liệu, logistics",
      color: "bg-blue-500"
    },
    {
      phase: "Nhận thức",
      content: "Con người sử dụng AI để thu thập, xử lý và phản ánh dữ liệu thực tiễn",
      color: "bg-green-500"
    },
    {
      phase: "Lý luận",
      content: "AI chỉ phản ánh thông tin khách quan, cần thử nghiệm để kiểm chứng",
      color: "bg-purple-500"
    }
  ];

  const lessons = [
    {
      title: "Nhận thức gắn liền thực tiễn",
      content: "AI chỉ hiệu quả khi có dữ liệu thực tế",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Lý luận dẫn dắt nhận thức",
      content: "Khoa học AI giúp quyết định chủ động",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      title: "Thực tiễn kiểm chứng lý luận",
      content: "Quyết sách phải được kiểm chứng, sai thì điều chỉnh",
      icon: <Zap className="w-5 h-5" />
    }
  ];

  return (
    <div className="application-page">
      <Header />

      <div className="container">
        {/* Title Section */}
        <div className="title-section animate-section" id="title">
          <div
            className={`fade-in-content ${
              visibleSections.title ? "visible" : ""
            }`}
          >
            <h2 className="page-title">Liên hệ với đời sống hiện nay</h2>
            <div className="title-underline"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Introduction Section */}
          <div className="animate-section intro-section" id="intro">
            <div
              className={`fade-in-content delay-200 ${
                visibleSections.intro ? "visible" : ""
              }`}
            >
              <div className="intro-card">
                <h3 className="section-title">
                  <div className="title-icon">
                    <Lightbulb className="icon" />
                  </div>
                  Ứng dụng trong thời đại số
                </h3>
                <p className="intro-text">
                  Nhận thức luận chủ nghĩa duy vật biện chứng giúp con người
                  chọn lọc nguồn thông tin thích hợp để không tin tưởng những
                  nguồn tin không chính thống.
                </p>
              </div>
            </div>
          </div>

          {/* Examples Section */}
          <div className="animate-section examples-section" id="examples">
            <div
              className={`fade-in-content delay-400 ${
                visibleSections.examples ? "visible" : ""
              }`}
            >
              <div className="examples-grid">
                {examples.map((example, index) => (
                  <div key={index} className="example-card">
                    <div className="card-content">
                      <div className="card-icon">{example.icon}</div>
                      <div className="card-text">
                        <h4 className="card-title">{example.title}</h4>
                        <p className="card-description">{example.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Case Study Section */}
          <div className="animate-section ai-case-section" id="ai-case">
            <div
              className={`fade-in-content delay-600 ${
                visibleSections["ai-case"] ? "visible" : ""
              }`}
            >
              <div className="ai-image-wrapper">
                  <img
                    src={AI}
                    alt="AI Brain"
                    className="ai-image"
                  />
                </div>
              <div className="ai-case-card">
                
                <h3 className="ai-case-title">
                  Ví dụ thực tế:{" "}
                  <span className="highlight">Trí tuệ nhân tạo (AI)</span>
                </h3>

                <div className="ai-analysis-grid">
                  {aiAnalysis.map((phase, index) => (
                    <React.Fragment key={index}>
                      <div className="phase-card">
                        <div className={`phase-indicator ${phase.color}`}></div>
                        <h4 className="phase-title">{phase.phase}</h4>
                        <p className="phase-content">{phase.content}</p>
                      </div>
                      {index < aiAnalysis.length - 1 && (
                        <div className="arrow-separator">
                          <ChevronRight className="arrow-icon" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lessons Section */}
          <div className="animate-section lessons-section" id="lessons">
            <div
              className={`fade-in-content delay-800 ${
                visibleSections.lessons ? "visible" : ""
              }`}
            >
              <div className="lessons-card">
                <h3 className="lessons-title">Bài học rút ra</h3>

                <div className="lessons-list">
                  {lessons.map((lesson, index) => (
                    <div
                      key={index}
                      className={`lesson-item lesson-${index + 1}`}
                    >
                      <div className="lesson-icon">{lesson.icon}</div>
                      <div className="lesson-content">
                        <h4 className="lesson-title">{lesson.title}</h4>
                        <p className="lesson-description">{lesson.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;