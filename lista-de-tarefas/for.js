

const lista = document.querySelector("#lista")
const limiteInput = document.querySelector("#limete")
const botaoImprimir = document.querySelector("#imprimir")

function imprimeNumero(limite) {
    
    for(let contador = 0; contador <= limite; contador = contador + 1) {       
       if (contador === 4) {
           continue
        }
       // if(contador === 7){
        //    break
       // }
        const novoItem = document.createElement("li")
        novoItem.innerText = contador

        if(contador % 2 == 0){            
            novoItem.classList.add("par")    
        }
        else {
            novoItem.classList.add("impar")  
        }

        lista.appendChild(novoItem)   
    }          
}

function chamarImpressao(event) {
     lista.innerText = ""
     imprimeNumero(limite.value)     
} 

botaoImprimir.addEventListener("click", chamarImpressao)