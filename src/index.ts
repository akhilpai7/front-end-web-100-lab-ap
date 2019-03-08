import './styles.css';

const billAmt = document.getElementById('billAmt');
const tipPercent = document.getElementById('tipPercent');
const tip2Percent = document.getElementById('tip2Percent');
const tipAmount = document.getElementById('tipAmount');
const totalAmt = document.getElementById('totalAmt');
const calculateTip = (a: number, b: number) => a * b;

const tipPercents = document.querySelectorAll('input[type="button"]');
tipPercents.forEach(p => p.addEventListener('click', handleClick));

function handleClick() {
    const tipButton = this as HTMLButtonElement;
    let inputAmount = parseFloat((<HTMLInputElement>document.getElementById("amount")).value);

    if (inputAmount > 0) {
        document.getElementById("amount").className = "form-control";

        tipPercents.forEach(tp => {
            (tp.id == tipButton.id) ? tp.className = "btn btn-secondary" : tp.className = "btn btn-primary";
        });

        billAmt.innerText = inputAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        tipPercent.innerText = tipButton.value;
        tip2Percent.innerText = 'You are tipping ' + tipButton.value;
        let tip = calculateTip(inputAmount, parseFloat(tipButton.value) / 100);
        tipAmount.innerText = tip.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        totalAmt.innerText = (inputAmount + tip).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
    else {
        ResetFields;
        document.getElementById("amount").className = "error";
    }
}

function ResetFields() {
    billAmt.innerText = "";
    tipPercent.innerText = "";
    tip2Percent.innerText = "";
    tipAmount.innerText = "";
    totalAmt.innerText = "";
}
