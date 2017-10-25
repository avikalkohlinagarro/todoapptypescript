window.onload = function () {
    initialiseTodos();
    // console.log(getAllTodos());
    var todosList = getAllTodos();
    todosList.forEach(function (item,index) {
        if (item.status == "ACTIVE") {
            createActiveTodo(item.name,index);
            // console.log(item.name+" "+index);
            // console.log(getLength());
        }
        else if (item.status == "COMPLETE") {
            createCompletedTodo(item.name,index)
        }
        else if (item.status == "DELETE") {
            createDeletedTodo(item.name,index)
        }

    })
}

function createActiveTodo(name,index) {
    var todoElement = document.createElement("div");
    // todoElement.setAttribute("class","todoStatusACTIVE media list-group-item");
    // todoElement.setAttribute("class","todoStatusACTIVE list-group-item");
    todoElement.setAttribute("class", "todoStatusACTIVE text-center");
    todoElement.setAttribute("id", "todoNo" + index);
    var textBody = document.createElement("h5");
    textBody.setAttribute("id", "textBody" + index);
    // textBody.setAttribute("class","media-body");
    textBody.innerText = name;
    todoElement.appendChild(textBody);
    // todoElement.innerText = name;
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
    todoElement.appendChild(editButton);
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
    todoElement.appendChild(completeButton);
    var deleteButton = document.createElement("button");
    var deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class","fa fa-trash");
    deleteIcon.setAttribute("aria-hidden","true");
    deleteButton.appendChild(deleteIcon);
    deleteButton.setAttribute("onclick", "deleteTodo(" + index + ")");
    deleteButton.setAttribute("id", "deleteButton" + index);
    deleteButton.setAttribute("class", "btn btn-outline-danger");
    var deleteButtonText = document.createElement("span");
    deleteButtonText.innerText = " Delete";
    deleteButton.appendChild(deleteButtonText);
    todoElement.appendChild(deleteButton);
    var parent = document.getElementById("todos");
    parent.appendChild(todoElement);
}

function createCompletedTodo(name,index) {
    var todoElement = document.createElement("div");
    // todoElement.setAttribute("class","todoStatusACTIVE media list-group-item");
    // todoElement.setAttribute("class","todoStatusACTIVE list-group-item");
    todoElement.setAttribute("class", "todoStatusCOMPLETE text-center");
    todoElement.setAttribute("id", "todoNo" + index);
    var textBody = document.createElement("h5");
    textBody.setAttribute("id", "textBody" + index);
    // textBody.setAttribute("class","media-body");
    textBody.innerText = name;
    todoElement.appendChild(textBody);
    // todoElement.innerText = name;
    var deleteButton = document.createElement("button");
    var deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class","fa fa-trash");
    deleteIcon.setAttribute("aria-hidden","true");
    deleteButton.appendChild(deleteIcon);
    deleteButton.setAttribute("onclick", "deleteTodo(" + index + ")");
    deleteButton.setAttribute("id", "deleteButton" + index);
    deleteButton.setAttribute("class", "btn btn-outline-danger");
    var deleteButtonText = document.createElement("span");
    deleteButtonText.innerText = " Delete";
    deleteButton.appendChild(deleteButtonText);
    todoElement.appendChild(deleteButton);
    var parent = document.getElementById("todos");
    parent.appendChild(todoElement);
}

function createDeletedTodo(name,index) {
    var todoElement = document.createElement("div");
    // todoElement.setAttribute("class","todoStatusACTIVE media list-group-item");
    // todoElement.setAttribute("class","todoStatusACTIVE list-group-item");
    todoElement.setAttribute("class", "todoStatusDELETED text-center");
    todoElement.setAttribute("id", "todoNo" + index);
    var textBody = document.createElement("h5");
    textBody.setAttribute("id", "textBody" + index);
    // textBody.setAttribute("class","media-body");
    textBody.innerText = name;
    todoElement.appendChild(textBody);
    var parent = document.getElementById("todos");
    parent.appendChild(todoElement);
}