import React from "react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import {withAuthenticator} from "aws-amplify-react";
Amplify.configure(aws_exports);

const App = () => {
  return <div>Aws Amplify with React helpers</div>;
};

export default withAuthenticator(App, {includeGreetings: true});
