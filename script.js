let counter = 0;

document.getElementById('btn').addEventListener('click', function () {
    const userName = document.getElementById('username');
    const passWord = document.getElementById('password');

    if (userName.value == "Mickael" && passWord.value == "Allouche") {
        alert("Your username and password is correct thank you for your visit !!")
    } else {
        alert("Username or password is not true !!");
        counter++;
    }
    if (counter == 5) {
        alert("OK my friends, The username is Mickael and the Password is Allouche, BUT.....")
        document.getElementById('btn').disabled = true;
    }
})