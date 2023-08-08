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