

//var data = new Date();
//alert(data);


//function funcaoChange(elemento){
    //alert(elemento);
    //console.log(elemento.value);
//}

function clicou(){

    var nome = document.querySelector("#digite").value;
    var entrada = document.querySelector("#lista");
      
    var  liNovo = document.createElement("li");
    var txtNovo = document.createTextNode(nome);


    liNovo.appendChild(txtNovo);   
    entrada.appendChild(liNovo);

}
//
//



