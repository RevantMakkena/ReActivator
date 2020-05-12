import React, {useState} from "react";
const inputElement = () => {
  const [inputText, setInputText] = useState("");
  const [inputHistory, setInputHistory] = useState([]);
  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            setInputText(e.target.value);
            setInputHistory([...inputHistory, e.target.value]);
          }}
          placeholder="Enter Some Text"
        />
        {inputText}
        <br />
        <ul>
          {inputHistory.map((history) => (
            <li>{history}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default inputElement;
