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
  //처음 state input 연결
  // //state와 input value 모두 유동적이므로 이 둘을 연결해서 사용할 수 있음
  // //유저 등록에 사용하는 input dp 연결할 state
  // const [name, setName] = useState(""); //input에 최초로 들어가있을 value로 state를 형성
  // const [age, setAge] = useState("");
  // const [addr, setAddr] = useState("");
  // //input의 value에 넣어줌
  // const inputName = (e) => {
  //   //console.log(e.target); e.target : 이벤트를 발생시킨 해당 dom 객체
  //   setName(e.target.value);
  //   //=>이제 input값이 바뀔때마다 state값에 변화를 주고 rendering => input에 입력이 되는것처럼 보임
  // };
  // const inputAge = (e) => {
  //   setAge(e.target.value);
  // };
  // const inputAddr = (e) => {
  //   setAddr(e.target.value);
  // };

  // const registUser = () => {
  //   // const nameInput = document.querySelector("#name");
  //   // const ageInput = document.querySelector("#age");
  //   // const addrInput = document.querySelector("#addr");
  //   // const name = nameInput.value;
  //   // const age = ageInput.value;
  //   // const addr = addrInput.value;
  //   //const user = { name: name, age: age, addr: addr };
  //   //key값과 value의 변수명이 일치할 경우 이런식으로 객체를 생성할 수 있다.
  //   const user = { name, age, addr };
  //   setUserList([...userList, user]);
  //   //위의 두 줄을 합치면..=> setUseList([...userList, {name, age, addr}])
  //   // nameInput.value = "";
  //   // ageInput.value = "";
  //   // addrInput.value = "";==>onChange를 걸면 데이터가 남아있음
  //   setName("");
  //   setAddr("");
  //   setAge("");
  // };

  // input 에 넣은 것들을 애초에 하나의 객체로 묶어서 만들기
  const [user, setUser] = useState({ name: "", age: "", addr: "" }); // input에 넣은 걸 하나로 묶은 것
  //바뀔 onChange들...
  // const inputUserName = (e) => {
  //   console.log(e.target.name);
  //   const name = e.target.value;
  //   setUser({ ...user, name: name });
  // };
  // const inputUserAge = (e) => {
  //   setUser({ ...user, age: e.target.value });
  // };
  // const inputUserAddr = (e) => {
  //   setUser({ ...user, addr: e.target.value });
  // };
  //=>하나의 함수로 묶을 수 있음(e.target.name=>각 dom 객체(input)의 name 속성값)
  const inputValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    //객체에서 우리가 바로 속성명을 써도 되지만 (obj.name), 대괄호를 써도 됨을 이용 (obj["name"])
  };

  const registUser = () => {
    setUserList([...userList, user]);
    setUser({ name: "", age: "", addr: "" });
  };

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
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item, index) => {
            const deleteUser = () => {
              //splice 사용
              // userList.splice(index, 1);
              // setUserList([...userList]);

              //filter 사용
              const newArr = userList.filter((user) => {
                return user != item; //순회하면서 해당 dom 객체와 다른 애만 return
              });
              setUserList(newArr);
            };
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
                <td>
                  <button type="button" onClick={deleteUser}>
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <div className="regis-wrap">
        <div>
          <label htmlFor="name">이름</label>
          {/* input의 value의 state를 이용해 데이터를 넣은경우 키보드 입력 시 state를 변경하도록 처리를 해줘야함 */}
          <input
            type="text"
            id="name"
            name="name"
            //onChange={inputName}=>value값을 바꾸면 함수도 바뀌어야함
            //value={name}
            value={user.name}
            //onChange={inputUserName}=> 함수 하나로 통일
            onChange={inputValue}
          />
        </div>
        <div>
          <label htmlFor="age">나이</label>
          <input
            type="text"
            id="age"
            name="age"
            //onChange={inputAge}
            //value={age}
            value={user.age}
            //onChange={inputUserAge}
            onChange={inputValue}
          />
        </div>
        <div>
          <label htmlFor="addr">주소</label>
          <input
            type="text"
            id="addr"
            name="addr"
            //onChange={inputAddr}
            //value={addr}
            value={user.addr}
            //onChange={inputUserAddr}
            onChange={inputValue}
          />
        </div>
        <div>
          <button onClick={registUser}>회원정보 등록</button>
        </div>
      </div>
    </div>
  );
}

export default App;
