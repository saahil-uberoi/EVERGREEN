let imgSrc = [
    {
        pairId: 0,
        src:
            "../img/matching/Golden_Sun_Moth.jpg",
        name: "Golden Sun Moth",
        cd: "~/img/grassland/Goldern-Sun-Moth.png"
    },
    {
        pairId: 1,
        src:
            "../img/matching/EU_rabbit.jpg",
        name: "European Rabbit",
        cd: "~/img/grassland/European-rabbit.png"
    },
    {
        pairId: 2,
        src:
            "../img/matching/Striped_Legless_Lizard.jpg",
        name: "Striped Legless Lizard",
        cd: "~/img/grassland/Striped-Legless-Lizard.png"
    },
    {
        pairId: 3,
        src:
            "../img/matching/Hardhends.jpg",
        name: "Hardhends",
        cd: "../img/grassland/Hardheads.png"

    },
    {
        pairId: 4,
        src:
            "../img/matching/Growling_Grass_Frog.jpg",
        name: "Growling Grass Frog",
        cd: "../img/grassland/Growling-Grass-Frog.png"
    },
    {
        pairId: 5,
        src:
            "../img/matching/Australian_Painted_snipe.jpg",
        name: "Australian Painted-snipe",
        cd: "../img/grassland/Australian-Painted-snipe.png"
    },
    {
        pairId: 7,
        src:
            "../img/matching/Blackberry.jpg",
        name: "Blackberry",
        cd: "../img/grassland/Blackberry.png"
    },
    {
        pairId: 8,
        src:
            "../img/matching/Plains_wanderer.jpg",
        name: "Plains-wanderer",
        cd: "../img/grassland/Plains-wanderer.png"
    }
];

let playBtn = document.getElementById("play");
let chooseUserDiv = document.querySelector(".choose-username");
let imgsGrid = document.getElementById("images-grid");
let congratsDiv = document.getElementById("congrats-container");
let looseDiv = document.getElementById("loose-container");
let playAgainBtns = document.querySelectorAll(".play-again-btn");
let modeContainer = document.getElementById("mode-container");
let hardBtn = document.getElementById("hard-btn");
let easyBtn = document.getElementById("easy-btn");

let tries = 0;
let hardMode = false;

let imgDivArray = createGridContentArray(imgSrc);
let discoveredCards = [];
let currentUser = "";
let startTime;
let scoresController = scoreBarController("user-scores");

imgDivArray.forEach(targetCard => {
    targetCard.addEventListener("click", () => {
        if (isFlipped(targetCard)) {
            targetCard.classList.remove("flipped-cell");

            if (discoveredCards.length % 2 == 0) {
                discoveredCards.push(targetCard);
            } else {
                let lastCard = discoveredCards[discoveredCards.length - 1];
                tries++;
                if (areEqualCards(targetCard, lastCard)) {
                    discoveredCards.push(targetCard);
                    prompt(targetCard, lastCard);
                    

                    if (isGameEnd(discoveredCards, imgDivArray)) {
                        setTimeout(() => {
                            winGame(currentUser);
                        }, 300);
                        
                    }
                } else {
                    discoveredCards.pop();
                    setTimeout(() => {
                        lastCard.classList.add("flipped-cell");
                        targetCard.classList.add("flipped-cell");
                        if (hardMode) {
                            looseGame(currentUser);
                        }
                    }, 300);
                }
            }
        }
    });
});

playBtn.addEventListener("click", goToModePage);

document.addEventListener("keydown", event => {
    if (!chooseUserDiv.classList.contains("hide") && event.which === 13) {
        goToModePage();
    } else if (
        (!looseDiv.classList.contains("hide") ||
            !congratsDiv.classList.contains("hide")) &&
        event.which === 13
    ) {
        playAgain();
    }
});

for (let btn of playAgainBtns) {
    btn.addEventListener("click", playAgain);
}

easyBtn.addEventListener("click", () => {
    hardMode = false;
    startGame(currentUser);
});

hardBtn.addEventListener("click", () => {
    hardMode = true;
    startGame(currentUser);
});

/*--------------------------------------------------
-------------------- OBJECTS ---------------------
--------------------------------------------------*/

function scoreBarController(barId) {
    let scoresBar = document.getElementById(barId);

    return {
        getUser(username) {
            return document.querySelector(`[data-username=${username}]`);
        },

        hasUser(username) {
            let userContainer = this.getUser(username);
            return userContainer !== null;
        },

        createPlayingUser(username) {
            if (this.hasUser(username)) {
                let userContainer = this.getUser(username);
                userContainer.remove();
                userContainer.lastElementChild.textContent = "Currently playing...";
                scoresBar.insertAdjacentElement("afterbegin", userContainer);
            } else {
                let userContainer = createUserScoreDiv(username);
                if (scoresBar.childElementCount == 5) {
                    scoresBar.lastElementChild.remove();
                }
                scoresBar.insertAdjacentElement("afterbegin", userContainer);
            }
        },

        setUserTime(username, seconds) {
            if (this.hasUser(username)) {
                let userContainer = this.getUser(username);
                if (!hardMode) {
                    userContainer.lastElementChild.innerHTML =
                        `<i class="fas fa-stopwatch"></i> ${Math.floor(seconds)} seconds` +
                        ` <i class="fas fa-mouse-pointer"></i> ${tries} tries`;
                } else {
                    userContainer.lastElementChild.innerHTML = `<i class="fas fa-stopwatch"></i> ${Math.floor(
                        seconds
                    )} seconds (Hard Mode)`;
                }
            }
        },

        setUserLost(username) {
            let userContainer = this.getUser(username);
            userContainer.lastElementChild.innerHTML = `<p>Lost! - ${tries -
                1} pairs in a row! </p>`;
        }
    };
}

