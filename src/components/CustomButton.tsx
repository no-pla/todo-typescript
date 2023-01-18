import styled from "styled-components";

interface ButtonProps {
  text: string;
}

const Button = styled.button`
  padding: 4px 8px;
  color: whitesmoke;
  background-color: #393b4c;
  font-size: 16px;
`;

export const CustomButton: React.FC<ButtonProps> = ({ text }) => {
  return <Button>{text}</Button>;
};
