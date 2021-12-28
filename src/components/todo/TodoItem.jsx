import { cardItem } from "../../styles/components/todo-item-style";
import { useNoteContext } from "../context/NoteProvider";
import { useThemeContext } from "../context/ThemeProvider";
import {
  Divider,
  ListItemText,
  IconButton,
  ListItem,
  Checkbox,
} from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { EditTodoDialog } from "./EditTodoDialog";
import { useState } from "react";

export const TodoItem = (props) => {
  const { note } = props;
  const [open, setOpen] = useState(false);

  const { theme } = useThemeContext();
  const { removeNote, changeNoteState } = useNoteContext();

  const deleteNote = (e) => {
    removeNote(note.id);
  };

  const handleClickOpen = (e) => {
    setOpen(!open);
  };

  const handleChangeState = (e) => {
    changeNoteState(note.id);
  };

  return (
    <>
      <ListItem className={cardItem(theme)}>
        <Checkbox
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
          onClick={handleChangeState}
          checked={note.state === "completed"}
          color="secondary"
        />
        <ListItemText
          primary={note.content}
          className={note.state === "completed" ? "crossed-text" : ""}
        />
        <IconButton onClick={handleClickOpen} color="secondary">
          <EditIcon />
        </IconButton>

        <IconButton onClick={deleteNote} color="secondary">
          <ClearIcon />
        </IconButton>
      </ListItem>
      <Divider />

      {open && <EditTodoDialog note={note} handleClickOpen={handleClickOpen} />}
    </>
  );
};
