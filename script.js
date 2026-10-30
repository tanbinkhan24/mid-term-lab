function welcomeMessage() {
    alert("Welcome to Simple Fashion Store!");
}

function buyProduct(productName) {
    alert("You selected " + productName + ". Thank you!");
}

function sendMessage() {
    var name = document.getElementById("customerName").value;
    var email = document.getElementById("customerEmail").value;
    var message = document.getElementById("customerMessage").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill in all the fields.");
    } else {
        alert("Thank you " + name + "! This is a demo message.");
    }
}