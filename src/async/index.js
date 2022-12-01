//El operador ternario consta de 3 partes: condición ? expresión1 : expresión2

var a = 5;
var b = 3;
var c = a > b ? "Es mayor" : "Es menor";
console.log(c);
//Si la condición después del símbolo igual (=) se cumple, 
//entonces se tendrá el valor: “Es mayor”, de lo contrario 
//tomará el valor: “Es menor”.


const fnAsync = () =>{
    return new Promise((resolve, reject) =>{
        (true) //se usó operador ternario y se está forzando con true que se cumpla la condición
            ? setTimeout(() => resolve('Async!!', 2000))
            : reject(new Error('Error!')); //arroja "error" en caso de que la condición sea false
    });
}

const anotherFn = async () => { //la palabra async es para el cuerpo de la función
    //la palabra await estará dentro de la lógica a implementar
    const something = await fnAsync(); //aquí nos está regresando una promesa
    console.log(something); //se imprime mientras se espera
    console.log('Hello!');
}

console.log('Before'); //al ser la primera orden con solo console.log, 'Before' se imprime primero
anotherFn();//es el segundo en llamar, pero aún así no se imprimen los console de su lógica y tarda 2 s en ser ejecutada
console.log('After'); //aparece justo después de 'Before' porque anotherFn() está esperando una promesa y aún así el programa no se detiene, sino que sigue y así tenemos 'After' de segundo al imprimir

/*La salida al correr con Run Code queda:
Before
After
Async!!
Hello!
*/