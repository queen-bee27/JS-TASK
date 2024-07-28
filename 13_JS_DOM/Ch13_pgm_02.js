// Change year color every 1 second
const yearElement = document.getElementById('year');
const dateTimeElement = document.getElementById('date-time');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeYearColor() {
    yearElement.style.color = getRandomColor();
}

function changeDateTimeBackgroundColor() {
    dateTimeElement.style.backgroundColor = getRandomColor();
}

setInterval(changeYearColor, 1000);
setInterval(changeDateTimeBackgroundColor, 1000);

// Apply styles to list items based on their status
const listItems = document.querySelectorAll('ul li');

listItems.forEach(item => {
    if (item.classList.contains('completed')) {
        item.style.backgroundColor = 'green';
    } else if (item.classList.contains('ongoing')) {
        item.style.backgroundColor = 'yellow';
    } else if (item.classList.contains('coming')) {
        item.style.backgroundColor = 'red';
    }
});
