import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const DetailPage = () => {
  const { todoId } = useParams();
  const fetchTodos = async () => {
    const res = await axios.get(`http://localhost:3001/todos/${todoId}`);
    return res.data;
  };

  const { data: todo, isLoading } = useQuery("todos", fetchTodos);
  return (
    <>
      <h1>디테일 페이지</h1>
      {isLoading ? (
        <h1>로딩중...</h1>
      ) : (
        <div>
          <button>
            <Link to={"/"}>이전으로</Link>
          </button>
          <div>ID: {todo.id}</div>
          <div>제목: {todo.title}</div>
          <div>내용: {todo.content}</div>
        </div>
      )}
    </>
  );
};
