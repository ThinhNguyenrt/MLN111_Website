import React, { useState, useEffect } from "react";
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

    const sections = document.querySelectorAll(
      ".appendix-page .animate-section"
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const tools = [
    {
      title: "ChatGPT",
      purpose:
        "Tư vấn nội dung sẽ được đưa vào website, giúp xác định những phần trọng tâm cần thể hiện.",
      prompt:
        "Lý luận nhận thức duy vật biện chứng có thể hiểu cơ bản như thế nào, hãy tư vấn những nội dung cốt lõi của nó.",
    },
    {
      title: "Claude",
      purpose:
        "Hỗ trợ chỉnh sửa animation và tối ưu hóa responsive, giúp website sinh động và thu hút hơn.",
      prompt:
        "Dựa trên trang đã có sẵn, tối ưu hóa thiết kế responsive và giúp trải nghiệm người dùng được tốt hơn.",
    },
  ];

  return (
    <div className="appendix-page">
      <div className="container">
        {/* Title */}
        <div className="title-section animate-section" id="title">
          <div
            className={`fade-in-content ${
              visibleSections.title ? "visible" : ""
            }`}
          >
            <h2 className="page-title">Phụ lục: Sử dụng Công cụ AI</h2>
            <div className="title-underline"></div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="animate-section" id="tools">
          <div
            className={`fade-in-content delay-200 section-box ${
              visibleSections.tools ? "visible" : ""
            }`}
          >
            <h3 className="section-title">🧠 Công cụ AI đã sử dụng</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <h3 className="tool-title">{tool.title}</h3>
                  <p>
                    <strong>Mục đích:</strong> {tool.purpose}
                  </p>
                  <p className="tool-prompt">
                    <strong>Prompt chính:</strong> “{tool.prompt}”
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Source Verification Section */}
        <div className="animate-section" id="verification">
          <div
            className={`fade-in-content delay-400 section-box ${
              visibleSections.verification ? "visible" : ""
            }`}
          >
            <h3 className="section-title">🔍 Kiểm chứng nguồn</h3>

            <div className="source-box">
              <h4>Tài liệu học thuật chính thức</h4>
              <ul>
                <li>Slides tài liệu môn MLN111 (FLM)</li>
              </ul>
            </div>

            <div className="source-box">
              <h4>Nguồn tham khảo thêm</h4>
              <ul>
                <li>Loigiaihay</li>
                <li>Youtube - Người ngoài hành lang</li>
                <li>Báo Tuổi Trẻ (liên hệ trong phần thực tiễn)</li>
              </ul>
            </div>

            <div className="source-box">
              <h4>Quy trình kiểm tra</h4>
              <ul>
                <li>
                  Đối chiếu thông tin giữa AI và các nguồn học thuật, tham khảo.
                </li>
                <li>
                  Lọc ra những thông tin chính xác và sử dụng để truyền tải qua
                  website.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Integrity Section */}
        <div className="animate-section" id="integrity">
          <div
            className={`fade-in-content delay-600 section-box ${
              visibleSections.integrity ? "visible" : ""
            }`}
          >
            <h3 className="section-title">🤝 Cam kết Liêm chính</h3>
            <p className="integrity-text">
              Chúng tôi cam kết chỉ sử dụng AI như một{" "}
              <strong>công cụ hỗ trợ</strong> để cung cấp thêm thông tin. Mọi nội
              dung đều được kiểm tra và đối chiếu với các{" "}
              <strong>tài liệu học thuật và nguồn tham khảo đáng tin cậy</strong>.
              <br />
              Cuối cùng, AI chỉ đóng vai trò hỗ trợ chứ không thay thế quá trình{" "}
              <strong>tư duy sáng tạo</strong> và trách nhiệm học thuật của nhóm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appendix;