function renderCardInfo() {
    const salary = document.getElementById('salary-area');
    const pay = document.getElementById('pay-area');
    const tax = document.getElementById('tax-area');

    const currSalary = '67,300';
    const currPay = '1,860.96';
    const currTax = calculateTax(currSalary, currPay);

    salary.textContent = `$${currSalary}`;
    pay.textContent = `$${currPay}`;
    tax.textContent = `${currTax}%`;
}

function calculateTax(salary, pay) {
    //I need to fix this as it didn't account for money taken out for insurance
    pay = pay.replace(',', '');
    salary = salary.replace(',', '');
    const yearlyTakeHome = parseInt(salary) - (parseInt(pay) * 26);
    const percentage = yearlyTakeHome / parseInt(salary);
    const taxAmount = percentage.toFixed(2) * 100;

    return taxAmount.toFixed(0);
}

function renderGraphValues() {
    const bars = document.getElementsByClassName('bar');
    const values = [
        160, 300, 240, 30, 540, 110, 420, 70, 490, 270,
        70, 460
    ];

    for (let i = 0; i < bars.length; i++) {
        const p = document.createElement('div');
        bars[i].style.height = `${values[i] / 2.9}px`;

        bars[i].addEventListener('mouseover', () => {
            bars[i].appendChild(p);
            p.textContent = `${values[i]}`;
            p.classList.add('move__up');
        });

        bars[i].addEventListener('mouseout', () => {
            bars[i].removeChild(p);
        });
    }
}

function mobileGraphs() {
    const mobileGraph1 = document.getElementsByClassName('mobile__bar1');
    const mobileGraph2 = document.getElementsByClassName('mobile__bar2');
    const values = [
        160, 300, 240, 30, 540, 110, 420, 70, 490, 270,
        70, 460
    ];

    for(let i = 0; i < 6; i++) {
        const p = document.createElement('div');
        mobileGraph1[i].style.height = `${values[i] / 2.9}px`;

        mobileGraph1[i].addEventListener('mouseover', () => {
            mobileGraph1[i].appendChild(p);
            p.textContent = `${values[i]}`;
            p.classList.add('move__up');
        });

        mobileGraph1[i].addEventListener('mouseout', () => {
            mobileGraph1[i].removeChild(p);
        });
    }

    for (let i = 0; i < 6; i++) {
        const p = document.createElement('div');
        mobileGraph2[i].style.height = `${values[i + 6] / 2.9}px`;

        mobileGraph2[i].addEventListener('mouseover', () => {
            mobileGraph2[i].appendChild(p);
            p.textContent = `${values[i + 6]}`;
            p.classList.add('move__up');
        });

        mobileGraph2[i].addEventListener('mouseout', () => {
            mobileGraph2[i].removeChild(p);
        });
    }
}
mobileGraphs();
renderGraphValues();
renderCardInfo();