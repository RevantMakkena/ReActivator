import React, {useRef} from "react";

const useRefEx = () => {
  const textInput = useRef();
  let focusTextInput = () => textInput.current.focus();
  return (
    <div>
      <input ref={textInput} type="text" />
      <br />
      <button onClick={focusTextInput}>Submit</button>
    </div>
  );
};

export default useRefEx;
