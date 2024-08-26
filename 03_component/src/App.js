import { useState } from "react";
import TestComponent3 from "./component/ComponentTest1";
import {
  TestComponent5,
  TestComponent6,
  TestComponent7,
} from "./component/ComponentTest2"; //여러개 import 되는 경우 방식이 아예 다름 : {}안에 들어있음
//하나만 쓰고 싶다고 해서 {} 안에 안넣으면 안되는 것!!!!

function App() {
  const [str, setStr] = useState("문자열");
  const [num, setNum] = useState(100);
  const [obj, setObj] = useState({
    name: "유저1",
    age: 20,
    addr: "서울시 종로구",
  });
  const [arr, setArr] = useState([1, 2, 3, 4]);
  return (
    <div className="App">
      <h1>컴포넌트 프로젝트</h1>
      <h2>컴포넌트(component) : 사용자에게 보여지는 UI 요소</h2>
      <div>
        html 태그는 단일 태그를 작성해야 함 <br />
        반면, 컴포넌트는 여러태그와 디자인, 기능까지 포함한 태그 덩어리를
        말한다.
      </div>
      <p>
        컴포넌트는 함수 형식으로 작성해 문서 내부에 포함할 수 있고, 외부에서
        작성된걸 불러올 수도 있음
      </p>
      {/* 컴포넌트 사용할 때는 태그 사용하듯이 사용=> 태그 이름은 컴포넌트 함수 이름 */}
      <TestComponent1></TestComponent1>
      <TestComponent2></TestComponent2>
      <TestComponent3></TestComponent3>
      <TestComponent5></TestComponent5>
      <TestComponent6></TestComponent6>
      <TestComponent7></TestComponent7>
      <p>
        컴포넌트 호출 시 데이터를 전달할 수 있고, 해당 데이터로 만들어진 요소를
        리턴받을 수 있음
      </p>
      {/* 컴포넌트로 데이터를 전송하는 방법 : 태그의 속성-값 이용( <컴포넌트 이름 속성1=값1 속성2=값2 .../>) */}
      {/* 이때 컴포넌트로 전달하는 데이터 타입은 무관함(문자열, 숫자, 객체, 배열, 함수, 논리형 등등...) */}
      <TestComponent8
        data1="문자열"
        data2="문자열2"
        data3="문자열3"
      ></TestComponent8>
      <TestComponent9 str={str} num={num}></TestComponent9>
      <TestComponent10 obj={obj} arr={arr}></TestComponent10>
      <hr />
      <hr />
      <TestComponent11 obj={obj} setObj={setObj}></TestComponent11>
      {/* state값을 바꾸기 위해서는 set함수도 같이 보내줘야함 */}
      <TestComponent12 arr={arr} setArr={setArr}></TestComponent12>
    </div>
  );
}

//컴포넌트 생성하는 방법
//-> 함수를 한개 생성하면 됨!
//1. 함수 이름 작성할때 대문자로 시작
//2. jsx를 리턴
//==> 썼다고 바로 보이는건 아님 사용하려면 위로!
function TestComponent1() {
  return (
    <div>
      <h3>첫번째 컴포넌트!!</h3>
      <p>이건 잘 보임까?</p>
    </div>
  );
}

const TestComponent2 = () => {
  return (
    <div>
      <h3>두번째 컴포넌트 입니다</h3>
      <p>흠!</p>
    </div>
  );
};

const TestComponent8 = (props) => {
  //console.log(props);
  //컴포넌트로 보내온 데이터를 받는 방법
  // 매개변수로 props를 선언 -> 매개변수의 props 객체 내부에 전달된 데이터들이 있음
  // 단, 컴포넌트는 상위에서 하위로 데이터 전송은 가능하지만, 반대는 불가능(무조건 return이 jsx이기 때문)
  const data1 = props.data1;
  const data2 = props.data2;
  const data3 = props.data3;
  return (
    <div>
      <ul>
        <li>{data1}</li>
        <li>{data2}</li>
        <li>{data3}</li>
      </ul>
    </div>
  );
};

const TestComponent9 = (props) => {
  const str = props.str;
  const num = props.num;

  return (
    <div>
      <p>str:{str}</p>
      <p>num:{num}</p>
    </div>
  );
};

function TestComponent10(props) {
  const arr = props.arr;
  const obj = props.obj;
  return (
    <div>
      <ul>
        <li>{obj.name}</li>
        <li>{obj.age}</li>
        <li>{obj.addr}</li>
      </ul>
      <ul>
        {arr.map((item, index) => {
          return <li key={"arr" + index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

const TestComponent11 = (props) => {
  const obj = props.obj;
  const setObj = props.setObj;
  const changeName = () => {
    obj.name = "수진";
    setObj({ ...obj });
  };
  return (
    <div>
      <p>이름 : {obj.name}</p>
      <p>나이 : {obj.age}</p>
      <p>주소 : {obj.addr}</p>
      <button onClick={changeName}>이름 변경</button>
    </div>
  );
};

const TestComponent12 = (props) => {
  const arr = props.arr;
  const setArr = props.setArr;
  const [addNum, setAddNum] = useState("");
  const changeInput = (e) => {
    setAddNum(e.target.value);
  };
  const pushArr = () => {
    setArr([...arr, addNum]);
    setAddNum("");
  };
  return (
    <>
      <ul>
        {arr.map((item, index) => {
          return <li key={"arr" + index}>{item}</li>;
        })}
      </ul>
      <div>
        <label htmlFor="addNum">추가할 숫자 입력</label>
        <input type="text" id="addNum" value={addNum} onChange={changeInput} />
        <button onClick={pushArr}>추가하기</button>
      </div>
    </>
  );
};
export default App;
