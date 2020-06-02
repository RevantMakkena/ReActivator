import React, {useState, useEffect} from "react";
import {SnackbarContent, TextField, Button} from "@material-ui/core";

const AddNotes = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {}, [notes]);

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const updateNotes = () => {
    setNotes((_notes) => [..._notes, input]);
    setInput("");
  };

  return (
    <div>
      <div className='row'>
        <TextField
          id='outlined-basic'
          label='Notes'
          value={input}
          onChange={updateInput}
        />
      </div>
      <div className='row'>
        <Button
          variant='contained'
          color='primary'
          onClick={updateNotes}>
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
      {props.currentNote
        ? props.currentNote.map((_currentNote) => {
            return (
              <SnackbarContent
                message={_currentNote}
                style={{marginBottom: "10px"}}></SnackbarContent>
            );
          })
        : ""}
    </div>
  );
};

export default AddNotes;
