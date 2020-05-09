import React, {useState, useEffect} from "react";
import Axios from "axios";

const JsArray = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("/employees")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <ul>
        {data.map((emp, index) => (
          <li key={index}>{emp.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default JsArray;
