import { useParams } from "react-router-dom";

const BoardDetail2 = () => {
  //url을 통해서 보내준 데이터를 추출하는 방법 : useParams()
  //useParams() : 리액트 라우터를 통해서 주소창을 통해 전송된 데이터를 추출하기 위한 객체
  const params = useParams();
  const boardNo = params.boardNo; //url을 보낼때 : 뒤에 쓴 것이 그대로 key값이 됨
  //console.log(boardNo);
  //url로 받은 boardNo 를 통해서 db 의 boarc 상세정보를 조회한 후 화면에 출력
  return (
    <div>
      <h2>게시글 상세보기 페이지</h2>
    </div>
  );
};
export default BoardDetail2;
