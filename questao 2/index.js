//fibonacchi

function pertenceSequencia(index) {
     let num1 = 0, num2 = 1, prox = 0;

     for( let i = 0; i <= index; i++ ) {
        prox = num1 + num2  
        num1 = num2
        num2 = prox
        console.log(prox)
        if( num2 === index) {
            return console.log(index, "Pertence a sequencia")
        }
     }
     console.log(index, "Não pertence a sequencia")
}

pertenceSequencia(1000)