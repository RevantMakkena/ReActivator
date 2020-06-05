import React, {useEffect, useState} from "react";
import Alert from "@material-ui/lab/Alert";

const TimerWithProps = () => {
  const [tick, setTick] = useState(59);
  const [minutes, setMinutes] = useState(1 - 1);
  const [success, setSuccess] = useState("none");
  const [icon, setIcon] = useState("fas fa-hourglass rotate");

  useEffect(() => {
    setTimeout(() => {
      if (minutes === 0 && tick === 0) {
        setSuccess("block");
        setIcon("fas fa-hourglass");
      } else if (tick === 0) {
        setTick(59);
        setMinutes((minutes) => minutes - 1);
      } else {
        setTick((tick) => tick - 1);
      }
    }, 1000);
  }, [tick]);

  return (
    <>
      <div className='row'>
        <div className='card border-primary mb-3'>
          <div className='card-header'>
            <i className={icon}></i>
          </div>
          <div className='card-body text-primary'>
            <p className='card-text'>
              {minutes} : {tick}
            </p>
          </div>
        </div>
      </div>
      <div className='success-block' style={{display: success}}>
        <Alert severity='success' color='info'>
          Timer is completed!!
        </Alert>
      </div>
    </>
  );
};

export default TimerWithProps;
