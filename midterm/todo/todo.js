
//Creates toDoList array
let toDoList =[];



// Create a "close" button and append it to each list item
let Nodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < Nodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  Nodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newItem() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("add").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please add an item to the list");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("add").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
    let item = {id:new Date().getTime, task:inputValue, completed:false};
    toDoList.push(item);
}


// Store
localStorage.setItem("inputValue", "toDoList");

// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("toDoList");


//Filter by complete tasks 
function complete(){
  const result = toDoList.filter(item => item.completed == true);
  
  }

//Active tasks 
function active(){
   const result = toDoList.filter(item => item.completed != true);  
}


//All tasks 
function allTasks(){
   const result = toDoList;  
}



