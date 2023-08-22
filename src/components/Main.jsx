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
      <div className="wrapper">
        {password.length > 0 && <GeneratedPass />}
        <CharacterLength />
        <div className="range-container">
          <input
            onChange={(e) => {
              setPassLength(e.target.value);
            }}
            style={{
              background: `linear-gradient(to right, #59f7b5 ${
                (passLength / 15) * 100 - 5
              }%, #ccc ${(passLength / 15) * 100}%)`,
            }}
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
      </div>
    </main>
  );
}
