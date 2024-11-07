
import React, { useState } from 'react';

export default function ColorPicker() {

  const [color, setColor] = useState("tomato");

  const divStyle = { backgroundColor: color };

  return (

   <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor("Aquamarine")}>Aquamarine</button>
      <button onClick={() => setColor("BlueViolet")}>BlueViolet</button>
      <button onClick={() => setColor("Chartreuse")}>Chartreuse</button>
      <button onClick={() => setColor("CornflowerBlue")}>CornflowerBlue</button>
      <button onClick={() => setColor("GoldenRod")}>GoldenRod</button>
      <button onClick={() => setColor("LightSeaGreen")}>LightSeaGreen</button>
      <button onClick={() => setColor("PapayaWhip")}>PapayaWhip</button>
    </div>
  );
}

