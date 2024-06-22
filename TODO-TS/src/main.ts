import './style.css'

interface Todo {
    title: string;
    isCompleted: boolean;
    readonly id: string;
}

const todos: Todo[] = [];

const todosContainer = document.querySelector(".todoContainer") as HTMLDivElement;

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
    e.preventDefault();

    const todo: Todo = {
        title: todoInput.value,
        isCompleted: false,
        id: String(Math.random() * 1000),
    }

    todos.push(todo)
    todoInput.value = "";
    renderTodo(todos)
    console.log(todos);
}

const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
    const todo: HTMLDivElement = document.createElement("div");
    todo.className = "todo";

    //creating checkbox
    const checkBox: HTMLInputElement = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.className = "isCompleted";
    checkBox.checked = isCompleted;

    //creating P tag for title
    const paragraph: HTMLParagraphElement = document.createElement("p");
    paragraph.innerText = title;
    //creating delete button

    const btn: HTMLButtonElement = document.createElement("button");
    btn.innerText = "X"
    btn.className = "deleteBtn";


    // Appending All to todo Div
    todo.append(checkBox, paragraph, btn)

    todosContainer.append(todo);

}

const renderTodo = (todos: Todo[]) => {
    todosContainer.innerText = "";// fixes duplicate entry
    todos.forEach((item) => {
        generateTodoItem(item.title, item.isCompleted, item.id);
    })
}