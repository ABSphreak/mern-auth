import React, { useState, useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoService from "../services/TodoService";
import { AuthContext } from "../context/AuthContext";
import Message from "./Message";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  seperator: {
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  grid: {
    flexGrow: 1,
  },
  card: {
    height: 140,
    width: 100,
  },
}));

const Todos = (props) => {
  const classes = useStyles();

  const [todo, setTodo] = useState({ name: "" });
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    TodoService.getTodos().then((data) => {
      setTodos(data.todos);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    TodoService.postTodo(todo).then((data) => {
      const { message } = data;
      resetForm();
      if (!message.msgError) {
        TodoService.getTodos().then((getData) => {
          setTodos(getData.todos);
          setMessage(message);
        });
      } else if (message.msgBody === "UnAuthorized!") {
        setMessage(message);
        authContext.setUser({ username: "", role: "" });
        authContext.setIsAuthenticated(false);
      } else {
        setMessage(message);
      }
    });
  };

  const onChange = (e) => {
    setTodo({ name: e.target.value });
  };

  const resetForm = () => {
    setTodo({ name: "" });
  };

  return (
    <main className={classes.content}>
      <div className={classes.seperator} />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>
            {todos.map((todo) => {
              return (
                <Grid key={todo._id} item>
                  <TodoItem key={todo._id} todo={todo} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <br />
      <div>
        <form onSubmit={onSubmit}>
          <label htmlFor="todo">Enter Todo:</label>
          <input
            type="text"
            name="todo"
            value={todo.name}
            onChange={onChange}
            className="form-control"
            placeholder="Enter Todo"
          />
          <button className="btn btn-lg btn-primary btn-block" type="button">
            Submit
          </button>
        </form>
        {message ? <Message message={message} /> : null}
      </div>
    </main>
  );
};

export default Todos;
