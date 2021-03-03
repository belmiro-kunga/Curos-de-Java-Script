/* Neste exemplo, x, yeoz são variáveis
var x = 5;
var y = 12;
var z = x + y;

document.getElementById("demo").innerHTML = " O valor de z é: "  + z;
*/
/*
Usando let e const (ES6)
let x = 23;
let y = 3;
let z = x + y;
document.getElementById("demo").innerHTML = " O valor de z é: "  + z;
*/

/*
const x = 32;
const y = 24;
const z = x + y;
document.getElementById("demo").innerHTML = " O valor de z é: "  + z;
*/
/*

var preco1 = 100;
var preco2 = 200;
var total = preco1 + preco2;
document.getElementById("demo").innerHTML = " O valor de total é: "  + total;
*/
/*
Erro ao declarar uma variavel
var 1numero =  12;
var = casa grande = 13;
var -casa = "grande";
*/

/*
forma corretra de declarar uma variavel
var caroNovoAmarelo = "toyta" ;
var caronovoamarelo = 'cala';
var caro_novo = 12;

*/


///////////// JavaScript Let /////////////////////

/*
Escopo global
var nomeDeCarro = "carro de lata";
minhaFuncao ()

function minhaFuncao(){
 document.getElementById("demo").innerHTML = "Este carro é mesmo de lata" + nomeDeCarro;
}
*/

/*
Escopo da Função
meuCarro()
function meuCarro(){
    var nomeDoCarro = " carro de lata ";
    document.getElementById("demo1").innerHTML = typeof  nomeDoCarro + " " + nomeDoCarro
}

document.getElementById("demo2").innerHTML = typeof nomeDoCarro;
*/
/*
var x = 10;
{
    var x = 2;
}
document.getElementById("demo1").innerHTML = x;
*/

/*
Variaveis de escopo
var x = 12;
 
{
    let x = 2;
}
document.getElementById("demo1").innerHTML = x;
*/


///////////// JavaScript const /////////////////////
/*
try {
    const PI = 3.1415;
    
}
catch (err){
    document.getElementById("demo1").innerHTML = err;

}
*/

/*
var x = 10;

{
   const x = 2;
}

document.getElementById("demo1").innerHTML = x;
*/
/*
const x;
x = 3;
document.getElementById("demo1").innerHTML = x;
*/
/*
 const carro = {marca: "fiat", model:12, cor: "banco"};

 carro.cor = "vermelho";
 carro.proprietario = "Belmiro";

 document.getElementById("demo1").innerHTML = "o dono do carro é o " + carro.proprietario;

 */
/*
try {
    const carro = {marca: "fiat", model:12, cor: "banco"};
    carro = {marca: "Toyota", model:12, cor: "banco"};
}
catch(err){
    document.getElementById("demo1").innerHTML = err
}

 */
/*
const carro = ["fiat ", "Volvo ", "BMW"];

 carro[0] = "Toyota";
 
 carro.push (" Audi");
 document.getElementById("demo1").innerHTML = carro;
 */
try {
    const carro = ["Saab", "Volvo", "BMW"];
    carro = ["Toyota", "Volvo", "Audi"];
  }
  catch (err) {
    document.getElementById("demo1").innerHTML = err;
  }