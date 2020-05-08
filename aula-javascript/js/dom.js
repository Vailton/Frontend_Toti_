
var nome = 'Vailton'; //string
var pais = 'Guiné-Bissau'; //string
var profissao = 'Progamador e Designer Gráfico'; //string
var aluno = 'aluno e estudante FullStack pela Toti'; //string


function paragrafo() {
    const pp = document.querySelector("#primeiro")  
    pp.textContent = nome + " Carlitos Gomes";  

    const px = document.querySelector(".segundo")      
    px.textContent = "Nasceu em Bissau, capital da " + pais;  

    const py = document.querySelector(".terceiro") 
    py.textContent = "Atualmente é " + aluno;

    const pz = document.querySelector("#quarto") 
    pz.textContent = "Futuramento vai se tornar um " + profissao;
    
}

paragrafo();



//function inicializacao() {
    //console.log('carregando  a pagina')    
    //console.log('Meu nome é: ', nome);    
    //console.log('Minha idade é: ', idade);
    //console.log('Eeu sou aluno = ', aluno)
//} 

//function fazOutraCoisa() {
    //nome = "Carlitos"
    //let sobrenome = "Gomes"
    //console.log('Meu nome completo é: ', nome, sobrenome)
    //console.log('Daqui a dez anos terei: ', idade + 10)
//}

    //array - conjunto de elementos. 
    //const elementosP = document.getElementsByTagName("p");
    //console.log(elementosP);
   // console.log(elementosP[2]);


//inicializacao() ;  
//fazOutraCoisa();


    /*if (aluno == true) {
        console.log('Você é um aluno da Toti.');
    }
    else {
        console.log('Você não deve ser aluno! ', resultado);
    }
*/
