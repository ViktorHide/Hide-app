let balance = 5000; // Начальный баланс

function spendMoney() {
    let amount = document.getElementById("amount").value;
    amount = parseFloat(amount);
    
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        document.getElementById("balance").innerText = balance;
    } else {
        alert("Некорректная сумма");
    }
}
