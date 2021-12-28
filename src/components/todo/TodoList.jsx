import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import { useNoteContext } from "../context/NoteProvider";
import { useThemeContext } from "../context/ThemeProvider";
import { List, Card, CardActions, CardContent } from "@mui/material";
import { container } from "../../styles/components/todo-list-style";
import { FooterButtons } from "./FooterButtons";

export const TodoList = () => {
  const { theme } = useThemeContext();
  const { notes, clearCompleted } = useNoteContext();
  const [filterNotes, setFilterNotes] = useState([]);
  const [state, setState] = useState("all");

  useEffect(() => {
    filter(state);
  }, [notes, state]);

  const filter = () => {
    state === "all"
      ? setFilterNotes([...notes])
      : setFilterNotes(notes.filter((note) => note.state === state));
  };

  const handleClearCompleted = () => {
    clearCompleted();
  };

  return (
    <div className={container(theme)}>
      <Card className="card">
        <CardContent sx={{ padding: "0" }}>
          <List className="card-list">
            {filterNotes.map((note) => (
              <TodoItem key={note.id} note={note} />
            ))}
          </List>
        </CardContent>

        <CardActions sx={{ padding: "0" }} className="card-footer">
          <p className="counter-items">{filterNotes.length} items left</p>

          <FooterButtons typeStyle="large" setState={setState} />

          <p className="clear-items" onClick={handleClearCompleted}>
            Clear Completed
          </p>
        </CardActions>
      </Card>

      <Card>
        <FooterButtons typeStyle="small" setState={setState} />
      </Card>

      <footer className="footer-fixed">
        Create by Gumidev. Code on{" "}
        <a
          className="link"
          href={"https://github.com/devGumidafe/todo"}
          target="_blank"
        >
          GitHub
        </a>
        .
      </footer>
    </div>
  );
};
