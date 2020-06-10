import React from "react";
import {
  TextField,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core";
import {Link} from "react-router-dom";

export const EditPost = ({record}) => {
  return (
    <Container maxWidth='sm'>
      <div>
        <TextField
          style={{marginTop: "20px"}}
          variant='outlined'
          label='Title'
          name='title'
          value={record.title}
        />
      </div>
      <div>
        <TextField
          style={{marginTop: "20px"}}
          variant='outlined'
          label='Body'
          name='body'
          value={record.body}
        />
      </div>

      <div style={{marginTop: "10px"}}>
        <Button type='submit' variant='contained' color='primary'>
          update
        </Button>
        <Button type='submit' variant='contained' color='secondary'>
          <Link to='/home'>Cancel</Link>
        </Button>
      </div>
    </Container>
  );
};
