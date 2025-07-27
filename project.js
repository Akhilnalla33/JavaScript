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

const getNoofLines = () =>{
    while(true){
        const getLines = prompt("Enter no.of lines to bet on(1-3): ");
        const getNumber = parseInt(getLines);

        if(isNaN(getNumber) || getNumber <=0 || getNumber > 3){
            console.log("Invalid Bet lines try again");
        }else{
            return getNumber;
        }
    }
};

const depositedamt = deposit();
const betLines = getNoofLines();
