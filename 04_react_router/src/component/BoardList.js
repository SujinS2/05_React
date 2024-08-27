import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BoardList = () => {
  const [boardList, setBoardList] = useState([
    {
      boardNo: 1,
      boardTitle: "제목1",
      boardContent: "내용1",
      boardWriter: "user01",
      boardDate: "2024-08-26",
    },
    {
      boardNo: 2,
      boardTitle: "제목2",
      boardContent: "내용2",
      boardWriter: "user02",
      boardDate: "2024-08-26",
    },
    {
      boardNo: 3,
      boardTitle: "제목3",
      boardContent: "내용3",
      boardWriter: "user01",
      boardDate: "2024-08-26",
    },
    {
      boardNo: 4,
      boardTitle: "제목4",
      boardContent: "내용4",
      boardWriter: "user02",
      boardDate: "2024-08-26",
    },
    {
      boardNo: 5,
      boardTitle: "제목5",
      boardContent: "내용5",
      boardWriter: "user02",
      boardDate: "2024-08-26",
    },
    {
      boardNo: 6,
      boardTitle: "제목6",
      boardContent: "내용6",
      boardWriter: "user01",
      boardDate: "2024-08-26",
    },
  ]);
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>글번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        {boardList.map((board, index) => {
          return <Board3 key={"board" + index} board={board}></Board3>;
        })}
      </tbody>
    </table>
  );
};

const Board1 = (props) => {
  const board = props.board;
  return (
    <tr>
      <td>{board.boardNo}</td>
      <td>
        <Link to="/boardDetail">{board.boardTitle}</Link>
      </td>
      <td>{board.boardWriter}</td>
      <td>{board.boardDate}</td>
    </tr>
  );
};

const Board2 = (props) => {
  const board = props.board;
  return (
    <tr>
      <td>{board.boardNo}</td>
      <td>
        <Link to={"/boardDetail2/" + board.boardNo}>{board.boardTitle}</Link>
        {/* boardDetail?boardNo=1  ==> boardDetail/1 로 쓰게 됨 */}
      </td>
      <td>{board.boardWriter}</td>
      <td>{board.boardDate}</td>
    </tr>
  );
};
const Board3 = (props) => {
  const board = props.board;
  const navigate = useNavigate(); //자바스크립트에서 페이지 이동할떄 사용하는 hooks
  const detailPage = () => {
    // window.location.href = "/boardDetail"; //깜박거림
    //navigate("/boardDetail");
    navigate("/boardDetail", {
      state: { board: board, boardNo: board.boardNo },
    });
  };
  return (
    <tr onClick={detailPage}>
      <td>{board.boardNo}</td>
      <td>{board.boardTitle}</td>
      <td>{board.boardWriter}</td>
      <td>{board.boardDate}</td>
    </tr>
  );
};
export default BoardList;
