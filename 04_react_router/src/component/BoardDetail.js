import { useLocation } from "react-router-dom";

const BoardDetail = () => {
  const location = useLocation(); //라우터를 통해서 넘어온 데이터를 꺼내는 훅(state를 통해서 넘어온 경우)
  const boardNo = location.state.boardNo;
  const board = location.state.board;
  return (
    <div>
      <h3>게시글 상세페이지 222</h3>
      <ul>
        <li>글번호 : {board.boardNo}</li>
        <li>제목 : {board.boardTitle}</li>
        <li>내용 : {board.boardContent}</li>
        <li>작성자 : {board.boardWriter}</li>
        <li>작성일 : {board.boardDate}</li>
      </ul>
    </div>
  );
};

export default BoardDetail;
