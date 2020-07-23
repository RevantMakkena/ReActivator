import {createStore} from "redux";
import {
  SnackbarContent,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import React, {useState, useEffect} from "react";
import {
  AddNotes,
  DeleteNote,
  store,
} from "../reduxToolStore/ActionSlice";

export const ToolkitNotes = () => {
  const [note, setNote] = useState(store.getState());
  const [currentNote, setCurrentNote] = useState("");

  const setCurrentNoteValue = (e) => {
    setCurrentNote(e.target.value);
  };
  const updateNotes = (e) => {
    store.dispatch(AddNotes(currentNote));
    setNote(store.getState());
  };

  const deleteNotes = (e) => {
    store.dispatch(DeleteNote(e));
    setNote(store.getState());
  };

  return (
    <div>
      <div className='row'>
        <TextField
          id='outlined-basic note'
          label='Notes'
          value={currentNote}
          onChange={setCurrentNoteValue}
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
        <NoteComponent currentNote={note} delete={deleteNotes} />
      </div>
    </div>
  );
};

const NoteComponent = (props) => {
  function removeNote(e) {
    props.delete(e);
  }
  console.log(props);
  return (
    <div>
      {props.currentNote
        ? props.currentNote.map((_currentNote) => {
            return (
              <>
                <div key={_currentNote.id}>
                  <Grid container>
                    <Grid sm={1}>
                      <i
                        className='fas fa-clipboard'
                        style={{fontSize: "45px"}}></i>
                    </Grid>
                    <Grid sm={8}>
                      <SnackbarContent
                        message={_currentNote.description}
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
                </div>
              </>
            );
          })
        : ""}
    </div>
  );
};
