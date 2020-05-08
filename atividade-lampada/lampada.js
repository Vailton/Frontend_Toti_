function ligar() {

    //elemento imagem
    const lampada = document.querySelector(".lampada") 

    //trocar src para ligada
    lampada.src = "img/img/lampada-ligada.jpg";

    //trocar alt para ligada
    lampada.alt = "Lâmpada ligada"

    //pegar elemento button
    const botaoLigar = document.querySelector("#botao-ligar")

    //adicionar atributo disabled
    botaoLigar.disabled = true
    //pegar elemento button 
}   
