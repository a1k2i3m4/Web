const form=document.querySelector('#form');
const TaskInput=document.getElementById('taskInput');
const tasksList=document.getElementById('tasksList');
const emptyList=document.getElementById('emptyList')
let tasks= [];
form.addEventListener('submit',addTask)
tasksList.addEventListener('click',deleteTask)
tasksList.addEventListener('click',doneTask)
function addTask(event) {
    // отменяем отправку формы 
    event.preventDefault();
    // достать текст
    const taskText=TaskInput.value;
    const newTask={
        id:Date.now(),
        text:taskText,
        done:false  

    }
    tasks.push(newTask)
    const cssClass=newTask.done?'task-title task-title--done':'task-title'
    // разметка для новой задачи 
    const TaskHtml=`
    <li id="${newTask.id}" class="list-group-item d-flex justify-content-between task-item">
					<span class="${cssClass}">${newTask.text}</span>
					<div class="task-item__buttons">
						<button type="button" data-action="done" class="btn-action">
							<img src="./img/tick.svg" alt="Done" width="18" height="18">
						</button>
						<button type="button" data-action="delete" class="btn-action">
							<img src="./img/cross.svg" alt="Done" width="18" height="18">
						</button>
					</div>
				</li>
    `
    // Добовить на страницу
    tasksList.insertAdjacentHTML('beforeend',TaskHtml)
    TaskInput.value=""
    TaskInput.focus()
    if(tasksList.children.length>1){
        emptyList.classList.add('none')
    }

}
function deleteTask(event) {
    if (event.target.dataset.action==="delete") {
        const parentNode= event.target.closest('.list-group-item')
        const id =Number(parentNode.id)
        const index=tasks.findIndex(
            function (task) {
                if (task.id===id) {
                    return true
                }
            }
        )
        tasks.splice(index,1)
        parentNode.remove()
    }
    if (tasksList.children.length===1) {
        emptyList.classList.remove('none')
    }
}
function doneTask(event) {
    if (event.target.dataset.action=="done") {
        const parentNode=event.target.closest(".list-group-item");
        const id =Number(parentNode.id)
        const task =tasks.find(function(task) {
            if (task.id===id) {
                return true
            }
        })
        task.done=!task.done
        const span =parentNode.querySelector('.task-title')
        console.log(span);
        span.classList.toggle('task-title--done')
    }
    
}
