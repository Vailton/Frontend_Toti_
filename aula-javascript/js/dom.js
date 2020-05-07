
let nome = "Vailton"; //string
let idade = 29; //number
const aluno = true; //boolean


function inicializacao() {
    console.log('carregando  a pagina')    
    console.log('Meu nome é: ', nome);    
    console.log('Minha idade é: ', idade);
    console.log('Eeu sou aluno = ', aluno)
} 

function fazOutraCoisa() {
    let sobrenome = "Carlitos Gomes"
    console.log('Meu nome completo é: ', nome, sobrenome)
    console.log('Daqui a dez anos terei: ', idade + 10)
}

function paragrafo() {
    //array - conjunto de elementos. 
    const pp = document.querySelector (".idade");
    console.log('Eu sou', nome, 'e tenho:', idade,'anos de idade', 'e sou aluno da Toti ', aluno);
    console.log()
}

inicializacao() ;  
fazOutraCoisa();
paragrafo();

/*
    if (aluno == true) {
        console.log('Você é um aluno da Toti.');
    }
    else {
        console.log('Você não deve ser aluno! ', resultado);
    }

*/