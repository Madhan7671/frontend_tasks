let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", () => {
    let inputvalue = input.value;
    let li = document.createElement("li");
    li.innerHTML = `${inputvalue} <button class='delete-btn'>delete</button> <button class='completed'>completed</button>`;
    list.appendChild(li);

    let deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    let completedBtn = li.querySelector(".completed");
    completedBtn.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
    });

    input.value = "";
});