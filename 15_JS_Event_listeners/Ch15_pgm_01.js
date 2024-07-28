const container = document.getElementById('container');

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Create and append 1 to 100 numbers dynamically
for (let i = 1; i <= 100; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.className = 'number';
    numberDiv.textContent = i;

    // Set background color based on number type
    if (isPrime(i)) {
        numberDiv.style.backgroundColor = 'red';
    } else if (i % 2 === 0) {
        numberDiv.style.backgroundColor = 'green';
    } else {
        numberDiv.style.backgroundColor = 'yellow';
    }

    container.appendChild(numberDiv);
}
