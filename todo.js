var taskInput = document.getElementById("task_input");
var taskHolder = document.getElementById("task_container")



function submit() {
   console.log ("click");
   var val = taskInput.value;
   console.log(val)

   if (val !== "") {

        var taskDiv = document.createElement("div");
        taskDiv.className = "task";

        var taskText = document.createElement("div");
        taskText.className = "task_text"

        var text = document.createElement("h3");
        text.innerHTML = val

        var taskBtn = document.createElement("div");
        taskBtn.className = "button_container"

        var donebtn = document.createElement("button");
        donebtn.className = "btn"
        donebtn.innerHTML = '<i class="far fa-check-square" aria-hidden="true"></i>'

        var closebtn = document.createElement("button");
        closebtn.className = "btn"
        closebtn.innerHTML = '<i class="far fa-trash-alt" aria-hidden="true"></i>'

        donebtn.addEventListener("click", crosstask);

        closebtn.addEventListener("click", delTask);

        taskHolder.append(taskDiv);
        taskDiv.append(taskText)
        taskText.append(text)
        taskDiv.append(taskBtn)
        taskBtn.append(donebtn)
        taskBtn.append(closebtn)
        // taskBtn.append(done)
        // done.append(right)
        // taskBtn.append(close)
        // close.append(xsign)  
        
        taskInput.value = "";

   } else {
       alert("Please insert the task");
   }

   function delTask() {
       if (confirm("Are you sure?")) {
           taskDiv.style.display = "none";
       }
   }

   function crosstask() {
       text.style.textDecoration = "line-through";
       taskDiv.style.backgroundColor = "#9AE66E"
   }
}