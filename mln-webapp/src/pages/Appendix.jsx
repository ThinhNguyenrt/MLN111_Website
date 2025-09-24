import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "./Appendix.css";

const Appendix = () => {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".appendix-page .animate-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const tools = [
    {
      title: "ChatGPT",
      description: "Hỗ trợ lên ý tưởng, viết nội dung, gợi ý bố cục.",
    },
    {
      title: "Claude",
      description: "Hỗ trợ tinh chỉnh animation, phong cách trình bày.",
    },
  ];

  return (
    <div className="appendix-page">
      <Header />

      <div className="container">
        {/* Title Section */}
        <div className="title-section animate-section" id="title">
          <div
            className={`fade-in-content ${
              visibleSections.title ? "visible" : ""
            }`}
          >
            <h2 className="page-title">Phụ lục: Công cụ AI sử dụng</h2>
            <div className="title-underline"></div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="tools-section animate-section" id="tools">
          <div
            className={`fade-in-content delay-200 ${
              visibleSections.tools ? "visible" : ""
            }`}
          >
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <h3 className="tool-title">{tool.title}</h3>
                  <p className="tool-description">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integrity Section */}
        <div className="integrity-section animate-section" id="integrity">
          <div
            className={`fade-in-content delay-400 ${
              visibleSections.integrity ? "visible" : ""
            }`}
          >
            <h3 className="integrity-title">Kiểm chứng & Cam kết</h3>
            <p className="integrity-text">
              - Kiểm chứng thông tin: đối chiếu nguồn báo chí chính thống, học
              liệu học thuật. <br />
              - Nguồn tham khảo: báo Tuổi Trẻ, tài liệu triết học Mác-Lênin.{" "}
              <br />
              - Cam kết liêm chính trong học thuật: không sao chép, tôn trọng
              nguồn, và chịu trách nhiệm về nội dung trình bày.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appendix;
