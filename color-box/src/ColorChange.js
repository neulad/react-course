import React from "react";
import toHex from "colornames";

function ColorChange({ setBgColorHex }) {
  return (
    <div className="color-change">
      <form>
        <label htmlFor="input-color">Input color</label>
        <input
          type="text"
          onChange={(e) => {
            if (toHex(e.target.value)) setBgColorHex(toHex(e.target.value));
          }}
          placeholder="Color"
          defaultValue="White"
        />
      </form>
    </div>
  );
}

export default ColorChange;
