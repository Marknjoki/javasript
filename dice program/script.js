const myRoll = document.getElementById("myRoll");
const rollOutCome1 = document.getElementById("Lable1")
const rollOutCome2 = document.getElementById("Lable2")
const rollOutCome3 = document.getElementById("Lable3")

let randomNo1;
let randomNo2;
let randomNo3;

//function where onclick is actiated ,the function is excecuted

myRoll.onclick = () => {
    //rolling a dice of 6 sides
    // +1 adds 1 to the minimum no generated which is 0
    randomNo1 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("Lable1").textContent = randomNo1;
    randomNo2 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("Lable2").textContent = randomNo2;
    randomNo3 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("Lable3").textContent = randomNo3;

}
