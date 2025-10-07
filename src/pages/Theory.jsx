import React from "react";
import "./Theory.css";
import lyluannhanthuc from "../assets/lyluannhanthuc.jpg";
import lyluannhanthuc2 from "../assets/lyluannhanthuc2.jpg";

const Theory = () => {
  return (
    <div className="theory-container">
    

      <section className="image-section">
        <img src={lyluannhanthuc} className="lyluan"></img>
      </section>

      <section className="theory-hero" id="top">
        <h1>Nhận Thức Luận Duy Vật Biện Chứng</h1>
        <p>
          Trình bày khái niệm, vai trò của thực tiễn, các nguyên tắc cơ bản và ý nghĩa
          phương pháp luận của nhận thức luận trong chủ nghĩa Mác – Lênin.
        </p>
      </section>

      <section className="theory-section">
        <h2>A. Khái quát chung</h2>
        <p>
          Nhận thức luận (lý luận nhận thức) của chủ nghĩa Mác – Lênin là học thuyết về
          khả năng con người nhận thức được thế giới khách quan thông qua hoạt động
          thực tiễn; giải thích bản chất, con đường và quy luật chung của quá trình
          đạt tới chân lý để phục vụ cải biến hiện thực.
        </p>
        <p>
          Bản chất: nhấn mạnh tính khách quan của thế giới vật chất và tính tích cực,
          tự giác, sáng tạo của chủ thể trong quá trình phản ánh hiện thực.
        </p>
      </section>

      <section className="theory-section alt">
        <h2>B. Thực tiễn và vai trò của nó</h2>
        <p>
          Thực tiễn là toàn bộ hoạt động vật chất có mục đích, mang tính lịch sử – xã hội
          của con người nhằm cải biến tự nhiên và xã hội.
        </p>
        <ul className="theory-list">
          <li>
            <strong>Bản chất:</strong> sử dụng công cụ vật chất tác động vào đối tượng vật
            chất để làm biến đổi chúng theo mục đích.
          </li>
          <li>
            <strong>Đặc trưng:</strong> tính sáng tạo, mục đích, lịch sử – xã hội và luôn
            phát triển.
          </li>
          <li>
            <strong>Ba hình thức cơ bản:</strong> (1) Sản xuất vật chất; (2) Hoạt động chính
            trị – xã hội; (3) Thực nghiệm khoa học.
          </li>
          <li>
            <strong>Vai trò tổng hợp:</strong> cơ sở xuất phát, động lực thúc đẩy, mục đích
            hướng tới và tiêu chuẩn kiểm tra chân lý của nhận thức.
          </li>
        </ul>
      </section>

      <section className="theory-section">
        <h2>C. Quan điểm duy vật biện chứng về nhận thức</h2>
        <ol className="theory-list-ordered">
          <li>
            <strong>Thế giới vật chất tồn tại khách quan:</strong> độc lập với ý thức, được
            nhận thức chứ không do ý thức sáng tạo ra.
          </li>
          <li>
            <strong>Khả năng nhận thức:</strong> con người có thể nhận thức thế giới; không
            có cái gì tuyệt đối không thể biết, chỉ có cái chưa biết.
          </li>
          <li>
            <strong>Tính quá trình biện chứng:</strong> vận động từ chưa biết đến biết, từ
            biết ít đến biết nhiều, từ hiện tượng đến bản chất, từ cảm tính đến lý tính và
            tiếp tục kiểm nghiệm, bổ sung.
          </li>
          <li>
            <strong>Vai trò nền tảng của thực tiễn:</strong> thực tiễn cung cấp tài liệu,
            định hướng nhiệm vụ, đặt ra nhu cầu và kiểm tra kết quả nhận thức.
          </li>
        </ol>
        <p>
          Nhận thức vì thế không phải sự sao chép thụ động mà là phản ánh tích cực, có chọn
          lọc, khái quát hóa và sáng tạo.
        </p>
      </section>

      <section className="theory-section alt">
        <h2>D. Ý nghĩa phương pháp luận</h2>
        <p>
          Phải xuất phát từ thực tiễn, tôn trọng khách quan, đồng thời phát huy tính năng
          động sáng tạo của chủ thể; lý luận phải gắn và phục vụ thực tiễn, thực tiễn kiểm
          nghiệm và phát triển lý luận.
        </p>
        <p className="theory-note">
          Cần tránh hai khuynh hướng sai lầm: (1) Kinh nghiệm chủ nghĩa: coi thường vai trò
          khái quát của lý luận. (2) Giáo điều: tuyệt đối hóa lý luận, coi nhẹ thực tiễn và
          điều kiện cụ thể.
        </p>
      </section>

      <section className="image-section">
        <img src={lyluannhanthuc2} className="lyluan"></img>
      </section>

      <section className="theory-section">
        <h2>Tóm tắt nhanh</h2>
        <ul className="theory-list">
          <li>Nhận thức: phản ánh biện chứng, sáng tạo thế giới khách quan.</li>
          <li>Thực tiễn: nền tảng, động lực, mục đích và tiêu chuẩn chân lý.</li>
          <li>Quy trình: từ cảm tính → lý tính → thực tiễn kiểm nghiệm → phát triển tiếp.</li>
          <li>Phương pháp: gắn lý luận với thực tiễn, chống kinh nghiệm chủ nghĩa và giáo điều.</li>
        </ul>
        <p style={{ textAlign: "right", marginTop: "1rem" }}>
          <a href="#top" style={{ textDecoration: "none", color: "#6a0572", fontWeight: 600 }}>
            ↑ Lên đầu trang
          </a>
        </p>
      </section>
    </div>
  );
};

export default Theory;