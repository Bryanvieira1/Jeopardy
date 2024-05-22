// insert questions and answers below
let body = document.getElementById("body");
let categories = ['Historical Actors', 'Persons Case', 'Accomplishments'];
let questions = {
    'Historical Actors': [
        'Who was passionate about divorce, pensions, and prison reform laws?<br><br> <b> a) <b> Elsie MacGill b) Rose-Anne Vachon c) Anna Dexter d) Agnes Macphail',
     
        'True or False, Lizzie Cyr was found guilty of Vagrancy?',
        
        'True or False, Emily Murphy was appointed the first Senator by the Liberal Government?',
        
        'Who in the Supreme Court was against women becoming persons?',
        
        'What is the full name of Lizzie Cyrs lawyer?',
        
        'Who said this quote, "Womens are persons... and eligible to be summoned and may become members of the Senate of Canada"?',
        
        'What Governor General took part in the unveiling of the Womans Are Persons Monument?<br><br> <b>a) Cairine Wilson b) Rene Levesave c) Adrienne Clarkson d) June Callwood',
        
        'What city was Nellie McClung in during 1928?'
    ],
    'Persons Case': [
        'What woman was a leading cause for the Persons Case?<br><br> <b>a) Agnes Macphail b) Florence Bird c) Mariah Carey d) Bertha Wilson',
        
        'Who was the judge of the Lizzie Cyr case?<br><br> <b>a) John Mckinley Cameron b) John Sankey c) Alice Jamieson d) Irene Parbly',
        
        'What year did women gain the right to vote in Canada?',
        
        'Why exactly did Lizzies Cyrs lawyer appeal the judges decision?',
        
        'When did The Famous Five send their letter to the Governor-General in Council?<br><br> <b>a) January 13th, 1926 b) November 23rd, 1926 c) March 2nd, 1927 d) August 27th, 1927',

        'What does the acronym (WCTU) stand for?',
        
         'What city is the "Womens Are Persons Monument" located?',
        
         'Agnes Macphail was the only woman to be elected to the House of Commons in the election of 1921, how many years was she re-elected?<br><br> <b>a) 7 years b) 12 years c) 16 years d) 19 years'

    ],
    'Accomplishments': [
        'Fill in the blank: The Federal _______ Act reformed to permit women the same right to divorce as a man',
        
        'In what year was the first female City Councilor elected in Toronto?<br><br> <b>a) 1917 b) 1922 c) 1920 d) 1924',
        
        'Phyllis Munday and Annette Buck were the first women to reach the highest peak of what mountain?',
        
        'Who was the first woman in Canada to earn an architectural degree?<br><br> <b>a) Constance Hamilton b) Emily Murphy c) Lizzie Cyr d) Esther Marjorie Hill',
        
        'Anna Dexter became Canadas first radio broadcaster in what year?',
        
        'What province passed the first Maternity Leave Legislation?',
        
        'Fill in the blank. Dr. Allie Vibert Douglas became the first woman in Canada to graduate with a PhD in ________',
        
        'In the year 1929, what percent of young women were attending high school?<br><br> <b>a) 21% b) 23% c) 25% d) 31%'
    ]
};

let answers = {
    'Historical Actors': ['<b>d) Agnes Macphail<b>', '<b>True', '<b>False', '<b>Rideau Hall','<b>John Mckinley Cameron','<b>Lord Chancellor John, Sankey','<b>c) Adrienne Clarkson','<b>Calgary'],
    
    'Persons Case': ['<b>a) Agnes Macphail', '<b>c) Alice Jamieson', '<b>1919', '<b>The lawyer belived the judge was "incompetent and incapable" of holding the high office ', '<b>d) August 27th, 1927','<b>Womens Christian Temperance Union','<b>Ottawa','<b>d) 19 years'],
    
    'Accomplishments': ['<b>Divorce', '<b> c) 1920', '<b>Mt. Robson', '<b> d)Esther Marjorie Hill','<b>1928', '<b>British Columbia','<b>Astrophysics','<b> c) 25%']
};

let currentCategory = '';
let currentQuestion = '';

// Function to set up categories and questions
function setupCategoriesAndQuestions() {
    // Get the game screen element
    const gameScreen = document.getElementById('game-screen');
    // Create categories container
    const categoriesContainer = document.createElement('div');
    categoriesContainer.id = 'categories';
    // Append categories container to game screen
    gameScreen.appendChild(categoriesContainer);
    // Loop through categories to create buttons and amounts
    categories.forEach(category => {
        // Create category container
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');
        // Create category button
        const categoryBtn = document.createElement('button');
        categoryBtn.textContent = category;
        categoryBtn.classList.add('category-btn');
        // Add click event to show questions for the category
      
        // Append category button to category container
        categoryContainer.appendChild(categoryBtn);
        // Append category container to categories container
        categoriesContainer.appendChild(categoryContainer);

        // Create amounts for the category
        questions[category].forEach((question, index) => {
            const amountBtn = document.createElement('button');
            amountBtn.textContent = `${(index + 1) * 200}`;
            amountBtn.classList.add('amount-btn');
            // Add click event to show question
            amountBtn.addEventListener('click', () => {
                amountBtn.style.backgroundColor = '#00008b';
                console.log("Boughdogs4life")
                showQuestion(question);
            });
            // Append amount button to category container
            categoryContainer.appendChild(amountBtn);
        });
    });
}

