function generateReceipt() {
    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;
    const dateTime = new Date().toLocaleString();

    // Set receipt details for both copies
    document.querySelectorAll('.date-time').forEach(el => el.innerText = dateTime);
    document.querySelectorAll('.customer-name').forEach(el => el.innerText = `Customer: ${name}`);
    document.querySelectorAll('.customer-age').forEach(el => el.innerText = `Age: ${age}`);
    document.querySelectorAll('.customer-phone').forEach(el => el.innerText = `Phone: ${phone}`);
    document.querySelectorAll('.customer-amount').forEach(el => el.innerText = `Total Amount paid: ₹${amount}`);

    // Hide form and show receipt
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('receipt-container').style.display = 'block';
}

function printReceipt() {
    // Print the receipts
    window.print();
}
