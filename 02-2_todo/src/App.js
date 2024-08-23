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
  const addTodo = () => {
    const isLike = false;
    const todoContent = text;
    const isDone = false;
    const today = new Date();
    const year = today.getFullYear();
    const month =
      today.getMonth() + 1 < 10
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1; //getMonth()는 0부터 시작하므로
    const date = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
    const regDate = `${year}-${month}-${date}`;
    const todo = { isLike, todoContent, regDate, isDone };
    setTodoList([...todoList, todo]);
    setText("");
  };

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
            onKeyUp={(e) => {
              if (e.key == "Enter" || e.keyCode === 13) {
                // 예전 브라우저도 지원하기 위해 둘다 넣어줌
                addTodo();
              }
            }}
            value={text}
          />
          <button onClick={addTodo}>등록</button>
        </div>
        <div className="todo-list-wrap">
          {todoList.map((todo, index) => {
            return (
              <ul key={"todo" + index} className="todo">
                <li className="todo-like" onClick={like}>
                  {todo.isLike ? (
                    <span className="material-icons">favorite</span>
                  ) : (
                    <span className="material-icons">favorite_border</span>
                  )}
                </li>
                <li
                  className={todo.isDone ? "todo-text todo-done" : "todo-text"}
                >
                  {todo.todoContent}
                </li>
                <li className="todo-date">{todo.regDate}</li>
                <li className="todo-btn">
                  {todo.isDone ? (
                    ""
                  ) : (
                    <span className="material-icons done">verified</span>
                  )}
                  <span className="material-icons delete">backspace</span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
