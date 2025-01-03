// Price per kWh in Indian Rupees (₹)
const PRICE_PER_KWH = 7.5;

// Store energy usage values
let energyUsage = [];

// Handle form submission for energy usage
document.getElementById('energyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the energy usage input value
    const energyUsageInput = document.getElementById('energy_usage').value;

    // Validate the input
    if (energyUsageInput === '' || isNaN(energyUsageInput) || energyUsageInput < 0) {
        alert('Please enter a valid positive number for energy usage.');
        return;
    }

    // Add the energy usage to the array
    energyUsage.push(parseFloat(energyUsageInput));

    // Clear the input field
    document.getElementById('energy_usage').value = '';

    // Show a success message
    document.getElementById('result').innerText = 'Energy usage recorded successfully!';
});

// Calculate the monthly bill
document.getElementById('calculateBillBtn').addEventListener('click', function() {
    if (energyUsage.length === 0) {
        alert('No energy usage data available. Please enter some usage first.');
        return;
    }

    // Calculate total usage
    const totalUsage = energyUsage.reduce((total, usage) => total + usage, 0);
    const averageUsage = totalUsage / energyUsage.length;
    const monthlyUsage = averageUsage * 30; // Assume 30 days in a month
    const monthlyBill = monthlyUsage * PRICE_PER_KWH;

    // Display the calculated monthly bill
    document.getElementById('result').innerText = `Predicted Monthly Bill: ₹${monthlyBill.toFixed(2)}`;
});

// Display energy optimization tips
document.getElementById('getTipsBtn').addEventListener('click', function() {
    const tips = [
        "Switch to LED bulbs to save energy.",
        "Unplug devices when not in use.",
        "Use energy-efficient appliances.",
        "Install a programmable thermostat.",
        "Improve insulation to reduce heating/cooling costs."
    ];

    let tipsText = 'Energy Optimization Tips:\n';
    tips.forEach(tip => {
        tipsText += tip + '\n';
    });

    document.getElementById('result').innerText = tipsText;
});
