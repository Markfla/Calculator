const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}


function clearDisplay(){
    display.value = "";
}

function calculate(){
    equation = tokenizeEquation(display.value);
    console.log(equation);

    // remove any leading +'s
    if (equation[0] === '+') {
        equation.splice(0,1);
        console.log(equation);
    }
    // remove any leading -'s 
    if (equation[0] === '-') {
        let C = 0 - (equation[1]);
        equation.splice(0,2,C);
        console.log(equation);
    }
    // iterate through the equation evaluating all 
    // multiplication and division 
    for(let i =0; i< equation.length; i++) {
        if (equation[i] === '*') {
            let A = equation[i-1]; // A for A (+ or - or * or /) B = C
            let B = equation[i+1]; 
            let C = A * B;
            equation.splice(i-1,3,C);
            console.log(equation);
            i=0;
        }
        else if (equation[i] === '/') {
            let A = equation[i-1]; // A for A (+ or - or * or /) B = C
            let B = equation[i+1]; 
            let C = A / B;
            equation.splice(i-1,3,C);
            console.log(equation);
            i=0;
        }
    }
    // evaluate again, this time for addition and subtraction
    for(let i =0; i< equation.length; i++) {
        
        if (equation[i] === '+') {
            let A = equation[i-1]; // A for A (+ or - or * or /) B = C
            let B = equation[i+1]; 
            let C = A + B;
            equation.splice(i-1,3,C);
            console.log(equation);
            i=0;
        }
        else if (equation[i] === '-') {
            let A = equation[i-1]; // A for A (+ or - or * or /) B = C
            let B = equation[i+1]; 
            let C = A - B;
            equation.splice(i-1,3,C);
            console.log(equation);
            i=0;
        }

    }

    display.value=equation[0];
    
}

function tokenizeEquation(equationString) {
    const equation = [];
    let sb = '';
    for (let i=0; i<equationString.length; i++){
        
        if (equationString[i] === '+' || equationString[i] === '-' || equationString[i] === '/' || equationString[i] === '*'){
            if (sb != '') {
                equation.push(parseFloat(sb));
            }
            
            sb = '';
            equation.push(equationString[i]);
            i++;
        }
        sb += equationString[i];
    }
    equation.push(parseFloat(sb));
    
    return equation;
}