function generateReceipt() {
    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;
    const dateTime = new Date().toLocaleString();

    // Set receipt details
    document.getElementById('date-time').innerText = dateTime;
    document.getElementById('customer-name').innerText = `Customer: ${name}`;
    document.getElementById('customer-age').innerText = `Age: ${age}`;
    document.getElementById('customer-phone').innerText = `Phone: ${phone}`;
    document.getElementById('customer-amount').innerText = `Total amount paid: ₹${amount}`;

    // Hide form and show receipt
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('receipt-container').style.display = 'block';
}

function printReceipt() {
    // Print the receipt twice
    window.print();
    setTimeout(() => {
        window.print();
    }, 1000);  // Add a delay to ensure the print dialog appears twice
}
