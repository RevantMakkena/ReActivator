import React, {useState, useEffect} from "react";
import Axios from "axios";

const JsArray = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (data.length === 0) {
      Axios.get("/employees")
        .then((res) => {
          console.log(res);
          //setData(res.data);
          setData(res.data.filter((emp) => emp.id < 3));
        })
        .catch((err) => console.log(err));
    }
  });

  return (
    <div>
      <div className='card' style={{width: "18rem"}}>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>FirstName</li>
          {data.map((emp, index, array) => (
            <li
              className='list-group-item-light justify-content-center'
              key={index}>
              {emp.firstName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JsArray;
