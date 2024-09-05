import React, { useState } from "react";

const Calculator = () => {
  const [data, setData] = useState("");

  const getValue = (event) => {
    console.log(event.target.value);
    if (data != "Error") {
      setData(data.concat(event.target.value));
    } else {
      setData(event.target.value);
    }
  };
  const Delete = (event) => {
    setData(data.slice(0, -1));
  };
  const ClearAll = (event) => {
    setData("");
  };
  const Evalate = (event) => {
    try {
      const result = eval(data).toString();
      if (result == "Infinity") {
        throw new Error("Infinity");
      }
      setData(result);
    } catch (e) {
      setData("Error");
    }
  };

  return (
    <>
      <div className="container">
        <input placeholder="0" className="display" value={data} />

        <button onClick={getValue} value="(" className="operationorange">
          (
        </button>
        <button onClick={getValue} value=")" className="operationorange">
          )
        </button>
        <button onClick={Delete} className="oparationred">
          DEL
        </button>
        <button onClick={ClearAll} className="oparationred">
          AC
        </button>
        <button onClick={getValue} value="." className="operationorange">
          .
        </button>
        <button onClick={getValue} value="7">
          7
        </button>
        <button onClick={getValue} value="8">
          8
        </button>
        <button onClick={getValue} value="9">
          9
        </button>
        <button onClick={getValue} value="+" className="operationorange">
          +
        </button>
        <button onClick={getValue} value="4">
          4
        </button>
        <button onClick={getValue} value="5">
          5
        </button>
        <button onClick={getValue} value="6">
          6
        </button>
        <button onClick={getValue} value="/" className="operationorange">
          /
        </button>
        <button onClick={getValue} value="1">
          1
        </button>
        <button onClick={getValue} value="2">
          2
        </button>
        <button onClick={getValue} value="3">
          3
        </button>
        <button onClick={getValue} value="-" className="operationorange">
          -
        </button>
        <button onClick={getValue} value="*" className="operationorange">
          x
        </button>
        <button onClick={getValue} value="0">
          0
        </button>

        <button onClick={Evalate} className="operationgreen">
          =
        </button>
      </div>
    </>
  );
};

export default Calculator;
