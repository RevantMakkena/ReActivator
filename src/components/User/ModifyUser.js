import React, {useState, useEffect} from "react";
import axios from "axios";

export default function ModifyUser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => {
      setData(res.data);
    });
  }, []);

  console.log(JSON.stringify(data));
  return <p>M modify user</p>;
}
