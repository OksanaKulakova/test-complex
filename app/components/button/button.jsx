import "./button.css";

export default function Button({ children, ...rest }) {
  return (
    <button {...rest} className={`button ${rest.className}`}>
      {children}
    </button>
  );
}
