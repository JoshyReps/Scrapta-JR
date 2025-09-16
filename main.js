function openSelection() {
    document.querySelector("#selection").classList.remove("hidden")
}

function closeSelection() {
    document.querySelector("#selection").classList.add("hidden")
}

function openButton (cl) {
    let x = document.querySelector(`.${cl}`);
    x.classList.remove("hidden");
}

function exitButton (cl) {
    let x = document.querySelector(`.${cl}`);
    x.classList.add("hidden");
}


function generateFact() {

    let facts = [
        "Estonia, Norway, and Iceland have the highest e-waste recycling rates in the world",
        "Currently, the amount of e-waste recycled globally prevents 15 million tonnes of carbon dioxide from being released into the environment",
        "Recycling one million laptops saves enough energy to power 3,600 homes annually",
        "Recycling one million mobile phones can recover 34kg of gold",
        "Irresponsible e-waste recycling causes around 25% of data breaches",
        "Recycling one tonne of circuit boards can contain 40 to 800 times more gold than can be mined from one tonne of ore",
        "Households produce more than 400,000 tonnes of e-waste each year"
    ];

    console.log(facts.length);


    let fact = facts[Math.floor(Math.random() * facts.length)]

    document.querySelector("#fact-h1").textContent = fact;
    genTextAnimation("fact-h1");
}




let eWastes = ["e-1", "e-2", "e-3", "e-4", "e-5", "f-1", "f-2", "f-3", "f-4", "f-5"];

let randomEWaste;
let isEWaste;

function randomEwaste() {

    let image = document.querySelector("#id-image");

    if(eWastes.length === 0) {
        document.querySelector("#id-h1").textContent = "You Won! 🎉"
        eWastes = ["e-1", "e-2", "e-3", "e-4", "e-5", "f-1", "f-2", "f-3", "f-4", "f-5"];
        document.querySelector(".id-image").classList.add("hidden");
        document.querySelector(".id-buttons").classList.add("hidden");
        return;
    }
    else if(eWastes.length === 9) {
        document.querySelector(".id-image").classList.remove("hidden");
        idScore = 1;
    }

    let i = Math.floor(Math.random() * eWastes.length);

    randomEWaste = eWastes[i];
    eWastes.splice(i, 1);
    
    isEWaste = (randomEWaste.slice(0, 1) === "e");

    image.setAttribute("src", `public/images/info-sections/quiz/identify/${randomEWaste}.png`)
}

randomEwaste();

function showGameOverlay(outcome) {
    const overlay = document.querySelector(`.game-overlay`);
    const img = overlay.querySelector("img");
    const src = `public/images/info-sections/quiz/${outcome}.gif`;

    if (outcome === "correct") overlay.style.backgroundColor = "#29ff344b"; 
    else  overlay.style.backgroundColor = "#ff29294b";
    

    img.setAttribute("src", "");
    img.setAttribute("src", src);

    overlay.classList.remove("hidden");
    setTimeout(() => {
        overlay.classList.add("hidden");
    }, 1800);
}


function identifyYes () {
    let correct = false;
    if(isEWaste) {
        showGameOverlay("correct")
        correct = true;
    }
    else {
        showGameOverlay("incorrect")
        eWastes = ["e-1", "e-2", "e-3", "e-4", "e-5", "f-1", "f-2", "f-3", "f-4", "f-5"];
    }
    setScore(correct, "id")
    randomEwaste();
}

function identifyNo () {
    let correct = false;
    if(!isEWaste) {
        showGameOverlay("correct")
        correct = true;
    }
    else {
        showGameOverlay("incorrect")
        eWastes = ["e-1", "e-2", "e-3", "e-4", "e-5", "f-1", "f-2", "f-3", "f-4", "f-5"];
    }
    setScore(correct, "id")
    randomEwaste();
}

function genTextAnimation(type) {
    let h1 = document.querySelector(`#${type}`);

    h1.classList.remove("rainbow");
    void h1.offsetWidth;
    h1.classList.add("rainbow");
}

