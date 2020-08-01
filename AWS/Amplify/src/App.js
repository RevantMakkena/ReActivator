import React from "./node_modules/react";
import Amplify from "./node_modules/aws-amplify";
import aws_exports from "./aws-exports";
import {withAuthenticator} from "./node_modules/aws-amplify-react";
Amplify.configure(aws_exports);

const App = () => {
  return <div>Aws Amplify with React helpers</div>;
};

export default withAuthenticator(App, {includeGreetings: true});
