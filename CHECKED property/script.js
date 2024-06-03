const mySubscribe = document.getElementById("subscribeBtn");
const isVisa = document.getElementById("visaPyt");
const isMasterCard = document.getElementById("mastrecardPyt");
const isPaypal = document.getElementById("payPalPyt");
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

    if (isVisa.checked) {
        paymentMtdRst.textContent = "THANK YOU!!YOU HAVE SELECTED VISA PAYMENT"
    }

    else if (isMasterCard.checked) {
        paymentMtdRst.textContent = "THANK YOU FOR CHOOSING MASTERCARD"
    }
    else if (isPaypal.checked) {
        paymentMtdRst.textContent = "THANK YOU FOR CHOOSING PAYPAL"
    }

    else {
        paymentMtdRst.textContent = "PLEASE SELECT PAYMENT METHOD!!"
    };




}








