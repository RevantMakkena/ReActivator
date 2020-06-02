import React, {useState} from "react";
import {SnackbarContent, TextField, Button} from "@material-ui/core";

const AddNotes = () => {
  const [notes, setNotes] = useState([]);
  return (
    <div>
      <div className='row'>
        <TextField id='outlined-basic' label='Notes' />
      </div>
      <div className='row'>
        <Button variant='contained' color='primary'>
          Add Notes
        </Button>
      </div>
      <div
        className='row'
        style={{
          marginLeft: "100px",
          marginRight: "100px",
        }}>
        <NoteComponent currentNote={notes} />
      </div>
    </div>
  );
};

const NoteComponent = (props) => {
  return (
    <div>
      {props.notes
        ? props.notes.map((currentNote) => {
            <SnackbarContent
              message={currentNote}
              style={{marginBottom: "10px"}}></SnackbarContent>;
          })
        : ""}
    </div>
  );
};

export default AddNotes;
