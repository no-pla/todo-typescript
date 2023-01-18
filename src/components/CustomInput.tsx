import styled from "styled-components";

interface InputProps {
  title: string;
  value: string;
  name: string;
  onChange: any;
}

const Label = styled.label`
  margin: 0 10px;
`;

const Input = styled.input`
  padding: 10px;
`;

export const CustomInput: React.FC<InputProps> = ({
  title,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <Label>{title}</Label>
      <Input
        placeholder={title}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
