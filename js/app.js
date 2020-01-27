const addTaskButton = document.querySelector('#add-task-button');

const input = document.querySelector('#task-input');

const taskList = document.querySelector('#task-list');

const allRemoveButton = document.querySelector('#removeFinishedTasksButton');

const errorMessageDiv1 = document.querySelector('#error-message1');
const errorMessageDiv2 = document.querySelector('#error-message2');
const errorMessage1 = 'Task must have more than 5 \n and less then 100 characters.';
const errorMessage2 = 'You must have completed tasks.';
const deleteErrorMessage = '';

const body = document.querySelector('body');

const counterSpan = document.querySelector('#counter');

let counter = 0;

input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("add-task-button").click();
    };
});

addTaskButton.addEventListener('click', function (e) {

    e.preventDefault();

    const inputValue = input.value;

    const newLi = document.createElement('li');
    const newH1 = document.createElement('h2');
    const deleteButton = document.createElement('button');
    const completeButton = document.createElement('button');

    counter++

    if (inputValue.length > 5 && inputValue.length < 100) {

        const newTask = taskList.appendChild(newLi);
        const liLenght = document.querySelectorAll('.new-li');

        newTask.appendChild(newH1).innerText = inputValue[0].toUpperCase() + inputValue.substr(1);
        newTask.appendChild(deleteButton).innerText = 'Delete';
        newTask.appendChild(completeButton).innerText = 'Complete';

        newLi.classList.add('new-li');

        errorMessageDiv1.innerText = deleteErrorMessage;
        input.value = '';

        counterSpan.innerText = liLenght.length + 1;
    } else {
        errorMessageDiv1.innerText = errorMessage1;

    };


    deleteButton.addEventListener('click', function (e) {
        e.preventDefault();

        taskList.removeChild(newLi);

        const liLenght = document.querySelectorAll('.new-li');
        const doneTask = document.getElementsByClassName('done');
        counterSpan.innerText = liLenght.length - doneTask.length;

    });


    completeButton.addEventListener('click', function (e) {
        e.preventDefault();

        const thisLi = this.parentElement;

        if (thisLi.classList.contains('done')) {

            thisLi.style.textDecoration = 'none';
            thisLi.classList.remove('done');

        } else {

            thisLi.style.textDecoration = 'line-through';
            thisLi.classList.add('done');

        };

        const liLenght = document.querySelectorAll('.new-li');
        const doneTask = document.getElementsByClassName('done');
        counterSpan.innerText = liLenght.length - doneTask.length;

    });


});

allRemoveButton.addEventListener('click', function (e) {
    e.preventDefault();

    const doneTask = document.getElementsByClassName('done');

    if (doneTask.length > 0) {

        for (let i = doneTask.length - 1; i >= 0; i--) {
            const taskDeletedNow = doneTask[i];
            taskDeletedNow.parentElement.removeChild(taskDeletedNow);

        };

        const liLenght = document.querySelectorAll('.new-li');
        counterSpan.innerText = liLenght.length - doneTask.length;

        errorMessageDiv2.innerText = deleteErrorMessage;
        input.value = '';

    } else {

        errorMessageDiv2.innerText = errorMessage2;

    };


});