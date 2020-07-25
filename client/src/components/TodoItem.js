import React from "react";
import { Card, CardContent, Typography, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TodoItem = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Todo Item
        </Typography>
        <Typography variant="body2" component="p">
          {props.todo.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
