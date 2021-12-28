import { useContext, useState, useEffect } from "react";
import {
  getLocalStorage,
  saveLocalStorage,
} from "../../helpers/localStorage";
import { NoteContext } from "./NoteContext";

export const NoteProvider = (props) => {
  const localStorageNotes = getLocalStorage("notas");
  const [notes, setNotes] = useState(localStorageNotes ?? []);

  useEffect(() => {
    saveLocalStorage("notas", notes);
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const removeNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (note) => {
    setNotes(notes.map((item) => (item.id === note.id ? note : item)));
  };

  const changeNoteState = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? {
              ...note,
              state: note.state === "completed" ? "active" : "completed",
            }
          : note
      )
    );
  };

  const clearCompleted = () => {
    setNotes(notes.filter((note) => note.state !== "completed"));
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        removeNote,
        updateNote,
        changeNoteState,
        clearCompleted,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  return useContext(NoteContext);
};
