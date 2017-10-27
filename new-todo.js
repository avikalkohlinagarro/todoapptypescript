function addNewTodoName() {
    var newTodo = document.getElementById("newToDoInput");
    var newTodoValue = newTodo.value;
    var numberElements = getLength();
    addItem(newTodoValue, "ACTIVE");
    // displayAll();
    createActiveTodo(newTodoValue,numberElements);
    document.getElementById("newToDoInput").value = null;
}