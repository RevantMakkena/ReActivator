import React, {useState, useEffect} from "react";
import {getApiPosts, deleteApiPost} from "./Api";
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
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const AppEntry = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const {data, status} = await getApiPosts();
      apiToast("Posts are received successfully!!", status);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const editPost = (id) => {
    console.log(id);
  };
  const deletePost = (id) => {
    const delPost = async () => {
      const res = await deleteApiPost(id);
      debugger;
    };
    delPost();
  };

  const apiToast = (message, id) => {
    if (id === 200) {
      toast.success(message, {
        position: toast.POSITION.TOP_LEFT,
      });
    } else {
      toast.error("Error while making API call!!", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  return posts ? (
    <>
      <ToastContainer />
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label='customized table'>
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
    </>
  ) : (
    ""
  );
};

export default AppEntry;
