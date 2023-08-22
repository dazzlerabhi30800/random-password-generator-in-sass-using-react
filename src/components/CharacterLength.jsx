import { useContext } from "react";
import { StateContext } from "../Context";

export default function CharacterLength() {
  const { passLength } = useContext(StateContext);
  return (
    <div className="character-length">
      <h2>Character Length</h2>
      <span>{passLength}</span>
    </div>
  );
}
