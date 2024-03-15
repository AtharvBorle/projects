const quizData = [
    {
        question: "What is the SI unit of force?",
        options: ["Newton", "Watt", "Joule", "Kilogram"],
        answer: "Newton"
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"],
        answer: "Alexander Graham Bell"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
        answer: "Mitochondria"
    },
    {
        question: "What is the capital of France?",
        options: ["London", "Madrid", "Paris", "Berlin"],
        answer: "Paris"
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    
    questionElement.textContent = quizData[currentQuestion].question;
    optionsElement.innerHTML = '';

    quizData[currentQuestion].options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectAnswer(option);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    // Remove "selected" class from all buttons
    const buttons = document.querySelectorAll('#options button');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });

    // Add "selected" class to the clicked button
    event.target.classList.add('selected');
}

function nextQuestion() {
    // Check if any option is selected
    const selectedOption = document.querySelector('.selected');
    if (selectedOption) {
        const selectedAnswer = selectedOption.textContent;
        if (selectedAnswer === quizData[currentQuestion].answer) {
            score++;
        }
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Your Score: ${score} out of ${quizData.length}`;
}

// Display the first question when the page loads
displayQuestion();
