document.addEventListener("DOMContentLoaded", function() {
    let quizData = {
        sections: [
            {
                sectionTitle: "Indian History",
                questions: [
                    { question: "Who was the first President of India?", options: ["Dr. Rajendra Prasad", "Jawaharlal Nehru"], answer: "Dr. Rajendra Prasad" },
                    { question: "When did India gain independence?", options: ["1945", "1947"], answer: "1947" },
                    { question: "Who was known as the Iron Man of India?", options: ["Sardar Patel", "Subhas Chandra Bose"], answer: "Sardar Patel" },
                    { question: "Which movement was launched by Mahatma Gandhi in 1942?", options: ["Quit India Movement", "Non-Cooperation Movement"], answer: "Quit India Movement" },
                    { question: "Who was the founder of the Maurya Empire?", options: ["Chandragupta Maurya", "Ashoka"], answer: "Chandragupta Maurya" }
                ]
            },
            {
                sectionTitle: "General Knowledge",
                questions: [
                    { question: "What is the capital of Australia?", options: ["Sydney", "Canberra"], answer: "Canberra" },
                    { question: "Who is known as the 'Father of Computers'?", options: ["Charles Babbage", "Alan Turing"], answer: "Charles Babbage" },
                    { question: "Which is the largest ocean in the world?", options: ["Atlantic Ocean", "Pacific Ocean"], answer: "Pacific Ocean" },
                    { question: "How many continents are there?", options: ["6", "7"], answer: "7" },
                    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Jupiter"], answer: "Mars" }
                ]
            },
            {
                sectionTitle: "Science",
                questions: [
                    { question: "What is the chemical symbol for water?", options: ["H2O", "CO2"], answer: "H2O" },
                    { question: "Which gas is most abundant in Earth's atmosphere?", options: ["Nitrogen", "Oxygen"], answer: "Nitrogen" },
                    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Diamond"], answer: "Diamond" },
                    { question: "What part of the plant conducts photosynthesis?", options: ["Leaf", "Root"], answer: "Leaf" },
                    { question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury"], answer: "Mercury" }
                ]
            },
            {
                sectionTitle: "Mathematics",
                questions: [
                    { question: "What is 2 + 2?", options: ["4", "6"], answer: "4" },
                    { question: "What is the square root of 64?", options: ["8", "6"], answer: "8" },
                    { question: "If a triangle has sides of length 3, 4, and 5, what type of triangle is it?", options: ["Right-angled", "Equilateral"], answer: "Right-angled" },
                    { question: "What is 15% of 200?", options: ["30", "25"], answer: "30" },
                    { question: "If a car travels at 60 km/hr, how far does it go in 2 hours?", options: ["120 km", "100 km"], answer: "120 km" }
                ]
            },
            {
                sectionTitle: "Technology",
                questions: [
                    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Learning"], answer: "Hyper Text Markup Language" },
                    { question: "Which programming language is used for web development?", options: ["Python", "JavaScript"], answer: "JavaScript" },
                    { question: "What is the full form of CPU?", options: ["Central Processing Unit", "Computer Processing Unit"], answer: "Central Processing Unit" },
                    { question: "Which company developed Windows operating system?", options: ["Apple", "Microsoft"], answer: "Microsoft" },
                    { question: "What is the main function of an operating system?", options: ["Manage hardware and software", "Only store data"], answer: "Manage hardware and software" }
                ]
            }
        ]
    };
    
    function initSection() {
        let card_btn = document.querySelectorAll('.card-btn');
        card_btn.forEach((card) => {
            card.addEventListener("click", () => {
                let card_btn_number = parseInt(card.parentElement.getAttribute("data-section"));
                startQuiz(card_btn_number);
            });
        });
    }

    function startQuiz(index) {
        const currentQuestionBank = quizData.sections[index].questions;
        let currentQuestionIndex = 0;
        let score = 0;

        document.querySelector(".main-content").style.display = "none";
        document.querySelector(".question-container").style.display = "flex";
        document.querySelector(".question-container").innerHTML = `
            <div class="questions-content"></div>
            <div class="options">
                <ul></ul>
                <button class="next-btn">Next</button>
            </div>
        `;

        showQuestion();

        function showQuestion() {
            let question = currentQuestionBank[currentQuestionIndex];
            document.querySelector(".questions-content").textContent = question.question;
            let optionsElement = document.querySelector("ul");
            optionsElement.innerHTML = "";

            question.options.forEach(option => {
                const optionElement = document.createElement('li');
                optionElement.textContent = option;
                optionsElement.appendChild(optionElement);

                optionElement.addEventListener("click", function() {
                    if (option === question.answer) {
                        score++;
                    }
                    currentQuestionIndex++;
                    if (currentQuestionIndex < currentQuestionBank.length) {
                        showQuestion();
                    } else {
                        endQuiz();
                    }
                });
            });
        }

        function endQuiz() {
            document.querySelector(".question-container").innerHTML = `
                <h1>Quiz Completed</h1>
                <p>Your Final Score is: ${score}/${currentQuestionBank.length}</p>
                <button id="home-btn">Go To Home</button>
            `;
            document.getElementById("home-btn").addEventListener("click", function() {
                document.querySelector(".main-content").style.display = "";
                document.querySelector(".question-container").style.display = "none";
            });
        }
    }

    initSection();
}); 