import React, {useState, useLayoutEffect} from "react";
import "../App.css";

export const UseLayoutEffectComponent = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(Math.floor(Math.random() * 10000));
    }
  }, [value]);

  return (
    <>
      <div className='adjustHeight'>
        <div className='container' onClick={() => setValue(0)}>
          <label>value</label> : <label>{value}</label>
        </div>
      </div>
    </>
  );
};
