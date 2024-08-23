import { useState } from "react";

function App() {
  const str1 = "문자열";
  const num1 = 100;
  const arr1 = [1, 2, "hi", "hello"];
  const obj1 = { name: "유저1", age: 20, addr: "서울시 영등포구" };
  function printArr1() {
    const arr = new Array();
    for (let i = 0; i < arr1.length; i++) {
      arr.push(<li key={"key1" + i}>{arr1[i]}</li>);
    }
    return arr;
  }
  printArr1();
  //구조분해할당
  const test1 = [1, "100", [1, 2, 3]];
  const test2 = test1[0];
  const test3 = test1[1];
  //=>이걸 일일이 하는게 아니라
  const [test4, test5, test6] = [1, "100", [1, 2, 3]];
  //이렇게 할당 할 수 있음

  //state : react에서 유동적인 데이터를 다루기 위한 객체(값이 바뀔일이 없다면 state 쓸 필요가 없음)
  //useState(data); userState() ->react hooks -> react hooks는 매개변수로 전달한 데이터를 state로 생성, 길이가 2인 배열을 리턴해줌
  //=>배열 첫번째가 getter, 두번째가 setter, 그러므로 구조분해할당으로 두개를 받자==>자바의 getter setter 처럼 쓸 수 있음
  const [data, setData] = useState(100);
  const [str2, setStr2] = useState("문자열2");
  const [num2, setNum2] = useState(200);
  const [arr2, setArr2] = useState([100, 200, 300, 400]);
  const [obj2, setObj2] = useState({
    name: "유저2",
    age: 30,
    addr: "서울시 강남구",
  });

  function testFunc1() {
    const div1 = document.querySelector("#div1");
    console.log(div1.innerText);
  }
  const func2 = function () {
    const div1 = document.querySelector("#div1");
    console.log(div1.innerText);
  };
  // arrow function도 변수에 저장 가능
  const func3 = () => {
    const div1 = document.querySelector("#div1");
    console.log(div1.innerText);
  };
  const func4 = () => {
    const div1 = document.querySelector("#div1");
    console.log(div1.innerText);
  };

  ////////////////////////////////////////////////////////
  //변수와 state 비교용
  let str3 = "일반 문자열";
  const changeStr3 = () => {
    str3 = "str3 변경!";
    console.log(str3); // 이때 str3이 바뀐다고 해서 화면이 바뀌진 않음=> 일일이 바꿔야함
    const p1 = document.querySelector("#p1");
    p1.innerText = str3;
  };
  let [str4, setStr4] = useState("state문자열");
  const changeStr4 = () => {
    // str4 = "state문자열 변경";
    // console.log(str4);
    // const p2 = document.querySelector("#p2");
    // p2.innerText = str4;
    setStr4("state문자열 변경");
    console.log(str4); // "state문자열"(변경전 값)이 찍힘 => 왜?????? str4가 바뀌는 것은 해당 함수(changeStr4)가 끝난 후 일괄 변경됨(setter 여러개 사용시 함수가 끝난후 한번에 rendering하기 위해)이기 때문
    // useState() hooks를 이용해서 state를 생성하면 리턴되는 배열의 두번째에 들어있는 값은 state를 변경하는 함수이므로
    // state를 변경하는 함수를 이용해서 state값을 변경하면 해당부분을 다시 rendering해서 state를 이용해 화면을 표현했으면
    // 해당부분이 변경된 값으로 자동으로 바뀜
  };
  //state 숫자
  const [num3, setNum3] = useState(1000);
  const changeNum3 = () => {
    const num = num3 + 1;
    setNum3(num);
  };
  //state 배열
  const [arr3, setArr3] = useState([1000, 2000, 3000, 4000]);
  const changeArr1 = () => {
    const arr = [10, 20, 30, 40];
    setArr3(arr);
  };
  const changeArr2 = () => {
    // arr3[2] = 300;
    // setArr3(arr3);
    //=>이렇게 하면 안됨==>왜? 주소값이 바뀐게 아니기 때문에 state입장에서는 변경된것을 못찾음=>rendering 일어나지 않음
    //=>기존 배열 주소가 아닌 새로운 배열을 만들어서 넣어야 함
    const newArr = [...arr3]; //[]안에 ... 찍고 배열 이름=>해당 배열 복사(전개연산자=>깊은 복사)
    newArr[2] = 300;
    setArr3(newArr);
    //=> 한줄 줄이기 : arr3[2]=300; setArr3([...arr3]);
    //결과론 적으로 두방법은 같은 결과를 같지만 순서는 조금다르다는 걸 기억해두자
  };
  //배열 길이 추가
  const changeArr3 = () => {
    // arr3.push(5000);
    // setArr3([...arr3]);
    setArr3([...arr3, 5000]); //arr3 복사하면서 다음 순번에 5000 추가해
  };

  //state 객체
  const [obj3, setObj3] = useState({
    name: "유저3",
    age: 25,
    addr: "서울시 강남구",
  });
  const changeObj = () => {
    //.객체 전개 연산자 사용법 : {...}
    //버튼클릭시 이름을 본인 이름으로 변경
    obj3.name = "수진";
    setObj3({ ...obj3 });
  };
  return (
    <div className="App">
      <h1>javascript데이터를 HTML 화면에 표현하는 방법</h1>
      <hr />
      <p>표현하고 싶은 값</p>
      <p>{str1}</p>
      {
        //중괄호 안 : javascript 필드
        /*
        js 변수에 있는 데이터를 화면에 출력하기 위해서는 {}사용 => mustache
        */
      }
      <p>{num1}</p>
      <ul>
        <li>{arr1[0]}</li>
        <li>{arr1[1]}</li>
        <li>{arr1[2]}</li>
        <li>{arr1[3]}</li>
      </ul>
      <ul>
        <li>{obj1.name}</li>
        <li>{obj1.age}</li>
        <li>{obj1.addr}</li>
      </ul>
      <div>{arr1}</div>
      {/* jsx에서 js 배열을 바로 출력하면 내부의 데이터를 붙여서 화면에 보여줌 */}
      {/* 
      <div>{obj1}</div>
      jsx에서 객체를 바로 출력할 수 없음>>내부에서 데이터를 반드시 꺼내서 화면에 표현해야 함 */}
      <ul>{printArr1()}</ul>
      {/* map 함수를 이용해서 배열의 데이터를 화면에 출력 */}
      <ul>
        {arr1.map(function (item, index) {
          return <li key={"key2" + index}>{item}</li>;
        })}
      </ul>
      <hr />
      <h1>state를 화면에 출력</h1>
      <p>{str2}</p>
      <p>{num2}</p>
      <ul>
        {arr2.map(function (index, item) {
          return <li key={"key" + index}>{item}</li>;
        })}
      </ul>
      <ul>
        <li>{obj2.name}</li>
        <li>{obj2.age}</li>
        <li>{obj2.addr}</li>
      </ul>
      <hr />
      <hr />
      <hr />
      <h2>JSX에서 클릭이벤트를 적용하는 방법</h2>
      <div id="div1">클릭이벤트 확인용 div</div>
      {/* 1. inline 이벤트 직접 로직 구현 */}
      <button
        onClick={function () {
          const div1 = document.querySelector("#div1");
          console.log(div1.innerText);
        }}
      >
        클릭확인용1
      </button>
      {/* 2. inline 이벤트 직접 로직 구현(arrow function 사용) 
        원래 만든 것 : function(){}
        arrow function : ()=>{}
      */}
      <button
        onClick={() => {
          const div1 = document.querySelector("#div1");
          console.log(div1.innerText);
        }}
      >
        클릭확인용2
      </button>
      {/* 3. 선언적 함수를 실행하는 방법 */}
      <button
        onClick={() => {
          testFunc1();
        }}
      >
        클릭확인용3
      </button>
      {/* 4. 변수에 저장된 함수를 실행하는 방법 */}
      <button
        onClick={() => {
          func2();
        }}
      >
        클릭확인용4
      </button>
      {/* 5. 변수에 저장된 arrow function을 실행하는 방법 */}
      <button
        onClick={() => {
          func3();
        }}
      >
        클릭확인용5
      </button>
      {/* 
      6. 변수로 선언되어있는 함수를 사용
      =>이벤트 적용은 onClick={함수}==>함수자리에 미리 저장해둔 변수 를 적용
      주의할점 : () 붙으면 안됨 */}
      <button onClick={func4}>클릭확인용6</button>
      <hr />
      <hr />
      <hr />
      <h3>일반 함수와 state 비교</h3>
      <p id="p1">{str3}</p>
      <p id="p2">{str4}</p>
      <button onClick={changeStr3}>str3 변경</button>
      <button onClick={changeStr4}>str4 변경</button>
      <p id="p3">{num3}</p>
      <button onClick={changeNum3}>num3값 변경</button>
      <ul>
        {arr3.map((item, index) => {
          return <li key={"arr4" + index}>{item}</li>;
        })}
      </ul>
      <button onClick={changeArr1}>배열변경1</button>
      <button onClick={changeArr2}>배열변경2</button>
      <button onClick={changeArr3}>배열변경3</button>
      <ul>
        <li>이름 : {obj3.name}</li>
        <li>나이 : {obj3.age}</li>
        <li>주소 : {obj3.addr}</li>
      </ul>
      <button onClick={changeObj}>이름변경</button>
    </div>
  );
}

export default App;
