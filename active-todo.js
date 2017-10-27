function activeTodo(index) {
    var currentTodo = document.getElementById("todoNo"+index);
    currentTodo.classList.remove('todoStatusCOMPLETE');
    currentTodo.classList.add('todoStatusACTIVE');
    var todoDetails = getTodoAt(index);
    var editButton = document.getElementById("editButton"+index);
    var activeButton = document.getElementById("activeButton"+index);
    // console.log(completeButton);
    currentTodo.removeChild(activeButton);
    var editButton = document.createElement("button");
    var editIcon = document.createElement("i");
    editIcon.setAttribute("class","fa fa-pencil-square-o");
    editIcon.setAttribute("aria-hidden","true");
    editButton.appendChild(editIcon);
    editButton.setAttribute("id", "editButton" + index);
    editButton.setAttribute("onclick", "editTodoName(" + index + ")");
    editButton.setAttribute("class", "btn btn-outline-secondary");
    var editButtonText = document.createElement("span");
    editButtonText.innerText = " Edit To Do";
    editButton.appendChild(editButtonText);
    var completeButton = document.createElement("button");
    var completeIcon = document.createElement("i");
    completeIcon.setAttribute("class","fa fa-check");
    completeIcon.setAttribute("aria-hidden","true");
    completeButton.appendChild(completeIcon);
    // completeButton.setAttribute("value","Mark As Complete");
    completeButton.setAttribute("id", "completeButton" + index);
    completeButton.setAttribute("onclick", "completeTodo(" + index + ")");
    completeButton.setAttribute("class", "btn btn-outline-success");
    var completeButtonText = document.createElement("span");
    completeButtonText.innerText = " Mark As Complete";
    completeButton.appendChild(completeButtonText);
    var deleteButton = document.getElementById("deleteButton"+index);
    currentTodo.insertBefore(editButton,deleteButton);
    currentTodo.insertBefore(completeButton,deleteButton);
    editTodo(index,todoDetails.name,"ACTIVE");
}