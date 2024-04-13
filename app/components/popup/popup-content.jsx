import "./popup.css";
import Button from "@/app/components/button/button";

export default function PopupContent({ text, onClose }) {
  return (
    <div className="popup">
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content">
          <div>{text}</div>
          <Button onClick={onClose}>Закрыть</Button>
        </div>
      </div>
    </div>
  );
}
