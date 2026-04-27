let value = 0;
function increment() {
    value++;
    document.getElementById("count").innerHTML = value;
}

function decrement() {
    value--;
    document.getElementById("count").innerHTML = value;
}