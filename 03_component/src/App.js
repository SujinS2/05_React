import TestComponent3 from "./component/ComponentTest1";

function App() {
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
export default App;
