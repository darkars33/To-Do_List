const inputBox= document.querySelector("#input-box");
const listContainer= document.querySelector("#list-conatiner");
const btn= document.querySelector(".btn");
btn.addEventListener("click", addTask);


function addTask(){
    if(inputBox.value == ""){
        document.querySelector(".alert").innerHTML="Please Enter your task";
        setInterval(() => {
            document.querySelector(".alert").innerHTML="";
        }, 3000);
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value= "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();