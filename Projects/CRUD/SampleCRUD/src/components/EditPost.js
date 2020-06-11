import React, {useState} from "react";
import {
  TextField,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core";
import {Link} from "react-router-dom";

export const EditPost = ({record, onPopupClose, updatedPost}) => {
  const [title, setTitle] = useState(record.title);
  const [body, setBody] = useState(record.body);
  const [changePost, setChangePost] = useState(record);
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onBodyChange = (e) => {
    setBody(e.target.value);
  };
  const onPostUpdate = (e) => {
    changePost.title = title;
    changePost.body = body;
    setChangePost(changePost);
    updatedPost(changePost);
  };
  return (
    <Container maxWidth='sm'>
      <div style={{textAlign: "center", marginTop: "30px"}}>
        <TextField
          style={{marginTop: "20px", width: "500px"}}
          variant='outlined'
          label='Title'
          name='title'
          value={title}
          onChange={onTitleChange}
        />
      </div>
      <div style={{textAlign: "center"}}>
        <TextField
          style={{marginTop: "20px", width: "500px"}}
          variant='outlined'
          label='Body'
          name='body'
          value={body}
          onChange={onBodyChange}
        />
      </div>

      <div style={{marginTop: "10px", textAlign: "center"}}>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          onClick={onPostUpdate}>
          update
        </Button>
        <Button
          type='submit'
          variant='contained'
          color='secondary'
          onClick={() => onPopupClose()}>
          Cancel
        </Button>
      </div>
    </Container>
  );
};
