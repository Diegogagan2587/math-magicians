import React, { useState } from 'react';
import calculate from './logic/calculate';
import CalcInputs from './inputs';
import Quotes from './Quotes';

const Calculator = () => {
  const [mathResult, setMathResult] = useState({});

  const eventHandler = (event) => {
    setMathResult(calculate(mathResult, `${event.target.innerText}`)); // return object { total, next, operation }
  };

  return (
    <div className="calculator">
      <div className="screen-output">
        {mathResult.total}
        {mathResult.operation}
        {mathResult.next}
      </div>
      <CalcInputs eventHandler={eventHandler} />
      <Quotes />
    </div>
  );
};

export default Calculator;
