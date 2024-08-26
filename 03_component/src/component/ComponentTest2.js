//컴포넌트 여러개 export 하기
const TestComponent5 = () => {
  return (
    <div>
      <h3>이건 다섯번째</h3>
    </div>
  );
};
const TestComponent6 = () => {
  return (
    <div>
      <h3>이건 여섯번째</h3>
    </div>
  );
};

const TestComponent7 = () => {
  return (
    <div>
      <h3>이건 일곱번째</h3>
    </div>
  );
};
//여러개 export>>객체 하나 만들어서 내보내기(이때 만들어놓고 안넣으면 안됨-export 안한걸 import시킬 수는 없음)
export { TestComponent5, TestComponent6, TestComponent7 };
