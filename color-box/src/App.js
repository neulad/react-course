import ColorChange from "./ColorChange";
import { useState } from "react";
import tinycolor from "tinycolor2";

function App() {
  const [bgColorHex, setBgColorHex] = useState("#FFFFFF");

  return (
    <div className="main">
      <div className="colored-box">
        <div
          className="box"
          style={{
            backgroundColor: bgColorHex,
            color: tinycolor(bgColorHex).isDark() ? "white" : "black",
          }}
        >
          {bgColorHex}
        </div>
        <ColorChange setBgColorHex={setBgColorHex} />
      </div>
    </div>
  );
}

export default App;
