let todos = [];

function addTodo(task) {
    todos.push(task);
    console.log("Todo ditambahkan:", task);
}

addTodo("Belajar Git");

console.log("Daftar Todo:", todos);