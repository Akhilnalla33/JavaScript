const prompt = require("prompt-sync")(); // to Scan

const deposit = () => {
    while(true){
        const depositAmt = prompt("Enter the amount to deposit: ");
        const numOfdeposit = parseInt(depositAmt); // by defsult its string so we change that to int or float

        if(isNaN(numOfdeposit) || numOfdeposit<=0 ){
            console.log("Invalid deposit try again");
        }else{
            return numOfdeposit;
        }
    }
};

const depositedamt = deposit();
