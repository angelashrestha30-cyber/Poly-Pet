// Dynamic Greeting based on Time
function updateGreeting() {
    const hour = new Date().getHours();
    const welcome = document.getElementById('welcome-msg');
    
    if (hour < 12) welcome.innerText = "Good Morning, Learner! ☀️";
    else if (hour < 18) welcome.innerText = "Good Afternoon, Polyglot! ☕";
    else welcome.innerText = "Good Evening, Scholar! 🌙";
}

// World Clock System
const countryTimezones = {
    "china": "Asia/Shanghai",
    "germany": "Europe/Berlin",
    "japan": "Asia/Tokyo",
    "kenya": "Africa/Nairobi"
};

document.getElementById('country-search').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const country = this.value.toLowerCase().trim();
        if (countryTimezones[country]) {
            addClock(country, countryTimezones[country]);
            this.value = '';
        } else {
            alert("Country not found! Try China, Germany, or Japan.");
        }
    }
});

function addClock(name, zone) {
    const container = document.getElementById('clock-container');
    const clockDiv = document.createElement('div');
    clockDiv.className = 'mini-clock';
    
    setInterval(() => {
        const time = new Date().toLocaleTimeString('en-US', { timeZone: zone });
        clockDiv.innerHTML = `<strong>${name.toUpperCase()}</strong>: ${time}`;
    }, 1000);
    
    container.appendChild(clockDiv);
}

function updatePetName() {
    const newName = document.getElementById('pet-name').value;
    console.log(`Pet renamed to: ${newName}`);
    // Here you would typically save to LocalStorage
}

updateGreeting();
