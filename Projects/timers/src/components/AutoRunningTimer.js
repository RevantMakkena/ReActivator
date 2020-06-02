import React, {useState, useEffect} from "react";

const AutoRunningTimer = () => {
  const [tick, setTick] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHour] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (tick === 59) {
        if (minutes === 59) {
          setTick(0);
          setMinutes(0);
          setHour((hours) => hours + 1);
        } else {
          setTick(0);
          setMinutes((minutes) => minutes + 1);
        }
      } else {
        setTick((tick) => tick + 1);
      }
    }, 1000);
  }, [tick]);

  return (
    <>
      <div className='row'>
        <div className='card border-primary mb-3'>
          <div className='card-header'>
            <i className='fas fa-hourglass rotate'></i>
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

export default AutoRunningTimer;
