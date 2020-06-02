import React, {useState, useEffect} from "react";

const DateComponent = () => {
  const [tick, setTick] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHour] = useState(0);

  useEffect(() => {
    setTimer();
  }, [tick]);

  const setTimer = () => {
    setSeconds();
    if (tick === 60) {
      updateMinutes();
    }
    if (minutes === 60) {
      updateHours();
    }
  };

  const setSeconds = () => {
    setTimeout(() => {
      setTick((tick) => tick + 1);
    }, 1000);
  };

  const updateMinutes = () => {
    if (tick === 60) {
      setMinutes((minutes) => minutes + 1);
    }
  };

  const updateHours = () => {
    if (minutes === 60) {
      setHour((hour) => hour + 1);
    }
  };

  const date = new Date();
  return (
    <>
      <div className='row'>
        <div className='card border-primary mb-3'>
          <div className='card-header'>
            <i className='fas fa-hourglass'></i>
          </div>
          <div className='card-body text-primary'>
            <p className='card-text'>
              {hours} : {minutes} : {tick}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateComponent;
