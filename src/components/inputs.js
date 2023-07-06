function CalcInputs({ eventHandler }) {
  return (
    <div className="inputs-section" onClick={eventHandler}>
      <button className="btn-ac" type="button">AC</button>
      <button className="btn-plus-les" type="button">+/-</button>
      <button className="btn-percentage" type="button">%</button>
      <button className="divide orange" type="button">/</button>
      <button className="multiply orange" type="button">X</button>
      <button className="less orange" type="button">-</button>
      <button className="plus orange" type="button">+</button>
      <button className="equal orange" type="button">=</button>
      <button className="nine" type="button">9</button>
      <button className="eigth" type="button">8</button>
      <button className="seven" type="button">7</button>
      <button className="six" type="button">6</button>
      <button className="five" type="button">5</button>
      <button className="four" type="button">4</button>
      <button className="three" type="button">3</button>
      <button className="two" type="button">2</button>
      <button className="one" type="button">1</button>
      <button className="zero" type="button">0</button>
      <button className="point" type="button">.</button>
    </div>
  );
}

export default CalcInputs;
