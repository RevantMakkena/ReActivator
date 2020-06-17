import React, {useRef, useState} from "react";
import {useAuthDataContext} from "./AuthDataProvider";

const SignInForm = () => {
  const {onLogin} = useAuthDataContext();

  const [error, setError] = useState(null);

  /*
   * We use uncontrolled inputs to simplify the example
   */

  const emailInput = useRef();
  const pswInput = useRef();

  const handleSubmit = () => {
    const currentFormValue = {
      email: emailInput.current.value,
      password: pswInput.current.value,
    };
    onLogin({name: "revanth"});
    // authApi
    //   .authenticate(currentFormValue)
    //   .then(onLogin)
    //   .catch(setError);
  };

  return (
    <div>
      {error ? <span style='error'>{error}</span> : null}
      <input ref={emailInput} type='text' name='email' />
      <input ref={pswInput} type='password' name='password' />
      <button onClick={handleSubmit}>Sign in</button>
    </div>
  );
};

export default SignInForm;
