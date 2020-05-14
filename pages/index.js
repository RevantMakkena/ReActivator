import React from "react";
import {Link} from "next/link";
import useStateEx from "./Hooks/useStateEx";

function Index() {
  return (
    <ul>
      <li>
        <Link href={useStateEx}>Home</Link>
      </li>
      <li></li>
    </ul>
  );
}

export default Index;
