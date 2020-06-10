import React from "react";
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
} from "@material-ui/core";

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
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const AllPosts = ({posts, deletePost, editPost}) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell style={{textAlign: "center"}}>
              Title
            </StyledTableCell>
            <StyledTableCell style={{textAlign: "center"}}>
              Data
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component='th' scope='row'>
                {row.title}
              </StyledTableCell>
              <StyledTableCell align='left'>
                {row.body}
              </StyledTableCell>
              <StyledTableCell align='right'>
                <Button
                  variant='outlined'
                  color='primary'
                  onClick={() => {
                    editPost(row.id);
                  }}>
                  Edit
                </Button>
              </StyledTableCell>
              <StyledTableCell align='right'>
                <Button
                  variant='outlined'
                  color='secondary'
                  onClick={() => {
                    deletePost(row.id);
                  }}>
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
