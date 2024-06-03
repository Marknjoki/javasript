//getting elments:

const decrease = document.getElementById("decreaseBtn");
const increase = document.getElementById("increaseBtn");
const reset = document.getElementById("decreaseBtn");
const lable = document.getElementById("myLable");

let count = 0;

increaseBtn.onclick = function () {
    count++;
    lable.textContent = count;
}

decreaseBtn.onclick = function () {
    count--;
    lable.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    lable.textContent = count;
}
