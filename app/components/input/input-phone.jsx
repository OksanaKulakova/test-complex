import "./input.css";
import { useState, useEffect } from "react";
import { formatPhone } from "@/app/utils/formatPhone";

export const InputPhone = ({ error }) => {
  const [value, setValue] = useState("+7 (___) ___ __-__");

  useEffect(() => {
    const phone = window.localStorage.getItem("phone");
    const value = formatPhone(phone);
    setValue(value);
  }, []);

  const handleChange = (event) => {
    const text = event.target.value;
    const value = formatPhone(text);
    setValue(value);
    window.localStorage.setItem("phone", value);
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
