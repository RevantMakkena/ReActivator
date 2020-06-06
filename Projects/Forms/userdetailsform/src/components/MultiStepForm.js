import React, {useState} from "react";
import {useForm, useStep} from "react-hooks-helper";
import Names from "./Names";
import Address from "./Address";
import Contact from "./Contact";
import Review from "./Review";
import Submit from "./Submit";

const steps = [
  {id: "names"},
  {id: "address"},
  {id: "contact"},
  {id: "review"},
  {id: "submit"},
];

const defaultData = {
  firstName: "Revanth",
  lastName: "Makkena",
  nickName: "Mak",
  address: "13282 Mckinney St",
  city: "Denver",
  state: "CO",
  zip: "77054",
  email: "email@domain.com",
  phone: "+61 4252 454 332",
};

function MultiStepForm() {
  const [form, setForm] = useState(defaultData);
  const {step, navigation} = useStep({initialStep: 0, steps});
  const id = "names";
  const props = [form, setForm, navigation];
  debugger;
  switch (id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
}

export default MultiStepForm;
