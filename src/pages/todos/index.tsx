import TodoItem from "@/components/todo/TodoItem";
import { RootState } from "@/store";
import { useAppSelector } from "@/store/hooks";
import { CssBaseline, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const TodosPage = () => {
  const theme = createTheme();
  const todos = useAppSelector((state: RootState) => state.todos);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={2}>
          {todos.map((todo) => {
            return (
              <Grid item key={todo.id} xs={6} md={4} lg={3}>
                <TodoItem {...todo} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
export default TodosPage;
