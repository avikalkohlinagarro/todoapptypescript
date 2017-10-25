interface todoItem {
    name: string,
    status: string
    //price?: number //to make price optional
}

class TodoList {
    // public names: string [];
    // public statuses: string [];
    public todos: todoItem [];

    //Creating default no argument constructor is better
    // constructor(){
    //     this.statuses = [];
    //     this.names = [];
    // }
    constructor(){
        this.todos = [];
        if (localStorage.getItem("data") != null) {
            this.todos = JSON.parse(localStorage.getItem("data"));
        }
    }

    // add(item: todoItem) {
    //     this.names.push(item.name);
    //     this.statuses.push(item.status);
    // }
    initialGet(){
        if (localStorage.getItem("data") != null) {
            this.todos = JSON.parse(localStorage.getItem("data"));
        }
    }
    add(item: todoItem) {
        this.todos.push(item);
        localStorage.setItem("data", JSON.stringify(this.todos));
    }

    // display() {
    //     console.log(`TodoNames: ${this.names}`);
    //     console.log(`Price: ${this.statuses}`);
    // }
    getTodo(index) {
        return this.todos[index];
    }
    getAllTodo() {
        return this.todos;
    }
    getNumber() {
        return this.todos.length;
    }
    edit(index,name,status) {
        this.todos[index].name = name;
        this.todos[index].status = status;
        localStorage.setItem("data", JSON.stringify(this.todos));
    }
    display() {
        // console.log(`Todos: ${this.todos}`);
        this.todos.forEach(function (item) {
            console.log(item.name);
            console.log(item.status)
        })
        // console.log(`Price: ${this.statuses}`);
    }
}

// var list = new Shopping([],0);
var list = new TodoList();

function displayAll() {
    list.display()
}

function  addItem(name,status) {
    list.add({
        name: name,
        status: status
    })
}

function getLength(){
    return list.getNumber();
}

function editTodo(index,name,status) {
    list.edit(index,name,status);
}

function getTodoAt(index) {
    return list.getTodo(index);
}

function initialiseTodos(){
    list.initialGet();
}

function getAllTodos(){
    return list.getAllTodo();
}