import { useForm } from "../Hooks/useForm";
import { CustomInput } from "./CustomInput";
import { TodoList } from "./TodoList";

export const Home = () => {
  const { formValue, onChange, onSubmit } = useForm();

  const { title, content } = formValue;

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>메인 페이지</h1>
        <CustomInput
          title="제목"
          name="title"
          value={title}
          onChange={onChange}
        />
        <CustomInput
          title="내용"
          name="content"
          value={content}
          onChange={onChange}
        />
        <button onClick={onSubmit}>추가</button>
      </form>
      <h3>하는 중</h3>
      <TodoList />
      <h3>완료</h3>
    </>
  );
};
