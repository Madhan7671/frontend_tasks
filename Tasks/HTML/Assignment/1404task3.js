let input = document.getElementById("input");

input.addEventListener("input", (ele) => {
    let inputvalue = ele.target.value;
    console.log(inputvalue);
    document.body.style.backgroundColor = inputvalue;
})