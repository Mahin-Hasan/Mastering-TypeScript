{
    type Todo = {
        task:string;
        completed:boolean;
        dueDate:string;
    }
    const requiredTodo:Todo={
        task:'code',
        completed:false,
        dueDate:'11th Nov' 
        // dueDate:'11th Nov' | if commented then it will give warning
    }

    //mapped type
    // Todo --> T ---> task, completed, dueDate
    type OptionalTodo ={
        [T in keyof Todo]? :Todo[T]
    }

    const task:OptionalTodo ={
        task:"Programming" // will not give any warning as Type OptionalTodo is made optional using ?
    }
}