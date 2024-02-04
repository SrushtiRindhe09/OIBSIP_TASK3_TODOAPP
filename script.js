function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    var taskDate = new Date();
    var taskItem = {
        text: taskText,
        date: taskDate,
        completed: false
    };

    tasks.push(taskItem);
    updateTasks();
    taskInput.value = "";
}

function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTasks();
}

function updateTasks() {
    var pendingTasksList = document.getElementById("pendingTasks");
    var completedTasksList = document.getElementById("completedTasks");

    pendingTasksList.innerHTML = "";
    completedTasksList.innerHTML = "";

    tasks.forEach(function(task, index) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
<span class="${task.completed ? 'completed' : ''}">${task.text}</span>
<span class="date">${task.date.toLocaleString()}</span>
<button onclick="completeTask(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
<button onclick="deleteTask(${index})">Delete</button>
`;

        if (task.completed) {
            completedTasksList.appendChild(listItem);
        } else {
            pendingTasksList.appendChild(listItem);
        }
    });
}

var tasks = [];

// Initialize with some sample tasks
tasks.push({
    text: "Task 1",
    date: new Date(),
    completed: false
});
tasks.push({
    text: "Task 2",
    date: new Date(),
    completed: true
});

updateTasks();