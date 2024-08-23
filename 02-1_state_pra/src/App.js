import { useState } from "react";

function App() {
  const [str, setStr] = useState("문자열");
  const [num, setNum] = useState(100);
  const chagneValue = () => {
    setStr("문자열 변경");
    setNum(1000);
  };

  const [userList, setUserList] = useState([
    { name: "유저1", age: 10, addr: "서울시 강남구" },
    { name: "유저2", age: 20, addr: "서울시 영등포구" },
    { name: "유저3", age: 30, addr: "서울시 강서구" },
  ]);

  return (
    <div className="App">
      <h1>리엑트 state 활용</h1>
      <hr></hr>
      <p>{str}</p>
      <p>{num}</p>
      <button onClick={chagneValue}>클릭</button>
      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>주소</th>
            <th>분류</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, index) => {
            return (
              <tr key={"user" + index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.addr}</td>
                <td>
                  {
                    // 화면에 데이터를 표현하는데 if 가 필요하다면=> 삼항연산자 써야함(if는 값이 return이 안될 가능성이 있기 때문에)
                    //item.age < 20 ? "미성년자" : "성인"
                    // 더 많은 조건이 필요하다면? 삼항연산자 계속 이어쓰면됨
                    item.age < 13
                      ? "어린이"
                      : item.age < 20
                      ? "청소년"
                      : item.age <= 40
                      ? "청년"
                      : item.age <= 60
                      ? "중년"
                      : "노인"
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
