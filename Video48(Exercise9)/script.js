/* 
    Create a faulty calculator using JavaScript;

    This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **
*/
function Calculator(){
    let rand = Math.random();
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operator").value;
    let result;

    switch(op){
        case '+':
            result = (rand > 0.1)? a+b : a-b;
            break;
        case '-':
            result = (rand > 0.1)? a-b : a/b;
            break;
        case '*':
            result = (rand > 0.1)? a*b : a+b;
            break;
        case '/':
            result = (rand > 0.1)? ((b !=0) ? a/b: "Can't divide by 0") : a**b;
            break;
        default :
            result = "invalid operation";
    }

    document.getElementById("result").innerText = 'The ' + op + " of " + a + " and " + b + " is " + result;
}