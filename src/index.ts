import './styles.css';

const billAmt = document.getElementById('billAmt');
const tipPercent = document.getElementById('tipPercent');
const tip2Percent = document.getElementById('tip2Percent');
const tipAmount = document.getElementById('tipAmount');
const totalAmt = document.getElementById('totalAmt');
const calculateTip = (a: number, b: number) => a * b;

const tipPercents = document.querySelectorAll('input[type="button"]');
tipPercents.forEach(b => b.addEventListener('click', handleClick));

function handleClick() {
    const t = this as HTMLButtonElement;
    tipPercents.forEach(tp => {
        (tp.id == t.id) ? tp.className = "btn btn-secondary" : tp.className = "btn btn-primary";
    });

    let inputAmount = parseFloat((<HTMLInputElement>document.getElementById("amount")).value);
    if (inputAmount > 0) {
        billAmt.innerText = inputAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        tipPercent.innerText = t.value;
        tip2Percent.innerText = 'You are tipping ' + t.value;
        let tip = calculateTip(inputAmount, parseFloat(t.value) / 100);
        tipAmount.innerText = tip.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        totalAmt.innerText = (inputAmount + tip).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
}
