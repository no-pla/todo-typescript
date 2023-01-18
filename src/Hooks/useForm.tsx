import { useState } from "react";

const initialState = { title: "", content: "" };

export const useForm = () => {
  const [formValue, setFormValue] = useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
    console.log(formValue);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormValue(initialState);
  };

  return { formValue, onChange, onSubmit };
};
