import React, { useContext } from "react";
import Input from "./Input";
import CharacterLength from "./CharacterLength";
import { StateContext } from "../Context";
import { GenerateFunc } from "./GenerateFunc";
import GeneratedPass from "./GeneratedPass";
import PassStrength from "./PassStrength";

export default function Main() {
  const { passLength, setPassLength, checkboxData, setPassword, password } =
    useContext(StateContext);
  return (
    <main>
      {password.length > 0 && <GeneratedPass />}
      <CharacterLength />
      <div className="range-container">
        <input
          onChange={(e) => setPassLength(e.target.value)}
          type="range"
          value={passLength}
          id="password-length"
          min="1"
          max="15"
        />
      </div>
      <Input />
      <PassStrength password={password} />
      <button
        onClick={() => GenerateFunc(checkboxData, passLength, setPassword)}
        className="generate-btn"
      >
        Generate Password
      </button>
    </main>
  );
}
