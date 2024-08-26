import "./footer.css"; //헤더 css 가 footer css에도 영향을 미친다는걸 알수있음

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a href="#">이용약관</a>
        <p>무단 복제 하지 마세요!!</p>
      </div>
    </footer>
  );
};

export default Footer;
