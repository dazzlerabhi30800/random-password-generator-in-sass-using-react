import { useContext } from "react";
import { StateContext } from "../Context";

export default function Input() {
  const { checkboxData, setCheckboxData } = useContext(StateContext);

  const handleChange = (i) => {
    const checkboxes = [...checkboxData];
    checkboxes[i].checked = !checkboxes[i].checked;
    setCheckboxData(checkboxes);
  };
  return (
    <div className="input-container">
      {checkboxData.map((item, index) => (
        <div key={index} className="pass-input">
          <input
            onChange={() => handleChange(index)}
            type="checkbox"
            checked={item.checked}
            id={`pass-${index}`}
          />
          <label htmlFor={`pass-${index}`}>{item.name}</label>
        </div>
      ))}
    </div>
  );
}
