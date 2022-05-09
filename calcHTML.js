//Variables
const buttonNumber = document.getElementsByName("data-number");
const buttonOperation = document.getElementsByName("data-operation");
const buttonClear = document.getElementsByName("data-clear")[0];
const buttonEqual = document.getElementsByName("data-equal")[0];
let result = document.getElementById("result");
let newOperation = "";
let formerOperation = "";
let operation = undefined;
//al hacer click...
buttonNumber.forEach(function(button){
    button.addEventListener("click", function(){
        addNumber(button.innerText);
        
    } )
});
buttonOperation.forEach(function(button){
    button.addEventListener("click",function(){
        selectOperation(button.innerText);
    })
});
buttonEqual.addEventListener("click", function(){
    solution();
    refreshScreen();
});
buttonClear.addEventListener("click", function(){
    clear();
    refreshScreen();
})
//Funciones

function addNumber(num) {
    newOperation = newOperation.toString() + num.toString();
    refreshScreen();
}
function refreshScreen() {
    result.value = newOperation;
}
function clear() {
    newOperation = "";
    formerOperation = "";
    operation = undefined;

}
function selectOperation(oper) {
if(newOperation === "") return;
if(newOperation !== "") {
    solution();
}
operation = oper.toString();
formerOperation = newOperation;
newOperation = "";
}
function solution() {
    let calc;
    const numNewOperation = Number(newOperation);
    const numFormerOperation = Number(formerOperation);
    if(isNaN(numFormerOperation) || isNaN(numNewOperation)) return;
    switch(operation) {
        case "+":
            calc = numFormerOperation + numNewOperation;
            break;
        case "-":
            calc = numFormerOperation - numNewOperation;
            break;
        case "/":
            calc = numFormerOperation / numNewOperation;
            break;
        case "X":
            calc = numFormerOperation * numNewOperation;
            break;
        default:
            return;
    }
newOperation = calc;
operation = undefined;
formerOperation = "";
}
clear();