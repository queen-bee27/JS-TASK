const earthWeightInput = document.getElementById('txt');
const planetSelect = document.getElementById('planet_calculation');
const calculateBtn = document.getElementById('btn');
const resultPara = document.getElementById('result');
const planetImage = document.getElementById('planet_image');

const planetGravity = {
    Mercury: 0.38,
    Venus: 0.91,
    Earth: 1,
    Mars: 0.38,
    Jupiter: 2.53,
    Saturn: 1.07,
    Uranus: 0.92,
    Neptune: 1.19
};

const planetImages = {
    Mercury: 'D:/javascript program/22_JS_project_1/images/mercury.png',
    Venus: 'D:/javascript program/22_JS_project_1/images/venus.png',
    Earth: 'D:/javascript program/22_JS_project_1/images/earth.png',
    Mars: 'D:/javascript program/22_JS_project_1/images/mars.png',
    Jupiter: 'D:/javascript program/22_JS_project_1/images/jupiter.png',
    Saturn: 'D:/javascript program/22_JS_project_1/images/saturn.png',
    Uranus: 'D:/javascript program/22_JS_project_1/images/uranus.png',
    Neptune: 'D:/javascript program/22_JS_project_1/images/neptune.png'
};
calculateBtn.addEventListener('click', () => {
    const earthWeight = parseFloat(earthWeightInput.value);
    const selectedPlanet = planetSelect.value;

    if (!isNaN(earthWeight) && selectedPlanet !== "Please select") {
        const planetGravityValue = planetGravity[selectedPlanet];
        const weightOnPlanet = earthWeight * planetGravityValue;
        resultPara.textContent = `Your weight on ${selectedPlanet} is ${weightOnPlanet.toFixed(2)} kg`;

        planetImage.src = planetImages[selectedPlanet];
        planetImage.style.display = 'block';
    } else {
        resultPara.textContent = 'Please enter a valid mass and select a planet.';
        planetImage.style.display = 'none';
    }
});

