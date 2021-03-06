import React, {useState, useEffect} from "react";
import "../App.css";

export const UseEffectComponent = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setValue(Math.floor(Math.random() * 10000));
    }
  }, [value]);

  return (
    <>
      <div className='adjustHeight'>
        <div className='container' onClick={() => setValue(0)}>
          value: {value}
        </div>
      </div>
    </>
  );
};
