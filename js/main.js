// Array para almacenar las tareas
let tasks = [];

function addTask() {
    const taskName = prompt("Ingresa el nombre de la tarea:");
    if (taskName) {
        tasks.push({ name: taskName, completed: false });
        alert(`Tarea "${taskName}" agregada.`);
    } else {
        alert("No se ingresó ninguna tarea.");
    }
}

function showTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<li class="text-gray-500">No hay tareas en la lista.</li>';
        return;
    }

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'bg-white p-4 rounded shadow flex justify-between items-center';
        li.textContent = task.name;
        if (task.completed) {
            li.classList.add('line-through', 'text-gray-400');
        }
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Completar';
        completeButton.className = 'bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600';
        completeButton.onclick = () => completeTask(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600';
        deleteButton.onclick = () => deleteTask(index);
        
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function completeTask(index) {
    if (tasks[index]) {
        tasks[index].completed = true;
        alert(`Tarea "${tasks[index].name}" completada.`);
        showTasks(); 
    }
}

function deleteTask(index) {
    if (tasks[index]) {
        const taskName = tasks[index].name;
        tasks.splice(index, 1); 
        alert(`Tarea "${taskName}" eliminada.`);
        showTasks(); 
    }
}

document.getElementById('add-task').onclick = addTask;
document.getElementById('show-tasks').onclick = showTasks;