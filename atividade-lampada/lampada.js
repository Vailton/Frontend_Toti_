
//function ligar() {
    // pegar elemento de imagem
    //const lampada = document.querySelector("#lampada")
    //trocar src para ligada
    //lampada.src = "img/lampada-ligada.jpg"
    //trocar alt para ligada
    //lampada.alt = "Lâmpada ligada"

    //pegar elemento button de ligar
    //const botaoLigar = document.querySelector("#botao-ligar")
    //adicionar atributo disabled
    //botaoLigar.disabled = true

    //pegar elemento button de desligar
    //const botaoDesligar = document.querySelector("#botao-desligar")
    //remover atributo disabled
   //botaoDesligar.disabled = false
//}

//function desligar() {
    // pegar elemento de imagem
    //const lampada = document.querySelector("#lampada")
    //trocar src para desligada
    //lampada.src = "img/lampada-desligada.jpg"
    //trocar alt para desligada
    //lampada.alt = "Lâmpada desligada"

    //pegar elemento button de ligar
    //const botaoLigar = document.querySelector("#botao-ligar")
    //remover atributo disabled
   //botaoLigar.disabled = false

    //pegar elemento button de desligar
    //const botaoDesligar = document.querySelector("#botao-desligar")
    //adicionar atributo disabled
    //botaoDesligar.disabled = true
//}


const lampada = document.querySelector("#lampada")

function interruptor(button){
    console.log("conteudo inteiro ", button)
    console.log("propriedade value", button.value)
    console.log("propriedade textContent", button.textContent)
    
    if (button.value === "ligar" ){        
        lampada.src = "img/lampada-ligada.jpg"
        lampada.alt = "lapada ligada"
        button.textContent = "Desligar"
        button.value = "desligar"
    }
    else if (button.value === "desligar"){        
        lampada.src = "img/lampada-desligada.jpg"
        lampada.alt = "lapada desligada"
        button.textContent = "Ligar"
        button.value = "ligar"
    }

    
    //console.log(button.value)
    //console.log(button.textContent)
}