import { AppBar, Button, Container, Stack, TextField, Toolbar, Typography } from "@mui/material"
import TodoItem from "./components/TodoItem"
import { useEffect, useState } from "react"
import { getTodos, saveTodos } from "./utils/features";


function App() {
  const [todos, setTodos] = useState<TodoItemType[]>(getTodos());

  const [title, setTitle] = useState<TodoItemType["title"]>("");


  const completeHandler = (id: TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.map((i) => {
      if (i.id === id) i.isCompleted = !i.isCompleted;
      return i;
    })
    // console.log(newTodos);
    setTodos(newTodos)

  }
  const deleteHandler = (id: TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.filter((i) => i.id !== id);
    setTodos(newTodos);

  }

  const editHandler = (id: TodoItemType["id"],
    newTitle: TodoItemType["title"]): void => {
    const newTodos: TodoItemType[] = todos.map((i) => {
      if (i.id === id) i.title = newTitle;
      return i;
    })
    setTodos(newTodos);
  }

  const submitHandler = (): void => {
    const newTodo: TodoItemType = {
      title,
      isCompleted: false,
      id: String(Math.random() * 1000),
    };
    setTodos((prev) => [...prev, newTodo]);
    setTitle("")
  };

  //asve to local storage
  useEffect(() => {
    saveTodos(todos)
  }, [todos])
  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>

      <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"}>
        {
          todos.map((i) => (
            <TodoItem
              key={i.id}
              todo={i}
              completeHandler={completeHandler}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          ))
        }
      </Stack>

      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth label={"New task"}
        onKeyDown={(e) => {
          if (e.key === "Enter" && title !== "") {
            submitHandler();
          }
        }}
      />
      <Button
        sx={{ margin: "1rem 0" }}
        fullWidth
        variant="contained"
        disabled={title === ""}
        onClick={submitHandler}>Add</Button>
    </Container>
  )
}

export default App
