import { Delete } from "@mui/icons-material";
import { Button, Checkbox, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

type PropsType = {
    todo: TodoItemType;
    completeHandler: (id: TodoItemType["id"]) => void;
    deleteHandler: (id: TodoItemType["id"]) => void;
    editHandler: (id: TodoItemType["id"], newTitle: TodoItemType["title"]) => void;
}


const TodoItem = ({ todo, completeHandler, deleteHandler, editHandler }: PropsType) => {
    const [editActive, setEditActive] = useState<boolean>(false);
    const [textVal, setTextVal] = useState<string>(todo?.title)

    return (
        <Paper sx={{ padding: '1rem' }}>

            <Stack direction={"row"} alignItems={"center"}>
                {
                    editActive
                        ?
                        <TextField value={textVal}
                            onChange={(e) => setTextVal(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && textVal !== "") {
                                    editHandler(todo.id, textVal)
                                    setEditActive(false)
                                }
                            }}
                        />
                        :
                        <Typography marginRight={"auto"}>{todo.title}</Typography>

                }
                <Checkbox checked={todo.isCompleted} onChange={() => completeHandler(todo.id)} />
                <Button
                    onClick={() => {
                        if (editActive) {
                            editHandler(todo.id, textVal);
                        }
                        setEditActive((prev) => !prev);
                    }}

                    color="warning" sx={{ fontWeight: "600" }}>{editActive ? "Done" : "Edit"}</Button>
                <Button onClick={() => deleteHandler(todo.id)} color="error"><Delete /></Button>
            </Stack>
        </Paper>
    );
};

export default TodoItem;