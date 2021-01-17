let xhttp;

function login() {
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("notification").innerHTML = this.responseText;
        }
    };

    xhttp.open('GET', `/login?name=${encodeURI(name)}&password=${encodeURI(password)}`, true);
    xhttp.send();
}


function register() {
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;


    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("notification").innerHTML = this.responseText;
        }
    };

    xhttp.open('GET', `/register?name=${encodeURI(username)}&password=${encodeURI(password)}`, true);
    xhttp.send();
}

