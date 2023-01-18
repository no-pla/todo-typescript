import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useForm } from "../Hooks/useForm";

type TodoProps = {
  isDone: boolean;
};

export const TodoList = ({ isDone }: TodoProps) => {
  const { onToggleFinish, onEdit, onDelete, onChange } = useForm();

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:3001/todos");
    return res.data;
  };
  const { data: todos, isLoading } = useQuery("todos", fetchTodos, {
    refetchInterval: 2000,
  });
  // ?.filter((todo: { isDone: boolean }) => todo.isDone === isDone)

  return (
    <>
      {isLoading ? (
        <h1>로딩중...</h1>
      ) : (
        <ul>
          {todos
            ?.filter((todo: { isDone: boolean }) => todo.isDone === isDone)
            .map(
              (todo: {
                id: number;
                title: string;
                content: string;
                isDone: boolean;
              }) => {
                return (
                  <li key={todo.id}>
                    <Link to={{ pathname: `${todo.id}` }}>
                      <h3>{todo.title}</h3>
                    </Link>
                    <span>{todo.content}</span>
                    <button onClick={() => onDelete(todo.id)}>삭제</button>
                    <button onClick={() => onToggleFinish(todo.id)}>
                      {todo.isDone ? "취소" : "완료"}
                    </button>
                  </li>
                );
              }
            )}
        </ul>
      )}
    </>
  );
};
