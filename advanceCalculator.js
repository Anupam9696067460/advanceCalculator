function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result;
    if (operation === "add") {
        result= num1+num2;
    } else if (operation==="substract") {
        result=num1-num2;
    }
    else if (operation==="multiply") {
        result=num1*num2;
    }
    else if (operation==="divide") {
        result = num2 !== 0 ? (num1 / num2) : "Cannot divide by 0";
    }
    
    document.getElementById("result").innerText = "Result: " + result;
}


