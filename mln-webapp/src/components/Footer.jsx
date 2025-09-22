import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Về dự án</h3>
          <p>
            Trang web này là sản phẩm sáng tạo môn học Mác - Lênin, nhằm cung cấp lý
            thuyết, tình huống thực tế.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Liên kết nhanh</h3>
          <ul>
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Lý thuyết</a></li>
            <li><a href="#">Tình huống</a></li>
            <li><a href="#">Quiz</a></li>
            <li><a href="#">Phụ lục</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Liên hệ</h3>
          <p>Email: blannla@email.com</p>
          <p>Trường Đại học FPT</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 All rights reserved
      </div>
    </footer>
  );
};

export default Footer;