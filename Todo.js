var createtodo = document.querySelector('.todo_form')
var todoedit = document.querySelector('.todo_edit')
var edittodo = document.querySelector('.todo_edit .edit-input-todo')
var todoList = document.querySelector('.todo_list')
var editbtnselector = document.querySelector('.edit_buttons .btn-edit')
var hiddenInput = document.querySelector('.edit-input-id')
var deletebtnselector = document.querySelector('.edit_buttons .btn-delete')
var arr = []
function generateID(){
    return Date.now();
}
function createform(event){
    event.preventDefault()
    var id = generateID()
    var dat=event.target.todo.value
    if(dat == ""){
        alert('You should provide a valid Input')
    }
    else{
    var obj = {
        id: id,
        data:dat
    }
    arr.push(obj)
   
    var list = document.createElement('li')
    var spanel = document.createElement('span')
    var buttonwrapper = document.createElement('div')
    var editbtn = document.createElement('button')
    var deletebtn = document.createElement('button')
   
    list.classList.add('todo_item')
    buttonwrapper.classList.add('todo_buttons')
    editbtn.classList.add('btn','btn-edit')
    deletebtn.classList.add('btn','btn-delete')
   
    spanel.innerText = dat
    editbtn.innerText = "Edit"
    deletebtn.innerText = "Delete"
   
    buttonwrapper.appendChild(editbtn)
    buttonwrapper.appendChild(deletebtn)
    list.appendChild(spanel)
    list.appendChild(buttonwrapper)
    todoList.appendChild(list)
    
    list.dataset.id = id

    editbtn.addEventListener('click',function (){
        todoedit.style.display = 'flex'
        edittodo.value = todoList.querySelector('li[data-id="' + id.toString() +'" ]').querySelector('span').innerText
        hiddenInput.value = id
    })
    deletebtn.addEventListener('click',function(event){
        var targetel = event.target.parentElement.parentElement 
        var delId = targetel.dataset.id
        console.log(delId)
        var arrIndex = arr.findIndex(function(obj){return obj.id == delId})
        arr.splice(arrIndex,1)
        `targetel.remove()
        
    })
   }
}
createtodo.addEventListener("submit",createform)
editbtnselector.addEventListener('click',function(event){
    var parentElementcontainer = event.target.parentElement.parentElement
    var todoId = parentElementcontainer.querySelector('.edit-input-id').value
    var arrIndex = arr.findIndex(function(obj){return obj.id == todoId})
    arr[arrIndex].data = edittodo.value
     var todoListItem = todoList.querySelector('li[data-id="' + todoId.toString() +'" ]')
     var todoSpan = todoListItem.querySelector('span')
     todoSpan.innerText = edittodo.value
     todoedit.style.display = 'none'
})

deletebtnselector.addEventListener('click',function(){
    var todoedit = document.querySelector('.todo_edit')
    todoedit.style.display = 'none'
})      


 







function newFunction() {
    alert("Are you sure want to delete this todo???")
}

