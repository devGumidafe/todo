import { useState } from "react";
import { useNoteContext } from "../context/NoteProvider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export const EditTodoDialog = (props) => {
  const { note, handleClickOpen } = props;
  const [contentNote, setContentNote] = useState(note.content);
  const { updateNote } = useNoteContext();

  const handleChange = (e) => {
    setContentNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateNote({ ...note, content: contentNote });
    handleClickOpen();
  };

  return (
    <div>
      <Dialog open={true} onClose={handleClickOpen}>
        <DialogTitle>Editar Nota</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Editar Nota"
            type="text"
            fullWidth
            variant="standard"
            value={contentNote}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickOpen}>Cancelar</Button>
          <Button onClick={handleSubmit}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
