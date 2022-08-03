import "./App.css";
import { useState } from "react";
import "./App.css";
const App = () => {
  <h2>Calculator</h2>;
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };
  return (
    <>
      <div className="container col-md">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keyPad">
          <button onClick={clear} id="clear" className="btn waves-effect">
            Clear
          </button>
          <button
            onClick={backspace}
            id="backspace"
            className="btn waves-effect"
          >
            C
          </button>
          <button
            name="/"
            onClick={handleClick}
            id="devide"
            className="btn waves-effect"
          >
            &divide;
          </button>
          <button name="7" onClick={handleClick} className="btn waves-effect">
            7
          </button>
          <button name="8" onClick={handleClick} className="btn waves-effect">
            8
          </button>
          <button name="9" onClick={handleClick} className="btn waves-effect">
            9
          </button>
          <button
            name="*"
            onClick={handleClick}
            id="multiple"
            className="btn waves-effect"
          >
            &times;
          </button>
          <button name="4" onClick={handleClick} className="btn waves-effect">
            4
          </button>
          <button name="5" onClick={handleClick} className="btn waves-effect">
            5
          </button>
          <button name="6" onClick={handleClick} className="btn waves-effect">
            6
          </button>
          <button
            name="-"
            onClick={handleClick}
            id="minuse"
            className="btn waves-effect"
          >
            -
          </button>
          <button name="1" onClick={handleClick} className="btn waves-effect">
            1
          </button>
          <button name="2" onClick={handleClick} className="btn waves-effect">
            2
          </button>
          <button name="3" onClick={handleClick} className="btn waves-effect">
            3
          </button>
          <button
            name="+"
            onClick={handleClick}
            id="add"
            className="btn waves-effect"
          >
            +
          </button>
          <button name="0" onClick={handleClick} className="btn waves-effect">
            0
          </button>
          <button name="." onClick={handleClick} className="btn waves-effect">
            .
          </button>
          <button onClick={calculate} id="result" className="btn waves-effect">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
