import { Delete } from "@mui/icons-material";
import { Button, Checkbox, Paper, Stack, Typography } from "@mui/material";

type PropsType = {
    todo: TodoItemType;
    completeHandler: (id: TodoItemType["id"]) => void;
    deleteHandler: (id: TodoItemType["id"]) => void;
}


const TodoItem = ({ todo, completeHandler, deleteHandler }: PropsType) => {
    return (
        <Paper sx={{ padding: '1rem' }}>

            <Stack direction={"row"} alignItems={"center"}>
                <Typography marginRight={"auto"}>{todo.title}</Typography>
                <Checkbox checked={todo.isCompleted} onChange={() => completeHandler(todo.id)}/>
                <Button color="warning" sx={{ fontWeight: "600" }}>Edit</Button>
                <Button onClick={() => deleteHandler(todo.id)} color="error"><Delete /></Button>
            </Stack>
        </Paper>
    );
};

export default TodoItem;