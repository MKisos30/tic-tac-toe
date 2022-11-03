var playTurn;
var box1;
var counterClicked;
var boxes_ar;

function init() {
    createBoxes();
    resetGame();
    id_reset_btn.onclick = resetGame;
}

function resetGame() {
    playTurn = 1;
    counterClicked = 0; 

    for (var i = 0; i < boxes_ar.length; i++) {
        boxes_ar[i].resetBox;
    }
}

function createBoxes() {
    boxes_ar = [];
    for(var i = 0; i < 9; i++) {
        var box = new Box(i);
        boxes_ar.push(box);
    }
}

function Box(_id) {
    this.o_image = '../o.jpg';
    this.x_image = '../x.jpg';
    this.id = _id;
    this.figure = _id;

    var all_obj = this;
    var beenClicked = false;
    
    var newDiv = document.createElement('div');
    newDiv.className = 'box';
    id_blocks.appendChild(newDiv)
    //newDiv.innerHTML += this.id;
    
    var boximg = document.createElement('img');
    boximg.src = '';
    newDiv.appendChild(boximg);
    
    this.resetBox = function resetBox() {
        boximg.src = '';
        beenClicked = false;
    }

    newDiv.onclick = function() {
        if (beenClicked == false) {
            if (playTurn == 1) {
                boximg.src = all_obj.x_image;
                playTurn = 2;
                beenClicked = true;
                counterClicked ++
                all_obj.figure = 'x'
            } else {
                boximg.src = all_obj.o_image;
                playTurn = 1;
                beenClicked = true;
                counterClicked ++
                all_obj.figure = 'o'
            }
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

    if (whoWin == 'o') {
        alert('Player 2 win!')
        resetGame();
    } else if (whoWin == 'x') {
        alert('Player 1 win!')
        resetGame();
    }


}