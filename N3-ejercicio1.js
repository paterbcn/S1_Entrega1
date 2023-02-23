var Matriz=[]



function generador(){
    var array=""
    for(var i=0 ; i<=9; i++){
        array +=i
    }
    
    return(array) }   

function ComMatriz(){
    for (i=0 ; i<10 ;i++){
        Matriz.push(generador);
    }
    return Matriz


}

function mm (){
    generador();
    ComMatriz();
    for (var n of Matriz){
        console.log(n())
    }
}

mm()
