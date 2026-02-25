/* parte 1

console.log('hello, JS!')

//declaracao de variaveis
//const let var
//--------------------------------------------------------------------------------

const nome = 'jose'
console.log(nome)
//nome = 'jose da silva'  nao pode pois é const

//--------------------------------------------------------------------------------

let nome2 = 'maria'
console.log(nome2)
nome2 = `meu nome é ${nome2}` //com let pode ser reatribuida
console.log(nome2)
//se let for declarado dentro de um bloco, ele so pode ser acessado dentro desse bloco, ou seja, tem escopo de bloco

for (let i = 0; i < 5; i++) {
    console.log(i)
}

//--------------------------------------------------------------------------------

//var tem escopo global, ou seja, pode ser acessada de qualquer lugar do codigo, mesmo antes de ser declarada, mas isso pode causar problemas, por isso é melhor evitar usar var

//var permite hoisting(ruim), ou seja, a variavel pode ser usada antes de ser declarada, mas isso pode causar problemas, por isso é melhor evitar usar var (içamento)
var linguagem = 'javascript'
console.log(`a linguagem e ${linguagem}`)
var linguagem = 'python'
console.log(`a linguagem e ${linguagem}`) //var pode ser redeclarada e reatribuida, mas é melhor evitar usar var  

var idade = 18
console.log(`Oi, ${nome3}`) //variavel nome3 nao foi declarada, mas por causa do var, ela é criada como undefined, e nao da erro de variavel nao declarada

//ex de içamento
if (idade >= 18) {
    var nome3 = 'joao'
    console.log(`Oi, ${nome3}, voce tem ${idade} anos, e pode entrar na festa!`)
}
console.log(`ate logo, ${nome3}`) //variavel nome3 foi criada dentro do if, mas por causa do var, ela é criada como global, e pode ser acessada fora do if, mas isso pode causar problemas, por isso é melhor evitar usar var

//--------------------------------------------------------------------------------
*/

/* parte 2

//tipos
//js é dinamicamente tipada, ou seja, nao precisa declarar o tipo da variavel, o tipo é definido automaticamente pelo valor atribuido a ela, e pode ser reatribuida para outro tipo

let a = 2
console.log(typeof (a))

a = true 
console.log(typeof (a))
*/

//--------------------------------------------------------------------------------

/* parte 3
//coerção de tipos

//coerçao implicita, quando o js converte um tipo para outro automaticamente, como no exemplo abaixo, onde o numero 2 é convertido para string '2' e concatenado com '3', resultando em '23'
const n1 = 2
const n2 = '3'
const n3 = n1 + n2
console.log(n3) //coerção de tipos, o numero 2 é convertido para string '2' e concatenado com '3', resultando em '23'

//coerçao explicita, quando o programador converte um tipo para outro manualmente, como no exemplo abaixo, onde a string '2' é convertida para numero 2 e somada com o numero 3, resultando em 5
const n4 = 2
const n5 = '3'
const n6 = n4 + Number(n5) //coerção explicita, a string '3' é convertida para numero 3 e somada com o numero 2, resultando em 5
console.log(n6)
*/

//--------------------------------------------------------------------------------

/*parte 4
// comparacao por igualdade
// java ==; python ==; javascript ===(usar esse)
console.log(1 === 1) //true
console.log(1 == 1) //true
console.log(1 == '1')  //true, pois o js converte a string '1' para numero 1 antes de comparar
console.log(1 === '1') //false, pois o js nao converte a string '1' para numero 1 antes de comparar, e compara os tipos tambem, entao retorna false

console.log(true == 1) //true, pois o js converte o boolean true para numero 1 antes de comparar
console.log(1 == [1]) //true, pois o js converte o array [1] para string '1' antes de comparar, e depois converte a string '1' para numero 1 antes de comparar
//console.log(1 === [1]) //false, pois o js nao converte o array [1] para numero 1 antes de comparar, e compara os tipos tambem, entao retorna false
*/