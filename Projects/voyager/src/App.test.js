import React from "react";
import {render} from "../../../AWS/amplify/src/node_modules/@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const {getByText} = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
