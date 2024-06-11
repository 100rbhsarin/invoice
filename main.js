function generateInvoice() {
    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;
    const date = new Date().toLocaleDateString();

    // Set invoice details
    document.getElementById('date').innerText = `Date: ${date}`;
    document.getElementById('customer-name').innerText = `Name: ${name}`;
    document.getElementById('customer-age').innerText = `Age: ${age}`;
    document.getElementById('customer-phone').innerText = `Phone Number: ${phone}`;
    document.getElementById('customer-amount').innerText = `Amount Paid: $${amount}`;

    // Hide form and show invoice
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('invoice-container').style.display = 'block';
}

function printInvoice() {
    // Print the invoice twice
    window.print();
    setTimeout(() => {
        window.print();
    }, 1000);  // Add a delay to ensure the print dialog appears twice
}
