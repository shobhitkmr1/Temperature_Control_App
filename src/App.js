import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    if (newTemperature >= 20) {
      setTemperatureColor("hot");
    } else if (newTemperature > 10 && newTemperature < 20) {
      setTemperatureColor("neutral");
    }
    setTemperatureValue(newTemperature);
  };
  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    if (newTemperature < 10) {
      setTemperatureColor("cold");
    } else if (newTemperature > 10 && newTemperature < 20) {
      setTemperatureColor("neutral");
    }
    setTemperatureValue(newTemperature);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  );
};
export default App;
