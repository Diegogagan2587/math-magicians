import React, { useState } from 'react';
import calculate from './logic/calculate';
import CalcInputs from './inputs';

const Calculator = () => {
  const [mathResult, setMathResult] = useState({});

  // -------------------start event Listeners
  const eventHandler = (event) => {
    console.log('runing event handler');
    console.log('event.target =', event.target.innerText);
    setMathResult(calculate(mathResult, `${event.target.innerText}`)); // return object { total, next, operation }
  };

  return (
    <div className="calculator">
      {console.log('Calculator component is runing')}
      <div className="screen-output">
        {mathResult.total}
        {mathResult.operation}
        {mathResult.next}
      </div>
      <CalcInputs eventHandler={eventHandler} />
    </div>
  );
};

export default Calculator;
