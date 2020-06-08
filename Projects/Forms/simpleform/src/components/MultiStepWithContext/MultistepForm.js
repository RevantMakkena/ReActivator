import React, {useState, useEffect, useContext} from "react";
import {useForm} from "react-hook-form";
import Step1 from "./Step1";
import {
  TextField,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core";
import Step2 from "./Step2";
import Step3 from "./Step3";
import {UserDataContext} from "./UserDataContext";

const MultistepFormContext = () => {
  const {register, handleSubmit, errors} = useForm();
  const [step, setStep] = useState(0);
  useEffect(() => {}, [step]);

  const changeStep = (id) => {
    setStep(id);
    return false;
  };

  switch (step) {
    case 0:
      return (
        <Step1
          onClick={changeStep}
          register={register}
          handleSubmit={handleSubmit}
        />
      );
    case 1:
      return (
        <Step2
          onClick={changeStep}
          register={register}
          handleSubmit={handleSubmit}
        />
      );
    case 2:
      return (
        <Step3
          onClick={changeStep}
          register={register}
          handleSubmit={handleSubmit}
        />
      );
    case 3:
      return (
        <h4 style={{color: "green"}}>
          Horray!! Your data has been submitted
        </h4>
      );
    default:
      return "No Val";
  }
};

export default MultistepFormContext;
