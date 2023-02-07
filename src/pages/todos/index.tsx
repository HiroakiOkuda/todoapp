import TodoItem from "@/components/todo/TodoItem";
import { CssBaseline, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MockData } from "@/util/mock-data";

const TodosPage = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Grid container spacing={2}>
          {MockData.map((item) => {
            return (
              <Grid item key={item.id} xs={6} md={4} lg={3}>
                <TodoItem {...item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};
export default TodosPage;
