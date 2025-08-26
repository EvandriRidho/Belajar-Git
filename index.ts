let todos: string[] = [];

function addTodo(task: string): void {
    todos.push(task);
    console.log("✅ Todo ditambahkan:", task);
}

addTodo("Belajar Git & GitHub dengan TS");
