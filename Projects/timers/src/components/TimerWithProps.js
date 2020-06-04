import React from "react";

const TimerWithProps = (props) => {
  const [tick, setTick] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTick((tick) => tick + 1);
    }, 1000);
  }, [ticks]);
  return (
    <div>
      {props.time ? (
        <>
          <div className='row'>
            <div className='card border-primary mb-3'>
              <div className='card-header'>
                <i className='fas fa-hourglass rotate'></i>
              </div>
              <div className='card-body text-primary'>
                <p className='card-text'>
                  {minutes} : {tick}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
