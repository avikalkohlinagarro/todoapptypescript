var TodoList = /** @class */ (function () {
    //Creating default no argument constructor is better
    // constructor(){
    //     this.statuses = [];
    //     this.names = [];
    // }
    function TodoList() {
        this.todos = [];
        if (localStorage.getItem("data") != null) {
            this.todos = JSON.parse(localStorage.getItem("data"));
        }
    }
    // add(item: todoItem) {
    //     this.names.push(item.name);
    //     this.statuses.push(item.status);
    // }
    TodoList.prototype.initialGet = function () {
        if (localStorage.getItem("data") != null) {
            this.todos = JSON.parse(localStorage.getItem("data"));
        }
    };
    TodoList.prototype.add = function (item) {
        this.todos.push(item);
        localStorage.setItem("data", JSON.stringify(this.todos));
    };
    // display() {
    //     console.log(`TodoNames: ${this.names}`);
    //     console.log(`Price: ${this.statuses}`);
    // }
    TodoList.prototype.getTodo = function (index) {
        return this.todos[index];
    };
    TodoList.prototype.getAllTodo = function () {
        return this.todos;
    };
    TodoList.prototype.getNumber = function () {
        return this.todos.length;
    };
    TodoList.prototype.edit = function (index, name, status) {
        this.todos[index].name = name;
        this.todos[index].status = status;
        localStorage.setItem("data", JSON.stringify(this.todos));
    };
    TodoList.prototype.display = function () {
        // console.log(`Todos: ${this.todos}`);
        this.todos.forEach(function (item) {
            console.log(item.name);
            console.log(item.status);
        });
        // console.log(`Price: ${this.statuses}`);
    };
    return TodoList;
}());
// var list = new Shopping([],0);
var list = new TodoList();
function displayAll() {
    list.display();
}
function addItem(name, status) {
    list.add({
        name: name,
        status: status
    });
}
function getLength() {
    return list.getNumber();
}
function editTodo(index, name, status) {
    list.edit(index, name, status);
}
function getTodoAt(index) {
    return list.getTodo(index);
}
function initialiseTodos() {
    list.initialGet();
}
function getAllTodos() {
    return list.getAllTodo();
}
