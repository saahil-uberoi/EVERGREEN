var password;
var pw = "duderlypa$$word1";

password = prompt('Please enter your password', 'Enter here');

if (password == pw) {
    window.location = '#';
} else {
    do {
        password = prompt('Incorrect password, please enter again', '');
    } while (password != pw);
    window.location = '#';
}