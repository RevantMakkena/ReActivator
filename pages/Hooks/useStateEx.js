import React, {useState} from "react";

const useStateEx = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>{counter}</div>
      <button
        type="button"
        onClick={() => {
          setCounter((incCounter) => incCounter + 1);
        }}
      >
        +1
      </button>
      <button
        type="button"
        onClick={() => {
          setCounter((incCounter) => incCounter - 1);
        }}
      >
        -1
      </button>
    </div>
  );
};

export default useStateEx;

// const inputElement = () => {
//   const [inputText, setInputText] = useState("");
//   const [inputHistory, setInputHistory] = useState([]);
//   return (
//     <div>
//       <div>
//         <input
//           onChange={(e) => {
//             setInputText(e.target.value);
//             setInputHistory([...inputHistory, e.target.value]);
//           }}
//           placeholder="Enter Some Text"
//         />
//         {inputText}
//         <br />
//         <ul>
//           {inputHistory.map((history) => (
//             <li>{history}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default inputElement;
