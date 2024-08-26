import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <div>
        <div className="site-logo">
          <a href="#">KH-SHOP</a>
        </div>
        <div className="link-box">
          <a href="#">로그인</a>
          <a href="#">회원가입</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
