// // // const inputBox=document.getElementById("input-box");
// // // const listContainer=document.getElementById("list-container");

// // // inputBox.addEventListener("keypress", function(e) {
// // //     if (e.key === "Enter") {
// // //         addTask();
// // //     }
// // // });
// // // function addTask(){
// // //     if(inputBox.value===""){
// // //         alert("please enter something !!!");
// // //     }
// // //     else{
// // //         let li=document.createElement("li")
// // //         li.innerHTML=inputBox.value;
// // //         listContainer.appendChild(li);
// // //         let span = document.createElement("span")
// // //         span.innerHTML="\u00d7"
// // //         li.appendChild(span);
// // //     }
// // //     inputBox.value='';

// // // }
// // // listContainer.addEventListener("click",function(e){
// // //     if(e.target.tagName ==="LI"){
// // //         e.target.classList.toggle("checked");
        
// // //     }
// // //     else if(e.target.tagName==="SPAN"){
// // //         e.target.parentElement.remove();
         
// // //     }
// // // },false);

// // // function saveData(){
// // //     localStorage.setItem('data', listContainer.innerHTML);
// // // }
// // // function showTask(){
// // //     listContainer.innerHTML = localStorage.getItem('data');
// // // }
// // // showTask();
// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask() {
//   if (inputBox.value === "") {
//     alert("Please enter something!");
//     return; // Prevent creating empty tasks
//   }

//   let li = document.createElement("li");
//   li.innerHTML = inputBox.value;
//   listContainer.appendChild(li);

//   let span = document.createElement("span");
//   span.innerHTML = "\u00d7";
//   span.classList.add("delete-btn"); // Add a class for styling
//   li.appendChild(span);

//   inputBox.value = "";

//   // Save the updated task list to local storage
//   saveData();
// }

// function saveData() {
//   const tasks = Array.from(listContainer.querySelectorAll("li"))
//     .map((li) => li.textContent.trim()); // Extract task text and trim whitespace
//   localStorage.setItem("tasks", JSON.stringify(tasks)); // Store tasks as an array
// }

// function showTask() {
//   const storedTasks = JSON.parse(localStorage.getItem("tasks"));
//   if (storedTasks) {
//     storedTasks.forEach((task) => {
//       const li = document.createElement("li");
//       li.innerHTML = task;
//       const span = document.createElement("span");
//       span.innerHTML = "\u00d7";
//       span.classList.add("delete-btn");
//       li.appendChild(span);
//       listContainer.appendChild(li);
//     });
//   }
// }

// // Add event listener to input field (assuming it exists)
// inputBox.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     addTask();
//   }
// });

// // Add event listener to the entire list container for task deletion
// listContainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("delete-btn")) {
//     e.target.parentElement.remove(); // Remove the task element
//     saveData(); // Update local storage after deletion
//   } else if (e.target.tagName === "LI") {
//     e.target.classList.toggle("checked");
//   }
// });

// // Call showTask() on page load to display existing tasks from local storage
// showTask();
// 
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter something!");
    return; // Prevent creating empty tasks
  }

  let li = document.createElement("li");
  li.textContent = inputBox.value;
  listContainer.appendChild(li);

  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  span.classList.add("delete-btn"); // Add a class for styling
  li.appendChild(span);

  inputBox.value = "";

  // Save the updated task list to local storage
  saveData();
}

function saveData() {
  const tasks = Array.from(listContainer.querySelectorAll("li"))
    .map((li) => li.childNodes[0].textContent.trim()); // Extract only the task text
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Store tasks as an array
}

function showTask() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (storedTasks) {
    storedTasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task;
      const span = document.createElement("span");
      span.innerHTML = "\u00d7";
      span.classList.add("delete-btn");
      li.appendChild(span);
      listContainer.appendChild(li);
    });
  }
}

// Add event listener to input field (assuming it exists)
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Add event listener to the entire list container for task deletion
listContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove(); // Remove the task element
    saveData(); // Update local storage after deletion
  } else if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

// Call showTask() on page load to display existing tasks from local storage
showTask();


 
