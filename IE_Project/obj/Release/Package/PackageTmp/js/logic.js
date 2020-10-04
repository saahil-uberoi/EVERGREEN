/*main.js*/

//create connection
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "A@14762b7"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

/*const anime = require('animejs');

anime({
    targets: 'body',
    duration: 5000,
    backgroundColor: '#ffea00'
});*/