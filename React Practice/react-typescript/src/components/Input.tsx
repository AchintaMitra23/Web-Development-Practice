import React from "react";
interface InputProps {
  value: string;
  placeholder: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <div>
      <input type="text" name="name" id="name" value={props.value} onChange={(event) => props.handleChange(event)} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
