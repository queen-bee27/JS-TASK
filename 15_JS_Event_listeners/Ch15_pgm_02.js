const keyCodeElement = document.getElementById('key-code');
const keyElement = document.getElementById('key');

document.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode;
    const key = event.key;

    keyCodeElement.textContent = keyCode;
    keyElement.textContent = `Key: ${key}`;
});
