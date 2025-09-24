import React from "react";
import "./Theory.css";
import Header from "../components/Header";

const Theory = () => {
  return (
    <div className="theory-container">
      <Header />

      {/* Hero Section */}
      <section className="theory-hero">
        <h1>Nhận Thức Luận Duy Vật Biện Chứng</h1>
        <p>
          Nhận thức là quá trình <strong>phản ánh hiện thực khách quan</strong>
          <br />
          một cách chủ động, sáng tạo vào trong bộ óc con người, tạo thành{" "}
          <em>“hình ảnh chủ quan của thế giới khách quan”</em> (V.I.Lênin).
        </p>
      </section>

      {/* Key Ideas */}
      <section className="theory-section">
        <h2>Các Nguyên Tắc Cơ Bản</h2>
        <div className="theory-cards">
          <div className="theory-card">
            <h3>1. Tính Lịch Sử – Xã Hội</h3>
            <p>
              Nhận thức gắn liền năng lực, kinh nghiệm, tri thức và phương tiện
              của con người trong bối cảnh lịch sử – xã hội.
            </p>
          </div>
          <div className="theory-card">
            <h3>2. Quá Trình Biện Chứng</h3>
            <p>
              Vận động từ chưa biết → biết, từ hiện tượng → bản chất, từ cảm tính
              → lý tính → thực tiễn.
            </p>
          </div>
          <div className="theory-card">
            <h3>3. Dựa Trên Thực Tiễn</h3>
            <p>
              Thực tiễn là cơ sở, động lực, mục đích và tiêu chuẩn của chân lý.
            </p>
          </div>
        </div>
      </section>

      {/* Forms of Knowledge */}
      <section className="theory-section alt">
        <h2>Các Hình Thức Nhận Thức</h2>
        <ul className="theory-list">
          <li><strong>Thường ngày:</strong> kinh nghiệm đời sống, lao động.</li>
          <li><strong>Nghệ thuật:</strong> hình tượng hóa thế giới qua sáng tạo.</li>
          <li><strong>Khoa học:</strong> hệ thống tri thức có tính khái quát và chỉ đạo.</li>
        </ul>
      </section>

      {/* Relation */}
      <section className="theory-section">
        <h2>Quan Hệ Thực Tiễn – Lý Luận</h2>
        <p>
          Thực tiễn là cơ sở hình thành lý luận, còn lý luận có vai trò chỉ đạo
          thực tiễn. Cả hai thống nhất, bổ sung và kiểm nghiệm lẫn nhau.
        </p>
      </section>

      {/* Methodological Meaning */}
      <section className="theory-section alt">
        <h2>Ý Nghĩa Phương Pháp Luận</h2>
        <p>Nhận thức và lý luận phải gắn với nhu cầu thực tiễn.</p>
        <ul className="theory-list">
          <li><strong>Tránh bệnh kinh nghiệm:</strong> coi thường lý luận.</li>
          <li><strong>Tránh bệnh giáo điều:</strong> coi thường thực tiễn.</li>
          <li><strong>Phương pháp đúng:</strong> nói đi đôi với làm.</li>
        </ul>
      </section>
    </div>
  );
};

export default Theory;