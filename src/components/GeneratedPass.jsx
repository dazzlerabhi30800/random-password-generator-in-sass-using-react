import { useContext } from "react";
import { StateContext } from "../Context";

export default function GeneratedPass() {
  const { password, setCopy, copy } = useContext(StateContext);
  const handleCopy = () => {
    setCopy(true);
    navigator.clipboard.writeText(password);
    setTimeout(() => {
      setCopy(false);
    }, 1500);
  };
  return (
    <div className="generated-pass">
      <p>{password}</p>
      <button onClick={handleCopy} className="copy-btn">
        {copy ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
