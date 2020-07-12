import React from "react";
import {GetAllEmployees} from "../api/EmployeeApi";
import {useEffect} from "react";
import {useState} from "react";
import {AuthDataContext} from "../shared/AuthDataProvider";
import {Grid} from "@material-ui/core";
import {PaginationFooter} from "../shared/PaginationFooter";
import {Employee} from "./Employee";
import {Paper} from "@material-ui/core";

export const EmployeeList = () => {
  const {state, dispatch} = AuthDataContext();
  const [emps, setEmps] = useState([]);
  const [empPerPage, setEmpPerPage] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const res = await GetAllEmployees(
        state.user.email,
        state.token
      );

      if (res) setEmps(res);
      else {
        //do Nothing
      }
    }
    fetchData();
  }, []);

  const indexOfLastEmp = empPerPage * page;
  const indexOfFirstEmp = indexOfLastEmp - empPerPage;
  const currentEmps = emps.slice(indexOfFirstEmp, indexOfLastEmp);

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

  return emps ? (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Paper
          style={{
            paddingTop: "1px",
            marginTop: "10px",
            background: "darkslategrey",
            color: "white",
            height: "60px",
          }}>
          <div className='row'>
            <div className='col'>First Name</div>
            <div className='col'>Last Name</div>
            <div className='col'>City</div>
            <div className='col'>State</div>
            <div className='col'></div>
            <div className='col'></div>
          </div>
        </Paper>
        <Employee employees={currentEmps} />
        <PaginationFooter
          empPerPage={empPerPage}
          totalEmps={emps.length}
          paginate={paginate}
        />
      </Grid>
    </Grid>
  ) : (
    ""
  );
};
