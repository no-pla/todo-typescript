import { useState } from "react";
import axios from "axios";
// import { uuid } from "uuidv4";

const initialState = { id: Date.now(), title: "", content: "", isDone: false };

export const useForm = () => {
  const [formValue, setFormValue] = useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await axios.post("http://localhost:3001/todos", formValue);
    setFormValue(initialState);
  };

  const onDelete = async (id: number) => {
    await axios.delete(`http://localhost:3001/todos/${id}`);
  };

  const onEdit = async (id: number) => {
    // await axios.patch(`http://localhost:3001/todos/${id}`);
  };

  const onToggleFinish = async (id: number) => {
    let { data } = await axios.get(`http://localhost:3001/todos/${id}`);
    axios.patch(`http://localhost:3001/todos/${id}`, {
      ...data,
      isDone: !data.isDone,
    });
  };

  return { formValue, onChange, onSubmit, onDelete, onEdit, onToggleFinish };
};
