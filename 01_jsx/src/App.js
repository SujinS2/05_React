import "./test.css";

function App() {
  /* 
    jsx 사용 시 주의사항
    1. 함수에서 JSX를 리턴하면 화면에 표현
    =>return할때는 반드시 1개의 태그로 리턴
    =>여러개 태그를 리턴하고 싶다면 한개의 태그로 감싸서 리턴해야함
    =>@화면에 나타나지 않고 묶는 용도로만 태그를 사용하고 싶다면? 빈 태그<br> 사용
    에러발생코드 : h1태그와 h3태그를 동시에 리턴하려고 해서 문제가 발생
    =>1개의 태그로 묶어서 리턴하면 됨
    =>1)부모태그 하나를 사용
    =>2)감싸는 태그는 리턴하고 싶지 않은 경우 비어있는 태그로 감쌈

    2. 모든 태그에는 닫는 태그가 존재(html과 다른 점)
    =>html에서는 닫는 태그가 없는 태그도 존재(<br><hr><img><input>...)
    =>but html에서 닫는 태그가 없는 태그도 jsx에서는 반드시 닫아야 함(<br></br><hr></hr>...)
    =>닫는 태그 생략 방법 : <br></br> => <br /> <hr></hr>=> <hr/> ...
    
    3. html 에서 사용하던 속성중에 속성이름이 다른 경우가 존재(다 외울 수가 없음!)=>기존 속성으로 사용하다가 문제가 없으면 그냥 사용, 경고발생시 변경
    => ex) class =>className / for=>htmlFor (보통 자바스크립트에서 원래 쓰는 용어일 경우 이렇게 됨)

    4. css 적용하는 방법
    =>외부파일에서 작성 => import
    =>style 속성 이용해 inline으로 적용하는 경우 주의=>js 객체 형식으로 처리해야함
    => 기존)<div style="color : green; background-color : blue;"> => <div style={{color : "green", backgroundColor : "yellow"}}> 
  */
  return (
    <>
      <h1>안녕</h1>
      <h2>이제 곧 점심시간</h2>
      <hr />
      <h3>test</h3>
      <div id="abc" className="hi">
        테스트 div
      </div>
      <label htmlFor="hi" style={{ color: "yellow", backgroundColor: "green" }}>
        안녕
      </label>
      <input type="text" id="hi" />
      <hr />
      <hr />
      {
        //this is 주석
        /* 중괄호 내부에 자바스크립트 주석을 다는 것 */
      }
      <div className="login-wrap">
        <h2 className="login-title">LOGIN</h2>
        <div className="input-wrap">
          <label htmlFor="userId">아이디</label>
          <input type="text" name="userId" id="userId" />
        </div>
        <div className="input-wrap">
          <label htmlFor="userPw">비밀번호</label>
          <input type="password" name="userPw" id="userPw" />
        </div>
        <div className="login-btn">
          <input type="submit" value="로그인" />
        </div>
      </div>
      <hr />
      <hr />
      <hr />
      {/* 
          회원가입
          회원가입 항목 : 아이디/ 비밀번호/ 비밀번호 확인/ 이름/전화번호/성별
        */}

      <div className="join-wrap">
        <table>
          <tbody>
            <tr>
              <th colSpan="2">
                <h2>회원가입</h2>
              </th>
            </tr>
            <tr>
              <th className="info-name">
                <label htmlFor="userId">아이디</label>
              </th>
              <td className="info-content">
                <input type="text" name="userId" id="userId"></input>
              </td>
            </tr>
            <tr>
              <th className="info-name">
                <label htmlFor="userPw">비밀번호</label>
              </th>
              <td className="info-content">
                <input type="password" name="userPw" id="userPw"></input>
              </td>
            </tr>
            <tr>
              <th className="info-name">
                <label htmlFor="userPwRe">비밀번호 확인</label>
              </th>
              <td className="info-content">
                <input type="password" id="userPwRe"></input>
              </td>
            </tr>
            <tr>
              <th className="info-name">
                <label htmlFor="userName">이름</label>
              </th>
              <td className="info-content">
                <input type="text" name="userName" id="userName"></input>
              </td>
            </tr>
            <tr>
              <th className="info-name">
                <label htmlFor="userPhone">전화번호</label>
              </th>
              <td className="info-content">
                <input type="text" name="userPhone" id="userPhone"></input>
              </td>
            </tr>
            <tr>
              <th className="info-name">성별</th>
              <td className="info-content">
                <label htmlFor="f">여자</label>
                <input
                  type="radio"
                  name="userGender"
                  id="f"
                  defaultValue="여자"
                ></input>
                <label htmlFor="m">남자</label>
                <input
                  type="radio"
                  name="userGender"
                  id="m"
                  defaultValue="남자"
                ></input>
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                <input type="submit" value="회원가입" />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
