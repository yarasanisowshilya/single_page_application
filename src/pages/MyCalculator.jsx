import { useState } from "react";

function MyCalculator() {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    setValue(value + val);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const handleResult = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="page">
      <div className="calc-box">
        <div className="calc-display">{value || "0"}</div>

        <div className="calc-grid">
          <button className="op" onClick={handleClear}>AC</button>
          <button className="op" onClick={handleDelete}>DEL</button>
          <button className="op" onClick={() => handleClick("%")}>%</button>
          <button className="op" onClick={() => handleClick("/")}>÷</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button className="op" onClick={() => handleClick("*")}>×</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button className="op" onClick={() => handleClick("-")}>−</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button className="op" onClick={() => handleClick("+")}>+</button>

          <button className="zero" onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button className="equal" onClick={handleResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default MyCalculator;
