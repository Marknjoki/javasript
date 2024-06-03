const mySubscribe = document.getElementById("subscribeBtn");
//method chaining
const isVisa = document.getElementById("visaPyt")
document.getElementById("mastrecardPyt")
document.getElementById("mastrecardPyt")
document.getElementById("payPalPyt");
const mySubmit = document.getElementById("submitBtn");
const subscribeRst = document.getElementById("subscribeRst");
const paymentMtdRst = document.getElementById("paymentMtdRst");

mySubmit.onclick = function () {
    if (mySubscribe.checked) {
        subscribeRst.textContent = "YOU HAVE SUCSSESFULLY SUBSCRIBED"
    }
    else {
        subscribeRst.textContent = " PLEASE SUBSCRIBE"

    }

    switch (isVisa) {
        case isVisa.checked:
            paymentMtdRst.textContent = "THANK YOU!!YOU HAVE SELECTED VISA PAYMENT"
            break;
        case isVisa.checked:
            paymentMtdRst.textContent = "THANK YOU!!YOU HAVE SELECTED VISA PAYMENT"
            break;
        case isVisa.checked:
            paymentMtdRst.textContent = "THANK YOU!!YOU HAVE SELECTED VISA PAYMENT"
            break; case isVisa.checked:
            paymentMtdRst.textContent = "THANK YOU!!YOU HAVE SELECTED VISA PAYMENT"
            break;
        default:
            paymentMtdRst.textContent = "PLEASE SELECT PAYMENT METHOD!!"
    };




}








