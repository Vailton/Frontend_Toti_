var digiteTarefaInput = document.querySelector("#adicionar")
var botaoAdicionar = document.querySelector("#add-task-button")
var listaDeTarefas = document.querySelector(".task-list")

function adicionarTarefa(event) {  
    debugger
    if (digiteTarefaInput.value === ""){
        return;
    }
    const novoItem = document.createElement("li")
    const novoButton = document.createElement("button")    
    
    novoItem.textContent = digiteTarefaInput.value
    novoButton.className = botaoAdicionar.classList

    novoButton.classList.add("task-list__item") 
    novoItem.classList.add("task-list__item--done")    
    
    listaDeTarefas.appendChild(novoItem) 
    listaDeTarefas.appendChild(novoButton)
    
    digiteTarefaInput.value = ""   
    digiteTarefaInput.focus()

    function clique(){
        const botao = document.querySelector("#add-task-button")
        botao.addEventListener("click", clique) 
        botao.onclick = clique      
    }
    
    function duploClique(){
        const botao1 = document.querySelector("#add-task-button")       
        botao1.addEventListener("dblclick",duploClique)
        botao1.dblclick = duploClique

    }

    function digitou(){
        const botao2 = document.querySelector("#add-task-button")        
        botao2.addEventListener("keydown", digitou)
        botao3.keydown = digitou
    }

    
}

botaoAdicionar.addEventListener("click", adicionarTarefa)