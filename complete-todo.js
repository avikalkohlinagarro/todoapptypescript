function completeTodo(index) {
    var currentTodo = document.getElementById("todoNo"+index);
    currentTodo.classList.remove('todoStatusACTIVE');
    currentTodo.classList.add('todoStatusCOMPLETE');
    var todoDetails = getTodoAt(index);
    var editButton = document.getElementById("editButton"+index);
    var completeButton = document.getElementById("completeButton"+index);
    var deleteButton = document.getElementById("deleteButton"+index);
    var activeButton = document.createElement("button");
    var activeIcon = document.createElement("i");
    activeIcon.setAttribute("class","fa fa-plus");
    activeIcon.setAttribute("aria-hidden","true");
    activeButton.appendChild(activeIcon);
    // completeButton.setAttribute("value","Mark As Complete");
    activeButton.setAttribute("id", "activeButton" + index);
    activeButton.setAttribute("onclick", "activeTodo(" + index + ")");
    activeButton.setAttribute("class", "btn btn-outline-primary");
    var activeButtonText = document.createElement("span");
    activeButtonText.innerText = " Mark As Incomplete";
    activeButton.appendChild(activeButtonText);
    currentTodo.insertBefore(activeButton,deleteButton);
    // console.log(completeButton);
    currentTodo.removeChild(completeButton);
    currentTodo.removeChild(editButton);
    editTodo(index,todoDetails.name,"COMPLETE");
}