import React, {useState, useEffect} from "react";
import {
  SnackbarContent,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";

const AddNotes = () => {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {}, [notes]);

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const didUserPressEnter = (e) => {
    if (e.key === "Enter") {
      updateNotes();
    }
  };

  const updateNotes = () => {
    if (input.length === 0) return alert("Please enter notes");
    setNotes((_notes) => [
      ..._notes,
      {id: notes.length + 1, note: input},
    ]);
    setInput("");
  };

  const deleteNotes = (e) => {
    setNotes(notes.filter((_note) => _note.id !== e));
  };

  return (
    <div>
      <div className='row'>
        <TextField
          id='outlined-basic'
          label='Notes'
          value={input}
          onChange={updateInput}
          onKeyDown={didUserPressEnter}
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
        <NoteComponent currentNote={notes} delete={deleteNotes} />
      </div>
    </div>
  );
};

const NoteComponent = (props) => {
  function removeNote(e) {
    props.delete(e);
  }
  return (
    <div>
      {props.currentNote
        ? props.currentNote.map((_currentNote) => {
            return (
              <>
                <Grid container>
                  <Grid sm={1}>
                    <i
                      className='fas fa-clipboard'
                      style={{fontSize: "45px"}}></i>
                  </Grid>
                  <Grid sm={8}>
                    <SnackbarContent
                      message={_currentNote.note}
                      style={{
                        marginBottom: "10px",
                      }}></SnackbarContent>
                  </Grid>
                  <Grid sm={3}>
                    <Button
                      variant='outlined'
                      color='secondary'
                      onClick={() => {
                        removeNote(_currentNote.id);
                      }}>
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </>
            );
          })
        : ""}
    </div>
  );
};

export default AddNotes;
