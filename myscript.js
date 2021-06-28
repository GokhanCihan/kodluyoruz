
function askUserName() {
    let userName = prompt("Adınızı yazınız.")
    let userNameElement = document.getElementById('userNameId');

    userNameElement.innerHTML = `${userName}!`;     
}

askUserName()


