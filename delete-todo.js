function deleteTodo(index) {
    var currentTodo = document.getElementById("todoNo"+index);
    currentTodo.classList.remove('todoStatusACTIVE');
    currentTodo.classList.remove('todoStatusCOMPLETE');
    currentTodo.classList.add('todoStatusDELETED');
    var todoDetails = getTodoAt(index);
    var deleteButton = document.getElementById("deleteButton"+index);
    if (document.getElementById("completeButton"+index) != null) {
        currentTodo.removeChild(document.getElementById("completeButton"+index));
    }
    if (document.getElementById("editButton"+index) != null){
        currentTodo.removeChild(document.getElementById("editButton"+index));
    }
    // console.log(deleteButton);
    currentTodo.removeChild(deleteButton);
    editTodo(index,todoDetails.name,"DELETE");
}