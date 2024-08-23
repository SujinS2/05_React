import { useState } from "react";
import "./todo.css";

function App() {
  const [text, setText] = useState("");
  const changeValue = (e) => {
    setText(e.target.value);
  };
  const [todoList, setTodoList] = useState([
    {
      isLike: false,
      todoContent: "자고싶어요",
      regDate: "2024-08-21",
      isDone: true,
    },
    {
      isLike: true,
      todoContent: "놀고싶어요",
      regDate: "2024-08-22",
      isDone: false,
    },
  ]);
  const addTodo = () => {};

  return (
    <div className="todo-wrap">
      <div className="todo-header">
        <h1>TODO LIST</h1>
      </div>
      <div className="todo-content">
        <div className="input-box">
          <input
            type="text"
            name="todo-text"
            onChange={changeValue}
            value={text}
          />
          <button onClick={addTodo}>등록</button>
        </div>
        <div className="todo-list-wrap">
          {todoList.map((todo, index) => {
            return (
              <ul key={"todo" + index}>
                <li className="todo-like">{todo.isLike}</li>
                <li className="todo-text">{todo.todoContent}</li>
                <li className="todo-date">{todo.regDate}</li>
                <li className="todo-btn">{todo.isDone}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
