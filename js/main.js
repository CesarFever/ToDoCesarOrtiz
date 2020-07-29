var todos = new Array();

const todoList = document.getElementById('todolist');
const todoTextBox = document.getElementById('todotext');


function updateTODOList()
{
    todoList.innerHTML = '';

    todos.forEach(element => {
        todoList.innerHTML += '<div class="well"> <input type="checkbox" onclick="completeTODO(this, this.parentElement)"> <small style="font-size: medium;">'+element+'</small><button type="button" style="float: right;" class="btn btn-danger" onclick="removeTODO(this.parentElement)">X</button></div>'
        
    });
}

function addNewTODO()
{

    var text = todoTextBox.value;

    todos.push(text);

    todoTextBox.value = '';

    updateTODOList();
}


function removeTODO(parent)
{
    var childNodes = parent.childNodes;

    var text = childNodes[3].innerText;

    var idx = todos.findIndex(p => p);
    
    var removed = todos.splice(idx, 1);

    item = null;

    parent.parentNode.removeChild(parent);
}

function completeTODO(box, parent)
{
    var childNodes = parent.childNodes;

    var text = childNodes[3];
    
    if(box.checked == true)
    {
        text.style.textDecoration = "line-through";
    }
    else
    {
        text.style.textDecoration = "none";
    }
}

/*

<div class="well">
    <input type="checkbox"> <small style="font-size: medium;">Some todo text </small>
    <button type="button" style="float: right;" class="btn btn-danger">X</button>
</div>
*/