function getDailyTip () {

    let tip = [
    "Turn off gadgets when not in use to save energy.",
    "Use your phone or tablet until it really needs replacing.",
    "Donate old working gadgets to others who need them.",
    "Ask parents before throwing away electronics.",
    "Keep old batteries separate, don’t mix with trash.",
    "Take broken electronics to an e-waste drop-off center.",
    "Reuse chargers and cables instead of buying new ones.",
    "Don’t play with broken electronics, they can be unsafe.",
    "Turn down screen brightness to save battery life.",
    "Share devices with family instead of buying more.",
    "Recycle old toys that need batteries the right way.",
    "Don’t throw phones or laptops in the garbage bin.",
    "Keep gadgets clean so they last longer.",
    "Store old electronics safely until they can be recycled.",
    "Ask your school if they have e-waste collection days.",
    "Use rechargeable batteries instead of single-use ones.",
    "Print less and save paper by using digital notes.",
    "Fix simple problems instead of buying a new device.",
    "Unplug chargers when not charging to save power.",
    "Learn about the 3Rs: Reduce, Reuse, Recycle electronics!"
    ];


    let daily = tip[Math.floor(Math.random() * tip.length)]

    document.querySelector("#tip-h1").textContent = daily;
    genTextAnimation("tip-h1");
}

let quiz;
let quizScore = 0;
let quizes = [
    {
        question: "What does E-waste mean?",
        a: "A. Old or broken electronics",
        b: "B. Plastic bottles",
        c: "C. Food leftovers",
        d: "D. Old clothes",
        answer: "a"
    },
    {
        question: "Which of these is an example of e-waste?",
        a: "A. Plastic",
        b: "B. Banana peel",
        c: "C. Paper notebook",
        d: "D. Old phone",
        answer: "d"
    },
    {
        question: "Why is e-waste dangerous?",
        a: "A. It smells bad",
        b: "B. It is too Heavy",
        c: "C. It has toxic chemicals",
        d: "D. It looks dirty",
        answer: "c"
    },
    {
        question: "Which is part of the 3Rs?",
        a: "A. Rest",
        b: "B. Run",
        c: "C. Ride",
        d: "D. Reduce",
        answer: "d"
    },
    {
        question: "What can we do instead of throwing a working phone?",
        a: "A. Throw it away",
        b: "B. Donate or reuse it",
        c: "C. Hide it",
        d: "D. Break it",
        answer: "b"
    },
    {
        question: "Which is a BIG type of e-waste?",
        a: "A. Cardboard",
        b: "B. Candy wrapper",
        c: "C. Refrigerator",
        d: "D. Notebook",
        answer: "c"
    },
    {
        question: "What happens if batteries are thrown in the trash?",
        a: "A. Nothing happens",
        b: "B. They can leak harmful chemicals",
        c: "C. They turn into gold",
        d: "D. They become toys",
        answer: "b"
    },
    {
        question: "Who is Alex Lin?",
        a: "A. A kid who recycled e-waste",
        b: "B. A video game character",
        c: "C. A teacher",
        d: "D. A superhero in movies",
        answer: "a"
    },
    {
        question: "What should you do with broken gadgets?",
        a: "A. Play with them",
        b: "B. Recycle them properly",
        c: "C. Throw them in regular trash",
        d: "D. Burn them",
        answer: "b"
    },
    {
        question: "Why is recycling e-waste good?",
        a: "A. It saves gold and materials",
        b: "B. It makes more trash",
        c: "C. It makes gadgets disappear",
        d: "D. It is fun to do",
        answer: "a"
    }
];

let quizTemp = [...quizes];

function getRandomQuiz() {

    if(quizTemp.length === 0) {
        document.querySelector("#quiz-question").textContent = "You Won! 🎉"
        document.querySelector(".quiz-btns").classList.add("hidden");
    }

    let i = Math.floor(Math.random() * quizTemp.length)
    quiz = quizTemp[i];
    quizTemp.splice(i, 1);
    console.log(quizTemp);
    document.querySelector("#quiz-question").textContent = quiz.question;

    const letters = ["a","b","c","d"];

    letters.forEach(e => {
        document.querySelector(`.q-${e}`).textContent = quiz[e];
    })
}

getRandomQuiz();

let idScore = 0;

function setScore (add, type) {
    if(type === "quiz") {
        quizScore = (add) ? quizScore + 1 : 0;
        document.querySelector("#quiz-score").textContent = `Score : ${quizScore}`;
    }
    else {
        idScore = (add) ? idScore + 1 : 0;
        document.querySelector("#id-score").textContent = `Score : ${idScore}`;
    }
}

function getAnswer(letter) {
    let correct = false;
    if(letter === quiz.answer) {
        correct = true;
        showGameOverlay("correct")
    }
    else {
        quizTemp = [...quizes];
        showGameOverlay("incorrect")
    }
    
    setScore(correct, "quiz")
    getRandomQuiz();
}