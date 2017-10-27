function editTodoName(index) {
    var currentTodo = document.getElementById("todoNo"+index);
    var textBody = document.getElementById("textBody"+index);
    textBody.innerText = null;
    var inputForm = document.createElement("form");
    inputForm.setAttribute("id","editForm"+index);
    inputForm.setAttribute("action","javascript:void(0)");
    inputForm.setAttribute("onsubmit","saveEditedTodo("+index+")");
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type","text");
    inputElement.setAttribute("class","form-control input pass");
    inputElement.setAttribute("required","required");
    var todoDetails = getTodoAt(index);
    // console.log(todoDetails.name);
    // inputElement.setAttribute("defaultValue",todoDetails.name);
    inputElement.defaultValue = todoDetails.name;
    inputElement.setAttribute("label","editTodo");
    inputElement.setAttribute("id","editName"+index);
    var editButton = document.getElementById("editButton"+index);
    var completeButton = document.getElementById("completeButton"+index);
    var deleteButton = document.getElementById("deleteButton"+index);
    editButton.disabled = true;
    completeButton.disabled = true;
    deleteButton.disabled = true;
    var submitButton = document.createElement("button");
    submitButton.setAttribute("type","button");
    var submitIcon = document.createElement("i");
    submitIcon.setAttribute("class","fa fa-save");
    submitIcon.setAttribute("aria-hidden","true");
    submitButton.appendChild(submitIcon);
    // submitButton.setAttribute("onclick","saveEditedTodo("+index+")");
    submitButton.setAttribute("id","submitName"+index);
    submitButton.setAttribute("class","btn btn-outline-secondary");
    var submitButtonText = document.createElement("span");
    submitButtonText.innerText = " Save";
    submitButton.appendChild(submitButtonText);
    inputForm.appendChild(inputElement);
    inputForm.appendChild(submitButton)
    // currentTodo.insertBefore(submitButton,currentTodo.firstChild);
    // currentTodo.insertBefore(inputElement,currentTodo.firstChild);
    currentTodo.insertBefore(inputForm,currentTodo.firstChild);
    // currentTodo.appendChild(inputElement);
}

function saveEditedTodo(index) {
    var currentTodo = document.getElementById("todoNo"+index);
    var textBody = document.getElementById("textBody"+index);
    var editForm = document.getElementById("editForm"+index);
    var newName = document.getElementById("editName"+index);
    var submitName = document.getElementById("submitName"+index);
    textBody.innerText = newName.value;
    var editButton = document.getElementById("editButton"+index);
    var completeButton = document.getElementById("completeButton"+index);
    var deleteButton = document.getElementById("deleteButton"+index);
    editButton.disabled = false;
    completeButton.disabled = false;
    deleteButton.disabled = false;
    var todoDetails = getTodoAt(index);
    editTodo(index,newName.value,todoDetails.status);
    // currentTodo.removeChild(newName);
    // currentTodo.removeChild(submitName);
    currentTodo.removeChild(editForm);
}