function createUserScoreDiv(username) {
    let container = document.createElement("div");
    container.setAttribute("data-username", username);
    container.innerHTML = `<h2>${username}</h2> <p>Currently playing...</p>`;
    return container;
}

/*--------------------------------------------------
----------------- USEFULL FUNCTIONS --------------
--------------------------------------------------*/


function goToModePage() {
    let username = document.getElementById("username").value;
    if (isValidUsername(username)) {
        currentUser = username.toLowerCase();
        modeContainer.classList.remove("hide");
        chooseUserDiv.classList.add("hide");
    } else {
        alert("Not a valid name");
    }
}

function playAgain() {
    currentUser = "";
    discoveredCards = [];
    tries = 0;
    unFlipCards(imgDivArray);

    looseDiv.classList.add("hide");
    congratsDiv.classList.add("hide");

    chooseUserDiv.classList.remove("hide");
    document.getElementById("username").value = "";
}

function startGame(username) {
    startTime = Date.now();
    scoresController.createPlayingUser(username);

    shuffle(imgDivArray);

    imgsGrid.innerHTML = "";
    imgDivArray.forEach(img => {
        imgsGrid.appendChild(img);
    });

    modeContainer.classList.add("hide");
    imgsGrid.classList.remove("hide");

    setTimeout(() => {
        flipCards(imgDivArray);
    }, 3000);
}

function isGameEnd(discoveredCards, cards) {
    return discoveredCards.length === cards.length;
}

function winGame(username) {
    let finalTimeSpan = document.getElementById("user-seconds");
    let totalSeconds = (Date.now() - startTime) / 1000;
    finalTimeSpan.textContent = `${Math.floor(totalSeconds)} seconds`;

    scoresController.setUserTime(username, totalSeconds);

    imgsGrid.classList.add("hide");
    congratsDiv.classList.remove("hide");
}

function looseGame(username) {
    let triesSpan = document.getElementById("tries-span");
    let triesInARow = tries - 1;
    scoresController.setUserLost(username);
    triesSpan.textContent = triesInARow;
    imgsGrid.classList.add("hide");
    looseDiv.classList.remove("hide");
}

function areEqualCards(card1, card2) {
    return card1.getAttribute("data-pair") === card2.getAttribute("data-pair");
}

function prompt(card1, card2) {
/*alert(card2.getAttribute("sName") + " discovered");*/
    const content = document.createElement('div');
    var name = card2.getAttribute("sName");
    var cd = card2.getAttribute("cd");
    Swal.fire({
        title: name + "!",
        /*imageUrl: '<a href="anylink.com" target="_blank" class="// I added a sprite image like spr3-wslogo">",*/
        })
}

function isValidUsername(name) {
    return name !== undefined && name.trim() !== "" && isNaN(name);
}

function isFlipped(card) {
    return card.classList.contains("flipped-cell");
}

function flipCards(cards) {
    cards.forEach(card => card.classList.add("flipped-cell"));
}

function unFlipCards(cards) {
    cards.forEach(card => card.classList.remove("flipped-cell"));
}

function createGridContentArray(imgs) {
    let doubled = doubleContent(imgSrc);
    return doubled.map(img => createImgDiv(img));
}

function createImgDiv(img) {
    let container = document.createElement("div");
    container.setAttribute("data-pair", img.pairId);
    container.setAttribute("sName", img.name);
    container.setAttribute("cd", img.cd);
    container.style.backgroundImage = `url(${img.src})`;
    container.setAttribute("height", '300px');
    container.setAttribute("width", "250px");
    container.classList.add("cell");
    
    return container;
}

function doubleContent(arr) {
    return arr.concat(arr);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// Placeholder fade
var usernameInput = document.getElementById("username");
var placeholder = document.getElementById("placeholder");

usernameInput.addEventListener("focusin", () => {
    if (usernameInput.value == "") {
        placeholder.style.opacity = "0";
    }
});

usernameInput.addEventListener("focusout", () => {
    if (usernameInput.value == "") {
        placeholder.style.opacity = "1";
    }
});

// Show responsive leaderboard
let scoreToggle = document.getElementById("score-toggle")
let scoreContainer = document.getElementById("score-container")

scoreToggle.addEventListener("click", () => {
    scoreContainer.classList.toggle("fade-toggle")
})