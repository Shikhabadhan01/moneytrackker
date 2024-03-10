document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expenseForm');
    const incomeForm = document.getElementById('incomeForm');
    const expensesList = document.getElementById('expensesList');
    const incomesList = document.getElementById('incomesList');

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const expenseName = document.getElementById('expenseName').value;
        const expenseAmount = document.getElementById('expenseAmount').value;
        addExpense(expenseName, expenseAmount);
    });

    incomeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const incomeName = document.getElementById('incomeName').value;
        const incomeAmount = document.getElementById('incomeAmount').value;
        addIncome(incomeName, incomeAmount);
    });

    function addExpense(name, amount) {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <strong>${name}</strong>: $${amount}
        `;
        expensesList.appendChild(expenseItem);
    }

    function addIncome(name, amount) {
        const incomeItem = document.createElement('div');
        incomeItem.classList.add('income-item');
        incomeItem.innerHTML = `
            <strong>${name}</strong>: $${amount}
        `;
        incomesList.appendChild(incomeItem);
    }
});
