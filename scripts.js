let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#botoes-conteiners button")
let messsageContiner = document.querySelector("#mensagem")
let mensagem = document.querySelector("#mensagem p")
let secondPlayer;

let player1 = 0
let player2 = 0

for (let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("click", function () {

        let temp = identificarJogador(player1, player2)

        if (this.childNodes.length == 0) { // verificando se a box possui algum filho, para impossibilitar adcionar mais de um elemento na mesma box

            let cloneTemp = temp.cloneNode(true)
            this.appendChild(cloneTemp)

            /* computar jogada, alternar entre x e o*/
            if (player1 == player2) {
                player1++
            } else {
                player2++
            }

        }

        checarVitoria();


    })
}

function identificarJogador(player1, player2) {

    let temp;

    if (player1 == player2) {
        temp = x
    } else {
        temp = o
    }

    return temp
}

function checarVitoria() {

    let box1 = document.getElementById("block1")
    let box2 = document.getElementById("block2")
    let box3 = document.getElementById("block3")
    let box4 = document.getElementById("block4")
    let box5 = document.getElementById("block5")
    let box6 = document.getElementById("block6")
    let box7 = document.getElementById("block7")
    let box8 = document.getElementById("block8")
    let box9 = document.getElementById("block9")

    // horizonal

    if (box1.childNodes.length > 0 && box2.childNodes.length > 0 && box3.childNodes.length > 0) {

        let childbox1 = box1.childNodes[0].className;
        let childbox2 = box2.childNodes[0].className;
        let childbox3 = box3.childNodes[0].className;


        if (childbox1 == 'x' && childbox2 == 'x' && childbox3 == 'x') {
            console.log("x venceu")
        } else if (childbox1 == 'o' && childbox2 == 'o' && childbox3 == 'o') {
            console.log("o venceu")
        }
    }

    if (box4.childNodes.length > 0 && box5.childNodes.length > 0 && box6.childNodes.length > 0) {

        let childbox4 = box4.childNodes[0].className;
        let childbox5 = box5.childNodes[0].className;
        let childbox6 = box6.childNodes[0].className;


        if (childbox4 == 'x' && childbox5 == 'x' && childbox6 == 'x') {
            console.log("x venceu")
        } else if (childbox4 == 'o' && childbox5 == 'o' && childbox6 == 'o') {
            console.log("o venceu")
        }
    }

    if (box7.childNodes.length > 0 && box8.childNodes.length > 0 && box9.childNodes.length > 0) {

        let childbox7 = box7.childNodes[0].className;
        let childbox8 = box8.childNodes[0].className;
        let childbox9 = box9.childNodes[0].className;


        if (childbox7 == 'x' && childbox8 == 'x' && childbox9 == 'x') {
            console.log("x venceu")
        } else if (childbox7 == 'o' && childbox8 == 'o' && childbox9 == 'o') {
            console.log("o venceu")
        }
    }

    // vertical

    if (box1.childNodes.length > 0 && box4.childNodes.length > 0 && box7.childNodes.length > 0) {

        let childbox1 = box1.childNodes[0].className;
        let childbox4 = box4.childNodes[0].className;
        let childbox7 = box7.childNodes[0].className;


        if (childbox1 == 'x' && childbox4 == 'x' && childbox7 == 'x') {
            console.log("x venceu")
        } else if (childbox1 == 'o' && childbox4 == 'o' && childbox7 == 'o') {
            console.log("o venceu")
        }
    }

    if (box2.childNodes.length > 0 && box5.childNodes.length > 0 && box8.childNodes.length > 0) {

        let childbox2 = box2.childNodes[0].className;
        let childbox5 = box5.childNodes[0].className;
        let childbox8 = box8.childNodes[0].className;


        if (childbox2 == 'x' && childbox5 == 'x' && childbox8 == 'x') {
            console.log("x venceu")
        } else if (childbox2 == 'o' && childbox5 == 'o' && childbox8 == 'o') {
            console.log("o venceu")
        }
    }

    if (box3.childNodes.length > 0 && box6.childNodes.length > 0 && box9.childNodes.length > 0) {

        let childbox3 = box3.childNodes[0].className;
        let childbox6 = box6.childNodes[0].className;
        let childbox9 = box9.childNodes[0].className;


        if (childbox3 == 'x' && childbox6 == 'x' && childbox9 == 'x') {
            console.log("x venceu")
        } else if (childbox3 == 'o' && childbox6 == 'o' && childbox9 == 'o') {
            console.log("o venceu")
        }
    }

    // diagonal

    if (box1.childNodes.length > 0 && box5.childNodes.length > 0 && box9.childNodes.length > 0) {

        let childbox1 = box1.childNodes[0].className;
        let childbox5 = box5.childNodes[0].className;
        let childbox9 = box9.childNodes[0].className;


        if (childbox1 == 'x' && childbox5 == 'x' && childbox9 == 'x') {
            console.log("x venceu")
        } else if (childbox1 == 'o' && childbox5 == 'o' && childbox9 == 'o') {
            console.log("o venceu")
        }
    }

    if (box3.childNodes.length > 0 && box5.childNodes.length > 0 && box7.childNodes.length > 0) {

        let childbox3 = box3.childNodes[0].className;
        let childbox5 = box5.childNodes[0].className;
        let childbox7 = box7.childNodes[0].className;


        if (childbox3 == 'x' && childbox5 == 'x' && childbox7 == 'x') {
            console.log("x venceu")
        } else if (childbox3 == 'o' && childbox5 == 'o' && childbox7 == 'o') {
            console.log("o venceu")
        }
    }

    // deu velha

    let contador = 0;
    
    for (i = 0; i < boxes.length; i++) {
        

        if (boxes[i].childNodes[0] != undefined) {
            contador++
        }
        
        if(contador == 9){
            console.log("deu velha")
        }
    }
}