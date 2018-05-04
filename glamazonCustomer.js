var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "catbeans",
    database: "glamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    listProducts();
});

function listProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("ITEMS AVAILABLE\n")
        for (var i = 0; i < res.length; i++) {
            console.log("Product ID: " + res[i].item_id + "\nProduct Name: " + res[i].product_name + "\nPrice: " + res[i].price + "\n")
        }

        orderProduct();
        // What is the ID of the product you would like to purchase?
        

        // .then: How many of the product would you like to purchase?

        // console.log(res)
        //connection.end();
    });
};

function orderProduct() {
    inquirer.prompt([
        {
            type: "list",
            name: "whichID",
            message: "What is the ID of the product you wish to buy?",
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        },
        {
            type: "input",
            name: "howmany",
            message: "How much of that item do you want?"
        },
    ]).then(answers => {
        console.log("You chose " + answers.whichID);
    });
};