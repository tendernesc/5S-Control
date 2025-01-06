import "./Input.css";
import { IInput } from "../types/interfaces";

function Input({ title, isDisabled, type, placeholder, onChange, name, value }: IInput) {
  return (
    <div className="input">
      <label htmlFor={`input-${name}`} className="input-title">
        {title}
      </label>
      <input
        disabled={isDisabled}
        id={`input-${name}`}
        type={type}
        className="input-text"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value} 
      />
    </div>
  );
}

export default Input;
