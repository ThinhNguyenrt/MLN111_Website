import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li><a href="#">Trang chủ</a></li>
          <li><a href="#">Lý thuyết</a></li>
          <li><a href="#">Tình huống thực tế</a></li>
          <li><a href="#">Quiz</a></li>
          <li><a href="#">Phụ lục</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
