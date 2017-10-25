function completeTodo(index) {
    var currentTodo = document.getElementById("todoNo"+index);
    currentTodo.classList.remove('todoStatusACTIVE');
    currentTodo.classList.add('todoStatusCOMPLETE');
    var todoDetails = getTodoAt(index);
    var editButton = document.getElementById("editButton"+index);
    var completeButton = document.getElementById("completeButton"+index);
    // console.log(completeButton);
    currentTodo.removeChild(completeButton);
    currentTodo.removeChild(editButton);
    editTodo(index,todoDetails.name,"COMPLETE");
}