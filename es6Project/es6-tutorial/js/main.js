import Mortgage from './mortgage';

var testObject;
var fruits = [];

for(let x = 0; x<5; x++){
    fruits.push(x);
}

var testObject = { fruits: fruits }

var reducer = (acumulator, currentVal) => acumulator + currentVal;

console.log(fruits.reduce(reducer));
console.log(testObject.fruits);


fruits.forEach((item, index, array) => {
    console.log("Fruits " + index + ": " + item);
})

document.getElementById('calcBtn').addEventListener('click', () => {
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    let mortgage = new Mortgage(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = mortgage.monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (rate / 12).toFixed(2);
    let html = "";
    mortgage.amortization.forEach((year, index) => html += `
        <tr>
            <td>${index + 1}</td>
            <td class="currency">${Math.round(year.principalY)}</td>
            <td class="stretch">
                <div class="flex">
                    <div class="bar principal"
                         style="flex:${year.principalY};-webkit-flex:${year.principalY}">
                    </div>
                    <div class="bar interest"
                         style="flex:${year.interestY};-webkit-flex:${year.interestY}">
                    </div>
                </div>
            </td>
            <td class="currency left">${Math.round(year.interestY)}</td>
            <td class="currency">${Math.round(year.balance)}</td>
        </tr>
    `);
    document.getElementById("amortization").innerHTML = html;
});