// Add event listener for play button
document.getElementById('play-btn').addEventListener('click', () => {
    
    // Switch to team screen
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('team-screen').style.display = 'block';
     document.getElementById('btn4').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('game-screen').style.display = 'none';
    body.style.marginTop = '0';
     
    
    playLoopedAudio();
    

    // Set up categories and questions
    setupCategoriesAndQuestions();
});
document.getElementById('enter-btn').addEventListener('click', () => {
    // Switch to game screen

     document.getElementById('game-screen').style.display = 'block';
     document.getElementById('start-screen').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
     document.getElementById('btn3').style.display = 'none';
    document.getElementById('btn4').style.display = 'block';
     document.getElementById('teamNameInput').style.display = 'none';
    document.getElementById('enter-btn').style.display = 'none';
    btn.style.display = 'none';
    const box = document.getElementById('enter-btn');
    box.style.display = 'block';
    
    // Show the hidden div
    //createteam

    playLoopedAudio();


    // Set up categories and questions
    setupCategoriesAndQuestions();
});
// Function to show questions for a category
function showQuestions(category) {
    // Store the current category
    currentCategory = category;
    // Hide game screen and show question screen
    document.getElementById('game-screen').style.display = 'none';
    // Show the questions under the selected category
    document.querySelectorAll('#game-screen > div').forEach(div => {
        if (div.textContent === category) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });
}

// Function to show question
function showQuestion(question) {
    // Store the current question
    currentQuestion = question;
    // Hide game screen and show question screen
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('question-screen').style.display = 'block';
    // Display the current question
    document.getElementById('question').innerHTML = question;
}

// Function to show answer
function showAnswer(question) {
    // Hide question screen and show answer screen
    document.getElementById('question-screen').style.display = 'none';
    document.getElementById('answer-screen').style.display = 'block';
    // Look up the answer for the current question
    let answer;
    Object.entries(questions).forEach(([category, questionsArray]) => {
        questionsArray.forEach(q => {
            if (q === question) {
                answer = answers[category][questionsArray.indexOf(q)];
            }
        });
    });
    // Display the answer
    document.getElementById('answer').innerHTML = answer;
}

// Add event listener for show answer button
document.getElementById('show-answer-btn').addEventListener('click', () => {
    // Show the answer for the current question
    showAnswer(currentQuestion);
});

// Add event listener for back to game button from answer screen
document.getElementById('back-to-game-btn').addEventListener('click', () => {
    // Switch back to game screen from answer screen
    document.getElementById('answer-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
});

// Add event listener for back button in instructions screen
document.getElementById('back-btn').addEventListener('click', () => {
    // Switch back to start screen from instructions screen
    document.getElementById('instructions-screen').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
});

// Add event listener for instructions button
document.getElementById('instructions-btn').addEventListener('click', () => {
    // Hide start screen and show instructions screen
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('instructions-screen').style.display = 'block';
});
const audio = new Audio("JP1.mp3");

function playLoopedAudio() {
    audio.play();
    setTimeout(playLoopedAudio, 10); // Adjust the delay (in milliseconds) as needed
}
let teams = [];

class Team {
    constructor(name) {
        this.name = name;
        this.points = 0;
    }

    addPoints(points) {
        this.points += points;
    }

    toString() {
        return `Team ${this.name} has ${this.points} points`;
    }
}

function createTeam() {
    let teamNameInput = document.getElementById("teamNameInput");
    let teamName = teamNameInput.value;
    if (teamName) {
        teams.push(new Team(teamName));
        teamNameInput.value = ""; // Clear the input box
        displayTeams();
    }
}

function displayTeams() {
    let teamList = document.getElementById("team-list");
    teamList.innerHTML = ""; // Clear the current list
    teams.forEach((team, index) => {
        let teamItem = document.createElement("div");
        teamItem.className = "team-item";
        teamItem.textContent = `${index + 1}. ${team.name}`;
        teamList.appendChild(teamItem);
    });
}
function addPointsToTeam() {
    let teamName = prompt("Enter the team name to add points to:");
    let points = parseInt(prompt("Enter the number of points to add:"), 10);
    let team = teams.find(t => t.name === teamName );
    if (team) {
        team.addPoints(points);
        alert(`Added ${points} points to ${teamName}.`);
    } else {
        alert(`Team ${teamName} not found.`);
    } 
    let output = teams.map(team => team.toString()).join('<br>');
    document.getElementById('output').innerHTML = output;
}



// Existing game logic here
