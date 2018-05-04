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
        var selection = parseInt(answers.whichID);
        var quantity = answers.howmany;
        connection.query("SELECT * FROM products WHERE item_id = ?", [selection], function (err, res) {
  
            var newMath = res[0].stock_quantity - quantity;
            var newCost = res[0].price * quantity;
            var newItem = res[0].product_name;

            function placeOrder() {
                connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [newMath, selection], function(err, res) {
                    console.log("That item is " + newItem + ". You have ordered " + quantity + " units! Your cost is $" + newCost + ".");
                });
            };

            if (newMath >= 0) {
                placeOrder();
                console.log("Success! Your new item is on its way.")
            } else {
                console.log("Sorry! We do not have enough in stock.")

            }
        });  
    });

};