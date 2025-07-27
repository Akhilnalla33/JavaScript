const prompt = require("prompt-sync")(); // to Scan

const deposit = () => {
    let depositAmt;
    let check;
    do {
        depositAmt = prompt("Enter a deposit Amount: "); // by default js takes string
        check = parseFloat(depositAmt);
        if (isNaN(check) || check <= 0) {
            console.log("Invalid Amount, try Again");
        }
    } while (isNaN(check) || check <= 0);

    console.log(`You deposited: ${check}`);
};

deposit();