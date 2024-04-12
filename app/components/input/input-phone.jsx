import "./input.css";
import { useState } from "react";
import { formatPhone } from "@/app/utils/formatPhone";

export const InputPhone = ({ handler }) => {
  const [value, setValue] = useState("+7 (___) ___ __-__");

  const handleChange = (event) => {
    const text = event.target.value;
    const value = formatPhone(text);
    setValue(value);

    if (value) {
      handler(value);
    }
  };

  return (
    <input
      className="input input-text"
      type="text"
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
};
