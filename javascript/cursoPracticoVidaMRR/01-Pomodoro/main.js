
//Aca estamos inicializando variables
const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;

//Aca estamos capturando los elementos del DOM con sus valores de Id.
const form = document.querySelector('#form');
const itTask = document.querySelector('#itTask');
const bAdd = document.querySelector('#bAdd');


//Aca le estamos agregando un evento al 
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if(itTask.value !== ''){    //Aca estamos evaluando si dentro del input 'itTask', hay algun valor
        createTask(itTask.value);     //Si hay algun valor entonces se creara ese valor. 
        itTask.value = '';
        renderTasks();
    }
    else{

    }
})

const createTask = (value)=>{
    const newTask = {   //Aca estamos creando un objeto 'newTask', el cual agregaremos al array tasks.
        id: (Math.random() * 100).toString(36).slice(3),
        title: value,
        completed: false
    }
    tasks.unshift(newTask);     //Con el metodo unshift, vamos a agregar elementos al comiendo del array.
}

const renderTasks = ()=>{
    const html = tasks.map(task =>{
        return `
            <div class='task'>
                <div class='completed'>${task.completed ? `<span class="done">Completado</span>` : `<button class="start-button data-id="${task.id}">Start</button>`}</div>
                <div class='title'>${task.title}</div>
            </div>
        `;
    })
    const tasksContainer = document.querySelector('#tasks');
    tasksContainer.innerHTML = html.join('');

    const startButtons = document.querySelectorAll('.task .start-button');
    startButtons.forEach(button=>{
        button.addEventListener('click', e=>{
            if(!timer){
                const id = button.getAttribute('data-id');
                startButtonHandler(id);
                button.textContent = 'In progress...'
            }
        })
    })
}

const startButtonHandler = (id)=>{
    time = 25 * 60;
    current = id;
    const taskIndex = tasks.findIndex(task.id === id);
    const taslName = document.querySelector('#time #taskName');
    taskName.textContent = tasks[taskIndex];

    timer = setInterval(()=>{
        timeHandler(id)
    }, 1000);
}

const timeHandler = (id)=>{
    time--;
    renderTime();
}

const renderTime = ()=>{
    
}




