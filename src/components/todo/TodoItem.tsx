import * as React from "react";
import { FunctionComponent } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Todo } from "../../store/todos/todo.type";

const TodoItem: FunctionComponent<Todo> = ({
  id,
  title, 
  description, 
  status,
  due,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {due}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" href={`todos/${id}/edit`}>
          Edit
        </Button>
        <Button size="small" variant="outlined" href={`todos/${id}/delete`}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoItem;
