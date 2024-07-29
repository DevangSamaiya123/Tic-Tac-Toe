let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newButton = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerO , playerX

const winningSequence = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [6, 4, 2],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {//playerO

            box.innerText = "O";
            turnO = false;
        }
        else {//playerX
            box.innerText = "X";
            turnO = true;

        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

function checkWinner() {
    for (let sequence of winningSequence) {
        let pos1Val = boxes[sequence[0]].innerText;
        let pos2Val = boxes[sequence[1]].innerText;
        let pos3Val = boxes[sequence[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
};

resetButton.addEventListener("click", resetGame);
newButton.addEventListener("click", resetGame);
