import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  withStyles,
  makeStyles,
  Paper,
  Button,
  TableFooter,
} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "center",
  },
  body: {
    fontSize: 14,
    textAlign: "center",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const TableComponent = ({
  users,
  handleChangePage,
  handleChangeRowsPerPage,
  page,
  rowsPerPage,
  deleteUser,
}) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? users.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : users
          ).map((row) => (
            <StyledTableRow key={row.Id}>
              <StyledTableCell component='th' scope='row'>
                {row.FirstName}
              </StyledTableCell>
              <StyledTableCell align='left'>
                {row.LastName}
              </StyledTableCell>
              <StyledTableCell>{row.Email}</StyledTableCell>
              <StyledTableCell>{row.Company}</StyledTableCell>
              <StyledTableCell align='right'>
                <Button variant='outlined' color='primary'>
                  <Link to={`edit/${row.Id}`}>Edit</Link>
                </Button>
              </StyledTableCell>
              <StyledTableCell align='right'>
                <Button
                  variant='outlined'
                  color='secondary'
                  onClick={() => deleteUser(row.Id)}>
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 25, {label: "All", value: -1}]}
              colSpan={3}
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {"aria-label": "rows per page"},
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
