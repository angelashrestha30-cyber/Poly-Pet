// ================= DOM READY =================
document.addEventListener("DOMContentLoaded", function () {

  // ================= SCROLLING =================
  window.scrollToSection = function(id){
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:"smooth"});
  }

  // ================= PET XP / LEVEL / STREAK =================
  let xp = localStorage.getItem("xp") ? parseInt(localStorage.getItem("xp")) : 0;
  let level = localStorage.getItem("level") ? parseInt(localStorage.getItem("level")) : 1;
  let streak = localStorage.getItem("streak") ? parseInt(localStorage.getItem("streak")) : 0;

  function updatePetUI(){
    document.getElementById("level").textContent = level;
    document.getElementById("streak").textContent = streak;
    document.getElementById("xp-fill").style.width = (xp % 100) + "%";
  }

  window.completeLesson = function(){
    xp += 20;
    streak += 1;
    if(xp >= level*100){
      level++;
      launchConfetti();
const state = {
  streak: Number(localStorage.getItem('pp_streak') || 3),
  xp: Number(localStorage.getItem('pp_xp') || 120),
  petName: localStorage.getItem('pp_pet_name') || 'Fable',
  selectedAvatar: localStorage.getItem('pp_avatar') || 'fox',
  clocks: JSON.parse(localStorage.getItem('pp_clocks') || '["United States","Japan"]'),
  tasks: JSON.parse(localStorage.getItem('pp_tasks') || '[]'),
  unlocked: JSON.parse(localStorage.getItem('pp_unlocked') || '["fox"]')
};

const countryToTZ = {
  'united states':'America/New_York', usa:'America/New_York', japan:'Asia/Tokyo', china:'Asia/Shanghai',
  germany:'Europe/Berlin', swahili:'Africa/Nairobi', kenya:'Africa/Nairobi', spain:'Europe/Madrid', france:'Europe/Paris',
  brazil:'America/Sao_Paulo', india:'Asia/Kolkata', mexico:'America/Mexico_City', uk:'Europe/London', 'united kingdom':'Europe/London'
};

const pets = [
  { id:'fox', icon:'🦊', name:'Fox', language:'Starter', unlockBy:'Default companion' },
  { id:'panda', icon:'🐼', name:'Panda', language:'Chinese', unlockBy:'Complete Chinese unit' },
  { id:'wolf', icon:'🐺', name:'Wolf', language:'German', unlockBy:'Complete German unit' },
  { id:'lion', icon:'🦁', name:'Lion', language:'Swahili', unlockBy:'Complete Swahili unit' },
  { id:'cat', icon:'🐱', name:'Cat', language:'Japanese', unlockBy:'Complete Japanese unit' }
];

const flashcards = [
  ['你好', 'Hello (Chinese)'], ['Danke', 'Thank you (German)'], ['Jambo', 'Hello (Swahili)'], ['ありがとう', 'Thank you (Japanese)']
];
let cardIndex = 0, cardFlipped = false;

const unitQuestions = Array.from({ length: 25 }, (_, i) => ({
  question: `Q${i + 1}. Select the best translation for phrase #${i + 1}.`,
  options: ['Correct option', 'Distractor A', 'Distractor B', 'Distractor C'],
  answer: 0,
  explanation: `Phrase #${i + 1} maps to the first option because it preserves tense and context.`
}));

function saveState() {
  localStorage.setItem('pp_streak', state.streak);
  localStorage.setItem('pp_xp', state.xp);
  localStorage.setItem('pp_pet_name', state.petName);
  localStorage.setItem('pp_avatar', state.selectedAvatar);
  localStorage.setItem('pp_clocks', JSON.stringify(state.clocks));
  localStorage.setItem('pp_tasks', JSON.stringify(state.tasks));
  localStorage.setItem('pp_unlocked', JSON.stringify(state.unlocked));
}

function getAvatarIcon(id) { return pets.find(p => p.id === id)?.icon || '🦊'; }

function renderHeader() {
  document.getElementById('streakValue').textContent = state.streak;
  document.getElementById('xpValue').textContent = state.xp;
  document.getElementById('petName').textContent = state.petName;
  document.getElementById('avatarDisplay').textContent = getAvatarIcon(state.selectedAvatar);

  const now = new Date();
  document.getElementById('userClock').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const hour = now.getHours();
  const greeting = hour < 12 ? 'Good morning!' : hour < 18 ? 'Good afternoon!' : 'Good evening!';
  document.getElementById('timeGreeting').textContent = `${greeting} ${state.petName}'s Trainer`;
  document.getElementById('petMessage').textContent = `Clever like a ${pets.find(p => p.id === state.selectedAvatar)?.name.toLowerCase() || 'fox'}, keep up the pawsome progress!`;
}

function renderAvatarPicker() {
  const select = document.getElementById('avatarSelect');
  select.innerHTML = '';
  pets.forEach(p => {
    if (state.unlocked.includes(p.id)) {
      const option = document.createElement('option');
      option.value = p.id;
      option.textContent = `${p.icon} ${p.name}`;
      if (p.id === state.selectedAvatar) option.selected = true;
      select.appendChild(option);
    }
    localStorage.setItem("xp",xp);
    localStorage.setItem("level",level);
    localStorage.setItem("streak",streak);
    updatePetUI();
  }
  updatePetUI();

  // ================= SCHEDULE FILTER =================
  window.filterSchedule = function(day){
    const events = document.querySelectorAll('.event');
    events.forEach(event=>{
      event.style.display = (day==="all" || event.classList.contains(day)) ? "block" : "none";
    });
  }

  // ================= INTERACTIVE CALENDAR =================
  window.scheduleLesson = function(){
    const date = document.getElementById("lesson-date").value;
    if(!date) return;
    const li = document.createElement("li");
    li.textContent = "Lesson scheduled for " + date;
    document.getElementById("lesson-list").appendChild(li);
  }

  // ================= FADE-IN SECTIONS =================
  const sections = document.querySelectorAll(".section");
  function fadeInSections(){
    sections.forEach(section=>{
      const top = section.getBoundingClientRect().top;
      if(top < window.innerHeight - 100){
        section.classList.add("visible");
      }
  });
}

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  state.tasks.sort((a, b) => a.time.localeCompare(b.time)).forEach((task, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${task.time} • ${task.title}</span>`;
    const done = document.createElement('button');
    done.textContent = 'Done +15XP';
    done.addEventListener('click', () => {
      state.tasks.splice(idx, 1);
      state.xp += 15;
      state.streak += 1;
      saveState();
      renderHeader();
      renderTasks();
    });
  }
  fadeInSections();
  window.addEventListener("scroll", fadeInSections);

  // ================= TIME GREETING =================
  function setGreeting(){
    const hour = new Date().getHours();
    let greeting = (hour<12) ? "Good Morning, Emma ☀️" :
                   (hour<18) ? "Good Afternoon, Emma 🌸" :
                   "Good Evening, Emma 🌙";
    document.getElementById("dynamicGreeting").textContent = greeting;
  }
  setGreeting();

  // ================= CONFETTI =================
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let confetti = [];

  function launchConfetti(){
    for(let i=0;i<100;i++){
      confetti.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height - canvas.height,
        size: Math.random()*6+4,
        speed: Math.random()*3+2
    li.appendChild(done);
    list.appendChild(li);
  });
}

function renderClocks() {
  const grid = document.getElementById('clockGrid');
  grid.innerHTML = '';
  state.clocks.forEach(country => {
    const tz = countryToTZ[country.toLowerCase()];
    const card = document.createElement('div');
    card.className = 'clock-item';
    if (!tz) {
      card.innerHTML = `<strong>${country}</strong><span>Timezone unavailable</span>`;
    } else {
      card.innerHTML = `<strong>${country}</strong><span>${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: tz })}</span><small>${tz}</small>`;
    }
    grid.appendChild(card);
  });
}

function renderFlashcard() {
  const card = document.getElementById('flashcard');
  card.textContent = cardFlipped ? flashcards[cardIndex][1] : flashcards[cardIndex][0];
}

function renderPetCollection() {
  const wrap = document.getElementById('petCollection');
  wrap.innerHTML = '';
  pets.forEach(p => {
    const unlocked = state.unlocked.includes(p.id);
    const card = document.createElement('div');
    card.className = `pet-card-item ${unlocked ? '' : 'locked'}`;
    card.innerHTML = `<span class="pet-icon">${p.icon}</span><strong>${p.name}</strong><p>${p.language}</p><small>${unlocked ? 'Unlocked' : p.unlockBy}</small>`;

    if (!unlocked && p.id !== 'fox') {
      const unlockBtn = document.createElement('button');
      unlockBtn.textContent = `Mark ${p.language} Learned`;
      unlockBtn.addEventListener('click', () => {
        state.unlocked.push(p.id);
        state.xp += 40;
        saveState();
        renderAvatarPicker();
        renderHeader();
        renderPetCollection();
      });
      card.appendChild(unlockBtn);
    }
    animateConfetti();
  }

  function animateConfetti(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    confetti.forEach(p=>{
      p.y += p.speed;
      ctx.fillStyle = "#ff7f7f";
      ctx.fillRect(p.x,p.y,p.size,p.size);
    });
    confetti = confetti.filter(p=>p.y < canvas.height);
    if(confetti.length>0) requestAnimationFrame(animateConfetti);
  }

  // ================= WORLD CLOCK =================
  let timezones = [
    { country: "Japan", code: "Asia/Tokyo", flag: "🇯🇵" },
    { country: "Spain", code: "Europe/Madrid", flag: "🇪🇸" },
    { country: "China", code: "Asia/Shanghai", flag: "🇨🇳" }
  ];

  function createSafeId(str){ return str.replace(/\//g,"-").replace(/\s/g,"").toLowerCase(); }

  function renderClocks(){
    const container = document.getElementById("clock-container");
    if(!container) return;
    container.innerHTML = "";
    timezones.forEach(tz=>{
      const id = createSafeId(tz.code);
      const box = document.createElement("div");
      box.classList.add("clock-box");
      box.innerHTML = `<h4>${tz.flag} ${tz.country}</h4><p id="${id}">--:--:--</p>`;
      container.appendChild(box);
    wrap.appendChild(card);
  });
}

function renderQuiz() {
  const container = document.getElementById('quizContainer');
  container.innerHTML = '';
  unitQuestions.forEach((q, i) => {
    const box = document.createElement('div');
    box.className = 'question';
    box.innerHTML = `<p>${q.question}</p>`;
    q.options.forEach((opt, oi) => {
      const id = `q-${i}-${oi}`;
      box.innerHTML += `<label for="${id}"><input id="${id}" type="radio" name="q-${i}" value="${oi}"> ${opt}</label><br>`;
    });
  }

  function updateWorldClocks(){
    const now = new Date();
    timezones.forEach(tz=>{
      const id = createSafeId(tz.code);
      const el = document.getElementById(id);
      if(el) el.textContent = now.toLocaleTimeString("en-US",{timeZone:tz.code});
    container.appendChild(box);
  });
}

function wireEvents() {
  document.getElementById('renamePetBtn').addEventListener('click', () => {
    const next = prompt('Rename your pet:', state.petName);
    if (next?.trim()) state.petName = next.trim();
    saveState();
    renderHeader();
  });

  document.getElementById('avatarSelect').addEventListener('change', (e) => {
    state.selectedAvatar = e.target.value;
    saveState();
    renderHeader();
  });

  document.getElementById('taskForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const titleEl = document.getElementById('taskTitle');
    const timeEl = document.getElementById('taskTime');
    state.tasks.push({ title: titleEl.value.trim(), time: timeEl.value });
    titleEl.value = '';
    timeEl.value = '';
    saveState();
    renderTasks();
  });

  document.getElementById('clockForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const countryEl = document.getElementById('countryInput');
    const errorEl = document.getElementById('clockError');
    const input = countryEl.value.trim();
    if (!input) return;
    if (!countryToTZ[input.toLowerCase()]) {
      errorEl.textContent = 'Sorry, timezone mapping not found for that country yet.';
      return;
    }
    errorEl.textContent = '';
    if (!state.clocks.includes(input)) state.clocks.push(input);
    countryEl.value = '';
    saveState();
    renderClocks();
  });

  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  }

  const addClockBtn = document.getElementById("add-clock-btn");
  if(addClockBtn){
    addClockBtn.addEventListener("click", ()=>{
      const countryInput = document.getElementById("new-country").value.trim();
      const tzInput = document.getElementById("new-tz").value.trim();
      if(!countryInput || !tzInput) return alert("Enter country and timezone");
      timezones.push({country:countryInput, code:tzInput, flag:"🌍"});
      document.getElementById("new-country").value="";
      document.getElementById("new-tz").value="";
      renderClocks();
  });

  document.getElementById('flipCardBtn').addEventListener('click', () => { cardFlipped = !cardFlipped; renderFlashcard(); });
  document.getElementById('nextCardBtn').addEventListener('click', () => { cardIndex = (cardIndex + 1) % flashcards.length; cardFlipped = false; renderFlashcard(); state.xp += 5; saveState(); renderHeader(); });

  document.getElementById('checkFillBtn').addEventListener('click', () => {
    const fillInputEl = document.getElementById('fillInput');
    const fillResultEl = document.getElementById('fillResult');
    fillResultEl.textContent = fillInputEl.value.trim().toLowerCase() === 'suis' ? '✅ Correct!' : '❌ Correct answer: suis';
  });

  const mc = document.getElementById('mcOptions');
  ['Thank you', 'Goodbye', 'Sorry', 'Welcome'].forEach((opt, i) => {
    const b = document.createElement('button');
    b.textContent = opt;
    b.addEventListener('click', () => document.getElementById('mcResult').textContent = i === 0 ? '✅ Nice work!' : '❌ Correct answer: Thank you');
    mc.appendChild(b);
  });

  document.getElementById('checkTranslationBtn').addEventListener('click', () => {
    const translationInputEl = document.getElementById('translationInput');
    const translationResultEl = document.getElementById('translationResult');
    const ok = translationInputEl.value.trim().toLowerCase().includes('cat sleeps');
    translationResultEl.textContent = ok ? '✅ Great translation!' : '❌ Suggested: The cat sleeps.';
  });

  const sentenceAnswer = 'Watashi wa gakusei desu';
  document.getElementById('sentencePrompt').textContent = 'desu / watashi / gakusei / wa';
  document.getElementById('checkSentenceBtn').addEventListener('click', () => {
    const sentenceInputEl = document.getElementById('sentenceInput');
    const sentenceResultEl = document.getElementById('sentenceResult');
    sentenceResultEl.textContent = sentenceInputEl.value.trim() === sentenceAnswer ? '✅ Perfect order!' : `❌ Correct: ${sentenceAnswer}`;
  });

  document.getElementById('submitQuizBtn').addEventListener('click', () => {
    let score = 0;
    const wrong = [];
    unitQuestions.forEach((q, i) => {
      const picked = document.querySelector(`input[name="q-${i}"]:checked`);
      if (picked && Number(picked.value) === q.answer) score += 1;
      else wrong.push({ i, q, picked: picked ? Number(picked.value) : null });
    });
  }

    let html = `<h3>Score: ${score}/25</h3>`;
    if (!wrong.length) html += '<p class="good">Excellent! All answers are correct.</p>';
    else {
      html += '<h4>Review for missed questions</h4>';
      wrong.forEach(w => {
        const pickedText = w.picked === null ? 'No answer selected' : w.q.options[w.picked];
        html += `<div class="review-item"><p><strong>Q${w.i + 1}</strong> • Your answer: ${pickedText}</p><p>Correct: ${w.q.options[w.q.answer]}</p><p>${w.q.explanation}</p></div>`;
      });
    }
    document.getElementById('quizResult').innerHTML = html;
  });
}

function init() {
  renderHeader();
  renderAvatarPicker();
  renderTasks();
  renderClocks();
  updateWorldClocks();
  setInterval(updateWorldClocks,1000);

  // ================= LANGUAGE / FLASHCARDS =================
  let flashcards = [
    {front:"Aunque", back:"Although"},
    {front:"Sin embargo", back:"However"},
    {front:"A pesar de", back:"Despite"},
    {front:"Lograr", back:"To achieve"},
    {front:"Desarrollar", back:"To develop"}
  ];
  let currentCard = 0;
  let flipped = false;

  window.loadSpanishLevel3 = function(){
    currentCard = 0;
    flipped = false;
    showCard();
  }

  function showCard(){
    const card = document.getElementById("flashcard");
    if(!card) return;
    card.textContent = flipped ? flashcards[currentCard].back : flashcards[currentCard].front;
  }

  window.flipCard = function(){
    flipped = !flipped;
    showCard();
  }

  window.nextCard = function(){
    currentCard = (currentCard+1)%flashcards.length;
    flipped = false;
    showCard();
  }

  // ================= PRACTICE MODE =================
  window.checkPractice = function(){
    const input = document.getElementById("practiceInput").value.toLowerCase();
    const result = document.getElementById("practiceResult");
    if(input==="aunque") result.textContent="✅ Correct!";
    else result.textContent="❌ Try again.";
  }

  // ================= UNIT TEST =================
  window.submitTest = function(){
    let score = 0;
    if(document.querySelector('input[name="q1"]:checked')?.value==="however") score++;
    if(document.querySelector('input[name="q2"]:checked')?.value==="achieve") score++;
    document.getElementById("testScore").textContent="Score: "+score+"/2";
  }

  // ================= RESOURCE TAB SWITCHING =================
  window.showResource = function(name){
    const sections = document.querySelectorAll(".resource-content");
    sections.forEach(sec => sec.style.display = "none");
    const target = document.getElementById(name);
    if(target) target.style.display = "block";
  }

  // show Video by default
  showResource("video");

});
  renderFlashcard();
  renderPetCollection();
  renderQuiz();
  wireEvents();
  setInterval(() => { renderHeader(); renderClocks(); }, 1000);
}

init();
