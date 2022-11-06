let playTurn;
let counterClicked;
let gameDone = false
const boxes_ar = [];

const id_blocks = document.getElementById("id_blocks")
const id_reset_btn = document.getElementById("id_reset_btn")

id_reset_btn.onclick = resetGame;

function resetGame() {
    playTurn = 1;
    counterClicked = 0;
    location.reload();
}

for (var i = 0; i < 9; i++) {
    var box = new Box(i);
    boxes_ar.push(box);
}

function Box(_id) {
    const o_image = '../img/o.jpg';
    const x_image = '../img/x.jpg';

    this.id = _id;
    this.figure = _id;

    let all_obj = this;
    let beenClicked = false;
    
    const newDiv = document.createElement('div');
    newDiv.className = 'box';
    newDiv.setAttribute("id", _id)
    id_blocks.appendChild(newDiv)
    
    const boximg = document.createElement('img');
    

    newDiv.onclick = function() {
        if (beenClicked == false) {
            if (playTurn == 1) {
                boximg.src = o_image
                playTurn = 2;
                all_obj.figure = 'x'
            } else {
                boximg.src = x_image
                playTurn = 1;
                all_obj.figure = 'o'
            }
            beenClicked = true;
            newDiv.appendChild(boximg);
            ++counterClicked;
            checkWinCombo();
        }

        if (counterClicked >= 9) {
            alert('Game over')
        }
    }
}


function checkWinCombo() {

    var whoWin;

    if (boxes_ar[0].figure == boxes_ar[1].figure && boxes_ar[1].figure == boxes_ar[2].figure) {
        whoWin = boxes_ar[0].figure;
    }
    if (boxes_ar[3].figure == boxes_ar[4].figure && boxes_ar[4].figure == boxes_ar[5].figure) {
        whoWin = boxes_ar[3].figure;
    }
    if (boxes_ar[6].figure == boxes_ar[7].figure && boxes_ar[7].figure == boxes_ar[8].figure) {
        whoWin = boxes_ar[6].figure;
    }
    if (boxes_ar[0].figure == boxes_ar[3].figure && boxes_ar[3].figure == boxes_ar[6].figure) {
        whoWin = boxes_ar[0].figure;
    }
    if (boxes_ar[1].figure == boxes_ar[4].figure && boxes_ar[4].figure == boxes_ar[7].figure) {
        whoWin = boxes_ar[1].figure;
    }
    if (boxes_ar[2].figure == boxes_ar[5].figure && boxes_ar[5].figure == boxes_ar[8].figure) {
        whoWin = boxes_ar[2].figure;
    }
    if (boxes_ar[0].figure == boxes_ar[4].figure && boxes_ar[4].figure == boxes_ar[8].figure) {
        whoWin = boxes_ar[0].figure;
    }
    if (boxes_ar[2].figure == boxes_ar[4].figure && boxes_ar[4].figure == boxes_ar[6].figure) {
        whoWin = boxes_ar[2].figure;
    }

    setTimeout(() => {
        if (whoWin == 'o') {
                alert('Player 2 win!')
                gameDone = true;
                resetGame();
        } else if (whoWin == 'x') {
            alert('Player 1 win!');
            gameDone = true;
            resetGame();
        }
    }, 300)
}