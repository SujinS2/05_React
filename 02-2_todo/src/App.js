import { useState } from "react";
import "./todo.css";

function App() {
  const [text, setText] = useState("");
  const changeValue = (e) => {
    setText(e.target.value);
  };
  const [todoList, setTodoList] = useState([]); //초기값을 비울때 주의 : 빈배열이어야함(빈문자열, 이런거 안됨 =>map 함수를 돌려야하기 때문)
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
            const like = () => {
              const newArr = [...todoList];
              newArr[index].isLike = !todoList[index].isLike;
              setTodoList(newArr);
            };
            const done = () => {
              todoList[index].isDone = true;
              setTodoList([...todoList]);
            };
            // //삭제 1) splice 이용
            // const deleteTodo = () => {
            //   todoList.splice(index, 1);
            //   setTodoList([...todoList]);
            // };

            //삭제 2)filter 이용
            const deleteTodo = () => {
              setTodoList(
                todoList.filter((item) => {
                  return item != todo;
                })
              );
            };
            return (
              <ul key={"todo" + index} className="todo">
                <li className="todo-like">
                  {todo.isLike ? (
                    <span className="material-icons" onClick={like}>
                      favorite
                    </span>
                  ) : (
                    <span className="material-icons" onClick={like}>
                      favorite_border
                    </span>
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
                    <span className="material-icons done" onClick={done}>
                      verified
                    </span>
                  )}
                  <span className="material-icons delete" onClick={deleteTodo}>
                    backspace
                  </span>
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
