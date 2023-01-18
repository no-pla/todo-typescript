import { useForm } from "../Hooks/useForm";
import { CustomButton } from "./CustomButton";
import { CustomInput } from "./CustomInput";

export const Home = () => {
  const { formValue, onChange, onSubmit } = useForm();

  const { title, content } = formValue;

  return (
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
      <CustomButton text="추가" />
    </form>
  );
};
