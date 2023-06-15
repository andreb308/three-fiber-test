import React, { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Input() {
  const { title, setTitle, textVisibility, setTextVisibility } =
    useContext(AppContext);

  return (
    <div style={{ position: "absolute", zIndex: 1 }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTextVisibility(!textVisibility);
        }}
      >
        Toggle Text
      </button>
    </div>
  );
}
