const status = { new: 1, in_progress: 2, completed: 3 };
// Selectors
let selectedRow = null,
    toggle = document.querySelector('.toggle'),
    div = document.querySelector('.form'),
    span = document.querySelector('span'),
    title = document.querySelector('#title'),
    header = document.querySelector('.header'),
    table = document.querySelector('.table'),
    showTask = document.querySelector('.show-task'),
    back = document.querySelector('.back'),
    tasksCount = document.querySelector('.tasks-count span');

drawTable();

// Toggle Click
toggle.addEventListener('click', () => {
    if (div.style.display !== 'block') {
        div.style.display = 'block';
        span.innerHTML = '-';
        title.innerHTML = 'Add Task';
        resetForm();
    } else {
        div.style.display = 'none';
        span.innerHTML = '+';
    }
});

// Back Click
back.addEventListener('click', () => {
    header.style.display = 'block';
    table.style.display = 'block';
    showTask.style.display = 'none';
});


// Form Submit
function onFormSubmit() {
    let formData = readFormData();
    if (selectedRow == null) {
        insertTasks(formData);
    } else {
        updateTask(formData);
    }
    title.innerHTML = 'Add Task';
    resetForm();
}

// get Elements
function readFormData() {
    let formData = {}; // new Object
    formData['task_id'] = document.getElementById('task_id').value;
    formData['task_name'] = document.getElementById('task_name').value;
    formData['date'] = document.getElementById('date').value;
    formData['status'] = document.getElementById('status').value;
    formData['description'] = document.getElementById('description').value;
    return formData;
}

// Insert Tasks
function insertTasks(data) {
    addRow(data);
    saveDataToLocalStorage(data);
    calculateTasks();
}

function addRow(data) {
    let table = document.getElementById('tasks-list').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.task_id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.task_name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.date;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = +data.status === 1 ? 'New' : (+data.status === 2 ? 'In Progress' : 'Completed');
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.description;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML =
        `<a onClick='onEdit(this)' class='btn edit' title='Edit'>Edit</a>
         <a onClick='onShow(this)' class='btn show' title='Show'>Show</a>
         <a onClick='onDelete(this)' class='btn delete' title='Delete'>Delete</a>`;
    div.style.display = 'none';
    span.innerHTML = '+';
}

// Reset Form
function resetForm() {
    document.getElementById('form').reset();
    selectedRow = null;
}

// Edit Task
function onEdit(data) {
    title.innerHTML = 'Edit Task';
    div.style.display = 'block';
    span.innerHTML = '-';
    let selectedRow = data.parentElement.parentElement;
    let taskId = selectedRow.cells[0].innerHTML;
    let tasks = getTasks();

    let task = tasks.find(taskObj => taskObj && parseInt(taskObj.task_id) === parseInt(taskId));

    document.getElementById('task_id').value = task.task_id;
    document.getElementById('task_name').value = task.task_name;
    document.getElementById('date').value = task.date;
    document.getElementById('status').value = task.status;
    document.getElementById('description').value = task.description;
}

// Update Task
function updateTask(formData) {
    selectedRow.cells[0].innerHTML = formData.task_id;
    selectedRow.cells[1].innerHTML = formData.task_name;
    selectedRow.cells[2].innerHTML = formData.date;
    selectedRow.cells[3].innerHTML = formData.status;
    selectedRow.cells[4].innerHTML = formData.description;
    div.style.display = 'none';
    span.innerHTML = '+';
    calculateTasks();
    console.log('Update Data');
}

// Show Task
function onShow(data) {
    header.style.display = 'none';
    table.style.display = 'none';
    showTask.style.display = 'block';
    div.style.display = 'none';
    span.innerHTML = '+';
    let selectedRow = data.parentElement.parentElement;
    let taskId = selectedRow.cells[0].innerHTML;
    let tasks = getTasks();

    let task = tasks.find(taskObj => taskObj && parseInt(taskObj.task_id) === parseInt(taskId));

    document.getElementById('show_task_id').innerHTML = task.task_id;
    document.getElementById('show_task_name').value = task.task_name;
    document.getElementById('show_date').value = task.date;
    document.getElementById('show_status').value = task.status;
    document.getElementById('show_description').value = task.description;
}

// Delete Task
function onDelete(data) {
    if (confirm('Are you sure you want to delete this task?')) {
        // deleteDataFromLocalStorage(data);

        let selectedRow = data.parentElement.parentElement;
        let taskId = selectedRow.cells[0].innerHTML;
        let tasks = getTasks();
        let task = tasks.find(taskObj => taskObj && parseInt(taskObj.task_id) === parseInt(taskId));
        let delItem = localStorage.removeItem('tasks', task);
        document.getElementById('tasks-list').deleteRow(row.rowIndex);
        resetForm();
    }
    calculateTasks();
}

function drawTable() {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.forEach(task => {
        addRow(task);
    });
}

// Onload Calculate Tasks
window.onload = function onloadCalculateTasks() {
    tasksCount.innerHTML = getTasks().length;
}

// Calculate Tasks
function calculateTasks() {
    tasksCount.innerHTML = getTasks().length;
}

// get Tasks
function getTasks() {
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
}

// Save Data To LocalStorage
function saveDataToLocalStorage(data) {
    let tasks = getTasks();
    tasks.push(data);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete Data From LocalStorage
function deleteDataFromLocalStorage(data) {
    let tasks = getTasks();
    tasks.forEach(function(task, index) {
        if (task.data === data) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}