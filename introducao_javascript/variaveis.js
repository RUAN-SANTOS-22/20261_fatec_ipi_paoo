// ============================================
// 1. DECLARAÇÃO DE VARIÁVEIS
// ============================================

// JavaScript é dinamicamente tipado - a mesma variável pode mudar de tipo
let a = 2;
console.log("Tipo de a (número):", typeof(a));
a = true;
console.log("Tipo de a (booleano):", typeof(a));

// CONST - não pode ser reatribuída (valor constante)
const nome = 'José';
console.log("Const nome:", nome);
// nome = 'José Silva'; // Isso causaria erro! (descomente para testar)

// LET - variável de escopo de bloco (recomendado)
let nomeLet = 'Maria';
console.log("Let nome (inicial):", nomeLet);
nomeLet = `Meu nome é ${nomeLet}.`; // Template string
console.log("Let nome (modificado):", nomeLet);

// VAR - forma antiga, evite usar (escopo de função, sofre hoisting)
var linguagem = 'Javascript';
console.log("Var linguagem (inicial):", linguagem);
var linguagem = 'Java'; // Pode ser redeclarada
console.log("Var linguagem (redeclarada):", linguagem);

// ============================================
// 2. HOISTING (IÇAMENTO)
// ============================================
/*aloca na memória as declarações de variáveis (var) e funções no topo do escopo antes da execução do código. Isso permite chamar funções antes de defini-las e organizar o código para melhor legibilidade.*/

// Hoisting com var - a declaração é "elevada" mas a inicialização não
console.log("Hoisting com var (antes da declaração):", variavelComHoisting); // undefined (não causa erro)
var variavelComHoisting = "Isso foi içado";
console.log("Hoisting com var (depois da declaração):", variavelComHoisting);

// Hoisting com let - está no temporal dead zone (causa erro)
try {
    console.log(letComHoisting); // ReferenceError
} catch (e) {
    console.log("Hoisting com let causa erro se acessado antes da declaração");
}
let letComHoisting = "Isso não pode ser acessado antes";

// ============================================
// 3. TEMPLATE STRINGS (INTERPOLAÇÃO)
// ============================================
//mais dinamico, legivel e flexivel, deve-se usar crases ao invez de aspas

const produto = "caneta";
const preco = 2.50;
console.log(`O produto ${produto} custa R$ ${preco}`); // Template string com ${}

// Concatenação tradicional
console.log("O produto " + produto + " custa R$ " + preco);

// ============================================
// 4. NULL E UNDEFINED
// ============================================

console.log("\n--- NULL E UNDEFINED ---");

let valorNulo = null; // Intencionalmente vazio
let valorIndefinido; // Não foi inicializada (undefined)

console.log("null (intencionalmente vazio):", valorNulo);
console.log("undefined (não inicializado):", valorIndefinido);

// Diferenças
console.log("null == undefined:", null == undefined); // true (igualdade solta)
console.log("null === undefined:", null === undefined); // false (igualdade estrita)

// ============================================
// 5. ESCOPO DE VARIÁVEIS
// ============================================

console.log("\n--- ESCOPO DE VARIÁVEIS ---");

var idade = 18;
// console.log(`Oi, ${nome}.`); // Isso causaria erro (nome não definido)

if (idade >= 18) {
    let nome = 'Maria'; // Escopo de bloco, nome nao existe fora do if
    console.log(`Parabéns, ${nome}. Você pode dirigir.`);
}
// console.log("Até mais, " + nome + '.'); // Erro! nome não está acessível aqui

// ============================================
// 6. FOR COM CONST (DEMONSTRAÇÃO DE ERRO)
// ============================================

console.log("\n--- FOR COM CONST ---");

console.log('Antes do for');
// for (const i = 0; i < 10; i = i + 1) { // Isso causaria erro (const não pode ser incrementada)
//   console.log('for com const...');
// }
console.log('For com const não funciona porque i precisaria ser reatribuído');
console.log('Depois do for');

// Versão correta com let
console.log("\nFor com let (correto):");
for (let i = 0; i < 3; i++) {
    console.log('Iteração:', i);
}

// ============================================
// 7. TIPOS DE DADOS
// ============================================

console.log("\n--- TIPOS DE DADOS ---");

// Tipos primitivos
const numero = 42;
const texto = "abc";
const booleano = true;
const nulo = null;
const indefinido = undefined;

console.log("number:", numero, typeof numero);
console.log("string:", texto, typeof texto);
console.log("boolean:", booleano, typeof booleano);
console.log("null:", nulo, typeof nulo); // "object" (bug histórico do JS)
console.log("undefined:", indefinido, typeof indefinido);

// ============================================
// 8. COERÇÃO DE TIPOS (casting)
// ============================================

console.log("\n--- COERÇÃO DE TIPOS ---");

// Coerção implícita (JavaScript tenta converter automaticamente)
const n1 = 2;
const n2 = '3';
const n3Implicita = n1 + n2; // Concatenação
console.log(`Coerção implícita: ${n1} + ${n2} = ${n3Implicita} (tipo: ${typeof n3Implicita})`);

// Coerção explícita (nós controlamos a conversão)
const n3Explicita = n1 + Number(n2);
console.log(`Coerção explícita: ${n1} + ${n2} = ${n3Explicita} (tipo: ${typeof n3Explicita})`);

// Outras conversões explícitas
console.log("parseInt('123'):", parseInt("123"));
console.log("parseFloat('3.14'):", parseFloat("3.14"));
console.log("String(42):", String(42));
console.log("Number(true):", Number(true)); // 1
console.log("Number(false):", Number(false)); // 0
