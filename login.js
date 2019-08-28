var login;
var password;
var user = 'user1';
var userPass = 'password';
document.getElementById('buttonLogin').onclick = function() {
    // alert('clicked');
    login = document.getElementById("username").value;
    password = document.getElementById("password").value;
    // alert(login);
    // alert(password);

    if (login == user && password == userPass) {
        window.location = "popup.html";
    } else {
        window.location = "badLogin.html";
    }


}

document.getElementById('forgotPwd').onclick = function() {
    
    var newURL = "https://app.dbmms.io/users/password/new";
    chrome.tabs.create({ url: newURL });
}

document.getElementById('createAccount').onclick = function() {
    var URLNewAccount = "https://app.dbmms.io/pricing";
    chrome.tabs.create({ url: URLNewAccount });
}