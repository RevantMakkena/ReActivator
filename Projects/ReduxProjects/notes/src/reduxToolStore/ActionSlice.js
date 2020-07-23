import React from "react";
import {configureStore, createSlice} from "@reduxjs/toolkit";

let id = 0;
const notesSlice = createSlice({
  name: "NoteSlice",
  initialState: [],
  reducers: {
    AddNotes: (notes, action) => {
      notes.push({
        id: ++id,
        description: action.payload,
      });
    },
    DeleteNote: (notes, action) => {
      return notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const {AddNotes, DeleteNote} = notesSlice.actions;
const noteReducer = notesSlice.reducer;
export const store = configureStore({reducer: noteReducer});
