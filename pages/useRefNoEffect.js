import React, {useRef} from "react";

const useRefNoEffect = () => {
  const counter = useRef(0);

  // Since the ref value is updated in the render phase,
  // the value can be incremented more than once
  counter.current = counter.current + 1;

  return (
    <h1>{`The component has been re-rendered ${counter.current} times`}</h1>
  );
};

export default useRefNoEffect;
