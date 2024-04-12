import "./input.css";
import { useState } from "react";
import { formatPhone } from "@/app/utils/formatPhone";

export const InputPhone = ({ error }) => {
  const [value, setValue] = useState("+7 (___) ___ __-__");

  const handleChange = (event) => {
    const text = event.target.value;
    const value = formatPhone(text);
    setValue(value);
  };

  return (
    <div className="input-container">
      <input
        name="phone"
        className={`input input-text ${error && "input-error"}`}
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};
