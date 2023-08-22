import { createContext, useState } from "react";

export const StateContext = createContext();

const inputData = [
  {
    name: "Include Symbols",
    checked: false,
  },

  {
    name: "Include Numbers",
    checked: false,
  },

  {
    name: "Include LowerCase",
    checked: false,
  },
  {
    name: "Include UpperCase",
    checked: false,
  },
];

export default function StateContextProvider({ children }) {
  const [password, setPassword] = useState("");
  const [checkboxData, setCheckboxData] = useState(inputData);
  const [passLength, setPassLength] = useState(3);
  const [copy, setCopy] = useState(false);

  return (
    <StateContext.Provider
      value={{
        password,
        setPassword,
        checkboxData,
        setCheckboxData,
        passLength,
        setPassLength,
        setCopy,
        copy,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
