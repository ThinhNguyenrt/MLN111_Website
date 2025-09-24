import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Trang chủ</Link></li>
          <li><Link to="/ly-thuyet">Lý thuyết</Link></li>
          <li><Link to="/lien-he-thuc-tien">Liên hệ thực tiễn</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/phu-luc-ai">Phụ lục AI</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;