function getChar(event) {
    if (event.which === null) {
        return String.fromCharCode(event.keyCode);
    } else if (event.which !== 0 && event.charCode !== 0) {
        return String.fromCharCode(event.which);
    } else {
        return null;
    }
}

/**
 *
 *  calculateTip(total, tip)
 *  Calculates the final tip  
 *
 *  total - Total of acumulated items purchased
 *  tip - Tip amount inputted 
 *
 ***/
function calcTipWithoutTax(total, finalTax, tip) {
    return (total - finalTax) * (tip + 1) - (total - finalTax);
}

function calcTipWithTax(total, tip) {
    return (total * (tip + 1)) - total;
}

function calcTax(total, tax) {
    return total - (total / (tax + 1));
}

function calcTotalWithTax(total, finalTipWithTax, numOfPeople) {
    return (total + finalTipWithTax) / numOfPeople;
}

function calcTotalWithoutTax(total, finalTipWithoutTax, numOfPeople) {
    return (total + finalTipWithoutTax) / numOfPeople;
}
/**
 *
 *  calculation()
 *  Overall calculation done with the application
 *
 **/
function calculation() {
    /**
     *
     *  Variable Initialization
     *
     *  tax - Tax specified by the user
     *  total - Accumulated total on the users bill
     *  numofOeople - Number of people to split the bill with
     *  tip - Tip percentage speicifed by the user. .01 to make the number a decimal number (eg 10% tip = 0.10)
     *
     **/
    var tax = parseFloat(document.getElementById('tax').value * 0.01);
    var total = parseFloat(document.getElementById('accumulatedTotal').value);
    var numOfPeople = parseInt(document.getElementById('numOfPeople').value);
    var tip = parseFloat(document.getElementById('tip').value);

    tip *= 0.01;
    console.log("Tax: " + tax);
    console.log("Total: " + total);
    console.log("Num of People: " + numOfPeople);
    console.log("Tip: " + tip);

    /**
     *
     *  Variable Initializations for calculation
     *
     *  finalTipl - final calculation for the tip
     *  finalCalculationWithTip - overall total with the tip
     *  finalCalculationWithoutTip - overall total without the tip
     *
     **/
    var finalTax = calcTax(total, tax);
    var finalTipWithTax = calcTipWithTax(total, tip);
    var finalTipWithoutTax = calcTipWithoutTax(total, finalTax, tip);
    var finalCalcTotalWithTax = calcTotalWithTax(total, finalTipWithTax, numOfPeople);
    var finalCalcTotalWithoutTax = calcTotalWithoutTax(total, finalTipWithoutTax, numOfPeople);

    //document.getElementById('taxAmount').textContent = "$" + finalTax.toFixed(2);
    //document.getElementById('tipTotalWithTax').textContent = "$" + finalTipWithTax.toFixed(2);
    document.getElementById('tipTotalWithoutTax').textContent = "$" + finalTipWithoutTax.toFixed(2);
    //document.getElementById('calcTotalWithTax').textContent = "$" + finalCalcTotalWithTax.toFixed(2);
    document.getElementById('calcTotalWithoutTax').textContent = "$" + finalCalcTotalWithoutTax.toFixed(2);
}

/**
 *
 *  When the "Submit" id (usually a button) is clicked
 *
 **/
window.onload = function(){
  calculation();

    document.getElementById('total-more-button').onclick = function(event){
        if(document.getElementById('total-more-area').className == 'hide'){
            document.getElementById('total-more-area').className = 'show';
            document.getElementById('total-more-button').textContent = 'Less bill info';
        }else if(document.getElementById('total-more-area').className == 'show'){
            
            document.getElementById('total-more-area').className = 'hide';
            document.getElementById('total-more-button').textContent = 'Full bill info';
        }
    };

    document.getElementById('info-more-button').onclick = function(event){
        if(document.getElementById('info-more-area').className == 'hide'){
            document.getElementById('info-more-area').className = 'show';
            document.getElementById('info-more-button').textContent = 'Less';
        }else if(document.getElementById('info-more-area').className == 'show'){
            
            document.getElementById('info-more-area').className = 'hide';
            document.getElementById('info-more-button').textContent = 'More';
        }
    };
};

document.getElementById('tax').oninput = function(event) {
    calculation();
};

document.getElementById('accumulatedTotal').oninput = function(event) {
    calculation();
};

document.getElementById('numOfPeople').oninput = function(event) {
    calculation();
};

document.getElementById('tip').oninput = function(event) {
    calculation();
};