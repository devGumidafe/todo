import { useState } from "react";
import { useNoteContext } from "../context/NoteProvider";
import { TextField } from "@mui/material";
import { ChangeTheme } from "./ChangeTheme";
import { input } from "../../styles/components/header-style";
import { nanoid } from "nanoid";
import { useThemeContext } from "../context/ThemeProvider";

export const Header = () => {
  const initialNote = {
    id: "",
    content: "",
    state: "active",
  };

  const [newNote, setNewNote] = useState(initialNote);
  const { addNote } = useNoteContext();
  const { theme } = useThemeContext();

  const handleChange = (e) => {
    setNewNote({
      ...newNote,
      id: nanoid(),
      content: e.target.value,
    });
  };

  const saveNote = (e) => {
    if (e.charCode === 13 && e.target.value) {
      addNote(newNote);
      setNewNote(initialNote);
    }
  };

  return (
    <ChangeTheme>
      <TextField
        id="filled-basic"
        label="Crear nueva nota"
        variant="filled"
        className={input(theme)}
        value={newNote.content}
        onKeyPress={saveNote}
        onChange={handleChange}
        sx={{ input: { color: `${theme.textColor}` } }}
        color="secondary"
        inputProps={{ autoComplete: "off" }}
        InputLabelProps={{ shrink: true, style: { color: `${theme.primary}` }, disableAnimation: true }}
      />
    </ChangeTheme>
  );
};
