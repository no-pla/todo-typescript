import axios from "axios";
import { useQuery } from "react-query";
import { useForm } from "../Hooks/useForm";
import { useState } from "react";
export const TodoList = () => {
  const { onToggleFinish, onEdit, onDelete } = useForm();
  const [todoLists, setTodoLists] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:3001/todos");
    return res.data;
  };
  const { data: todos, isLoading } = useQuery("todos", fetchTodos, {
    refetchInterval: 1000,
  });

  return (
    <>
      {isLoading ? (
        <h1>로딩중...</h1>
      ) : (
        <ul>
          {todos?.map(
            (todo: {
              id: number;
              title: string;
              content: string;
              isDone: boolean;
            }) => {
              return (
                <li key={todo.id}>
                  <h3>{todo.title}</h3>
                  <span>{todo.content}</span>
                  <button onClick={() => onEdit}>수정</button>
                  <button onClick={() => onDelete(todo.id)}>삭제</button>
                  <button onClick={() => onToggleFinish}>
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
