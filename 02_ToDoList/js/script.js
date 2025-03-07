document.querySelector('#push').onclick = function (){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please ENter a Task");
    }
    else{
        document.querySelector('#tasks').innerHTML 
        += `
            <div class="tasks">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll('.delete');
        for(var i = 0 ; i < current_tasks.length ; i++){
            current_tasks[i].onclick = function(){
            this.parentElement.remove();
            }
        }

        var tasks = document.querySelectorAll('.tasks');
        for(var i = 0 ; i < tasks.length ; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector('#newtask input').value = "";
    }
}