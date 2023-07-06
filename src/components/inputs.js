function CalcInputs({ eventHandler }) {
  return (
    <div className="inputs-section">
      <button onClick={eventHandler} className="btn-ac" type="button">AC</button>
      <button onClick={eventHandler} className="btn-plus-les" type="button">+/-</button>
      <button onClick={eventHandler} className="btn-percentage" type="button">%</button>
      <button onClick={eventHandler} className="divide orange" type="button">÷</button>
      <button onClick={eventHandler} className="multiply orange" type="button">X</button>
      <button onClick={eventHandler} className="less orange" type="button">-</button>
      <button onClick={eventHandler} className="plus orange" type="button">+</button>
      <button onClick={eventHandler} className="equal orange" type="button">=</button>
      <button onClick={eventHandler} className="nine" type="button">9</button>
      <button onClick={eventHandler} className="eigth" type="button">8</button>
      <button onClick={eventHandler} className="seven" type="button">7</button>
      <button onClick={eventHandler} className="six" type="button">6</button>
      <button onClick={eventHandler} className="five" type="button">5</button>
      <button onClick={eventHandler} className="four" type="button">4</button>
      <button onClick={eventHandler} className="three" type="button">3</button>
      <button onClick={eventHandler} className="two" type="button">2</button>
      <button onClick={eventHandler} className="one" type="button">1</button>
      <button onClick={eventHandler} className="zero" type="button">0</button>
      <button onClick={eventHandler} className="point" type="button">.</button>
    </div>
  );
}

export default CalcInputs;
