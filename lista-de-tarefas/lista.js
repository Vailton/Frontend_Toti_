

//var data = new Date();
//alert(data);


//function funcaoChange(elemento){
    //alert(elemento);
    //console.log(elemento.value);
//}

function clicou(){

    var nome = document.querySelector("#digite").value;
    var entrada = document.querySelector("#lista");
      
    var  liNode = document.createElement("li");
    var txtNode = document.createTextNode(nome);


    liNode.appendChild(txtNode);   
    entrada.appendChild(liNode);
    

}
//
//



