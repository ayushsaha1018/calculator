import { useState } from "react";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(<button key={i} onClick={() => updateCalcs(i.toString())}>{i}</button>);
    }
    return digits;
  };

  const updateCalcs = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    )
      return;
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const delLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const clear = () => {
    setCalc("")
    setResult("")
  }
  return (
    <div className="calculator">
      <div className="display">
        <span>({result || "0"})</span> {calc || "0"}
      </div>

      <div className="operators">
        <button onClick={() => updateCalcs("/")}>
          /
        </button>
        <button onClick={() => updateCalcs("*")}>
          *
        </button>
        <button onClick={() => updateCalcs("-")}>
          -
        </button>
        <button onClick={() => updateCalcs("+")}>
          +
        </button>

        <button onClick={delLast}>DEL</button>
        <button onClick={clear}>CLR</button>
      </div>

      <div className="digits">
        {createDigits()}
        <button onClick={() => updateCalcs("0")}>0</button>
        <button onClick={() => updateCalcs(".")}>.</button>

        <button className="equal" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
