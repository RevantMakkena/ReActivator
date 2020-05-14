import React, {useRef, useState, createRef} from "react";

const useRefEx = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const refFromUseRef = useRef();
  const refFromCreateRef = createRef();

  if (!refFromUseRef.current) {
    refFromUseRef.current = currentIndex;
  }

  if (!refFromCreateRef.current) {
    refFromCreateRef.current = currentIndex;
  }
  return (
    <div>
      <div>Current Render Index = {currentIndex}</div>
      <div>Index for UseRef = {refFromUseRef.current}</div>
      <div>Index for CreateRef = {refFromCreateRef.current}</div>
      <button
        onClick={() => {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }}
      >
        Re-render
      </button>
    </div>
  );
};

export default useRefEx;
