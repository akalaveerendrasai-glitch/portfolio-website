const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");
const taskCount=document.getElementById("taskCount");
const clearCompleted=document.getElementById("clearCompleted");

let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
let filter="all";

function save(){
localStorage.setItem("tasks",JSON.stringify(tasks));
}

function render(){

taskList.innerHTML="";

let filtered=tasks;

if(filter==="active"){
filtered=tasks.filter(t=>!t.completed);
}

if(filter==="completed"){
filtered=tasks.filter(t=>t.completed);
}

filtered.forEach(task=>{

const li=document.createElement("li");

li.className="task";

if(task.completed){
li.classList.add("completed");
}

li.innerHTML=`
<div>
<input type="checkbox" ${task.completed?"checked":""}>
<span>${task.text}</span>
</div>

<div class="task-buttons">
<button class="edit">Edit</button>
<button class="delete">Delete</button>
</div>
`;

const checkbox=li.querySelector("input");

checkbox.onchange=()=>{
task.completed=checkbox.checked;
save();
render();
};

li.querySelector(".edit").onclick=()=>{

const text=prompt("Edit Task",task.text);

if(text){
task.text=text;
save();
render();
}

};

li.querySelector(".delete").onclick=()=>{

tasks=tasks.filter(t=>t!==task);
save();
render();

};

taskList.appendChild(li);

});

taskCount.textContent=tasks.length;

}

addBtn.onclick=()=>{

const text=taskInput.value.trim();

if(text==="") return;

tasks.push({
text,
completed:false
});

taskInput.value="";

save();

render();

};

taskInput.addEventListener("keypress",e=>{

if(e.key==="Enter"){
addBtn.click();
}

});

document.querySelectorAll(".filter").forEach(btn=>{

btn.onclick=()=>{

document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

filter=btn.dataset.filter;

render();

};

});

clearCompleted.onclick=()=>{

tasks=tasks.filter(t=>!t.completed);

save();

render();

};

render();