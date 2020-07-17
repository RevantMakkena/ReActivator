import React from "react";
import {EditEmployee} from "./EditEmployee";
import {AuthDataContext} from "../shared/AuthDataProvider";
import {GetEmployeeById} from "../api/EmployeeApi";
import {useEffect, useState} from "react";
import {AddEmployee} from "./AddEmployee";

export const AddEditEntry = (props) => {
  const {state, dispatch} = AuthDataContext();
  const id = props.match.params.id;

  const [initialValues, setInitialValues] = useState({
    fName: "",
    lName: "",
    email: "",
    phNo: "",
    gender: "",
    race: "",
    university: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    async function getById() {
      const response = await GetEmployeeById(
        id,
        state.user.email,
        state.token
      );
      if (response) {
        setInitialValues({
          fName: response.FirstName,
          lName: response.LastName,
          email: response.Email,
          phNo: response.PhoneNumber,
          gender: response.Gender || "",
          race: response.Race || "",
          university: response.University || "",
          city: response.City || "",
          state: response.State || "",
        });
      }
    }

    if (id) getById();
  }, []);

  return id && initialValues.fName !== "" ? (
    <EditEmployee initialValues={initialValues} />
  ) : (
    <AddEmployee />
  );
};
