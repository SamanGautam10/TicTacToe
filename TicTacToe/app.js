let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true; // player X, player O
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO == true) {
            box.innerText = "O";
            box.style.color = "#823215";
            turnO = false;
            box.disabled = true;
        } else {
            box.innerText = "X";
            box.style.color = "#158226"
            turnO = true;
            box.disabled = true;
        }

        checkWinner();
    });
});

const disableBtn = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const enableBtn = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = ""
    })
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                disableBtn();
                showWinner(pos1Val);
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `You Won! Winner - Player ${winner}`;
    msgContainer.classList.remove("hidden");
}

const resetGame = () => {
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hidden");
}

resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);

