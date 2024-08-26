// 컴포넌트 외부에 만들기
//0. 자바스크립트 파일을 만들기
// 만드는 과정은 원래와 동일]
//단 export 해줘야함
//==>외부에서 작성한 컴포넌트는 해당 파일에서 외부에서 사용할 수 있는 컴포넌트를 지정해줘야 한다

const TestComponent3 = () => {
  return (
    <div>
      <h3>이건 세번째 컴포넌트!</h3>
      <p>이건 외부에서 쓴거야!</p>
      <TestComponent4></TestComponent4>
    </div>
  );
};

const TestComponent4 = () => {
  return (
    <div>
      <h3>이건 네번째 컴포넌트</h3>
      <p>export에 넣어지진 못했지</p>
    </div>
  );
};

export default TestComponent3; //기본적으로 얘만 내보낼거임=>밖에서 TestComponent4 는 못쓰는 것
