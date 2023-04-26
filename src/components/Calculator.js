import { React, useState } from 'react';
import '../index.css';
import Output from './Output';
import calculate from '../logic/calculate';

import Buttons from './Buttons';

export default function Calculator() {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const addTotext = (val) => {
    setObj(calculate(obj, val));
  };

  return (
    <div className="calc-grid">
      <Output total={obj.total} next={obj.next} />
      <Buttons type="button" symbol="AC" className="clear" handleClick={addTotext} />
      <Buttons type="button" symbol="+/-" handleClick={addTotext} />
      <Buttons type="button" symbol="%" handleClick={addTotext} />
      <Buttons type="button" symbol="÷" handleClick={addTotext} />
      <Buttons type="button" symbol="7" handleClick={addTotext} />
      <Buttons type="button" symbol="8" handleClick={addTotext} />
      <Buttons type="button" symbol="9" handleClick={addTotext} />
      <Buttons type="button" symbol="x" className="operator" handleClick={addTotext} />
      <Buttons type="button" symbol="4" handleClick={addTotext} />
      <Buttons type="button" symbol="5" handleClick={addTotext} />
      <Buttons type="button" symbol="6" handleClick={addTotext} />
      <Buttons type="button" symbol="-" className="operator" handleClick={addTotext} />
      <Buttons type="button" symbol="1" handleClick={addTotext} />
      <Buttons type="button" symbol="2" handleClick={addTotext} />
      <Buttons type="button" symbol="3" handleClick={addTotext} />
      <Buttons type="button" symbol="+" className="operator" handleClick={addTotext} />
      <Buttons type="button" symbol="0" className="zero" handleClick={addTotext} />
      <Buttons type="button" symbol="." handleClick={addTotext} />
      <Buttons type="button" symbol="=" className="operator" handleClick={addTotext} />
    </div>
  );
}
