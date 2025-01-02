let memory = 0;

function appendToDisplay(value) {
    let display = document.getElementById("display");
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "0";
}

function clearEntry() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
}

function calculate() {
    let display = document.getElementById("display");
    try {
        let result = eval(display.value.replace("√", "Math.sqrt").replace("x²", "**2").replace("1/x", "(1/"));
        if (!isFinite(result)) {
            throw "Error";
        }
        display.value = result;
    } catch (e) {
        display.value = "Error";
    }
}

function clearMemory() {
    memory = 0;
}

function recallMemory() {
    document.getElementById("display").value = memory;
}

function addToMemory() {
    memory += parseFloat(document.getElementById("display").value);
}

function subtractFromMemory() {
    memory -= parseFloat(document.getElementById("display").value);
}

// Additional functions for advanced operations
function handleAdvancedOperations(value) {
    let display = document.getElementById("display");
    let currentValue = display.value;
    if (value === "√") {
        display.value = Math.sqrt(currentValue);
    } else if (value === "x²") {
        display.value = Math.pow(currentValue, 2);
    } else if (value === "²√x") {
        display.value = Math.pow(currentValue, 1/2);
    }
}