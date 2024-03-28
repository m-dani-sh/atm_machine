#! /usr/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 123;
let answerPin = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin Number",
        type: "number"
    }
]);
if (answerPin.pin === myPin) {
    console.log("Corect Pin Code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "plz select in one option",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your Ammount",
                type: "number"
            }
        ]);
        if (amountAns.amount > 10000) {
            console.log("you can't withdraw greater amount ");
        }
        else {
            let remainingAmount = myBalance - amountAns.amount;
            console.log(`My Remaining balace is: ${remainingAmount}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`your balace is :${myBalance}`);
    }
}
else {
    console.log("invalid pin number");
}
