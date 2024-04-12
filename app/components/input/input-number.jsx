import "./input.css";
import { useState, useEffect } from "react";

export const InputNumber = ({ number, handler }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(number);
  }, [number]);

  const handleChange = (event) => {
    const text = event.target.value;
    const value = text.replace(/\D+/g, "");
    setValue(value);

    if (value) {
      handler(value);
    }
  };

  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
};
