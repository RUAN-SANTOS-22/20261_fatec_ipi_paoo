// ============================================
// FUNÇÕES EM JAVASCRIPT
// ============================================

console.log("=== FUNÇÕES EM JAVASCRIPT ===\n");

// ============================================
// 1. ARROW FUNCTIONS (FUNÇÕES SETA)
// ============================================

console.log("--- ARROW FUNCTIONS ---");

// Arrow function mais simples (um parâmetro, retorno implícito)
const dobrar = n => 2 * n;
console.log("dobrar(6):", dobrar(6));

// Arrow function com múltiplos parâmetros
const somar = (a, b) => a + b;
console.log("somar(5, 3):", somar(5, 3));

// Arrow function com corpo de bloco (várias linhas)
const triplicar = (n) => {
    console.log("   Vamos calcular o triplo de " + n);
    return 3 * n;
};
console.log("triplicar(5):", triplicar(5));

// Arrow function sem parâmetros
const helloSimples = () => console.log('Oi');
console.log("helloSimples():");
helloSimples();

// Arrow function com um parâmetro (parênteses opcionais)
const helloNome = nome => console.log('Oi, ' + nome);
console.log("helloNome('Ana'):");
helloNome('Ana');

// Arrow function retornando objeto (requer parênteses)
const criarPessoa = (nome, idade) => ({ nome, idade });
console.log("criarPessoa('João', 30):", criarPessoa('João', 30));

// ============================================
// 2. FUNCTION EXPRESSIONS
// ============================================

console.log("\n--- FUNCTION EXPRESSIONS ---");

// Função anônima atribuída a uma variável
const dobrarFunction = function(n) {
    return 2 * n;
};
console.log("dobrarFunction(2):", dobrarFunction(2));
console.log("dobrarFunction(undefined):", dobrarFunction(undefined)); // NaN

// Função com parâmetro padrão
const triplicarComPadrao = function(n = 5) {
    return 3 * n;
};
console.log("triplicarComPadrao(10):", triplicarComPadrao(10));
console.log("triplicarComPadrao(undefined):", triplicarComPadrao(undefined)); // usa 5

// Função que não retorna valor (apenas executa ação)
const produto = function(a, b) {
    console.log(`   ${a} * ${b} = ${a * b}`);
};
console.log("produto(4, 3):");
produto(4, 3);

// ============================================
// 3. FUNCTION DECLARATIONS (DECLARAÇÕES DE FUNÇÃO)
// ============================================

console.log("\n--- FUNCTION DECLARATIONS ---");

// Forma tradicional de declarar função (sofre hoisting)
function somarTradicional(a, b) {
    return a + b;
}
console.log("somarTradicional(2, 3):", somarTradicional(2, 3));

// Hoisting - função pode ser chamada antes da declaração
console.log("Chamada antes da declaração:", exemploHoisting());

function exemploHoisting() {
    return "Esta função foi içada (hoisting)";
}

// Função com múltiplos parâmetros
function saudacaoCompleta(saudacao, nome, pontuacao = '!') {
    return `${saudacao}, ${nome}${pontuacao}`;
}
console.log("saudacaoCompleta('Olá', 'Maria'):", saudacaoCompleta('Olá', 'Maria'));
console.log("saudacaoCompleta('Oi', 'João', '!!!'):", saudacaoCompleta('Oi', 'João', '!!!'));

// ============================================
// 4. PARÂMETROS E ARGUMENTOS
// ============================================

console.log("\n--- PARÂMETROS E ARGUMENTOS ---");

// Função que verifica se um número é par
const ehPar = n => n % 2 === 0;
console.log("ehPar(4):", ehPar(4));
console.log("ehPar(5):", ehPar(5));

// Função com múltiplos parâmetros e validação
function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
}
console.log("dividir(10, 2):", dividir(10, 2));
console.log("dividir(10, 0):", dividir(10, 0));

// Parâmetros rest (...)
function somarTodos(...numeros) {
    return numeros.reduce((acc, val) => acc + val, 0);
}
console.log("somarTodos(1, 2, 3, 4, 5):", somarTodos(1, 2, 3, 4, 5));

// ============================================
// 5. CLOSURES
// ============================================

console.log("\n--- CLOSURES ---");

// Closure simples - função interna "lembra" do escopo externo
function eAgora() {
    let cont = 1;
    
    function f1() {
        console.log("   f1 - cont:", cont);
    }
    
    cont++;
    
    function f2() {
        console.log("   f2 - cont:", cont);
    }
    
    cont++;
    
    return { f1, f2 };
}

const resultado = eAgora();
console.log("Closure eAgora():");
resultado.f1(); // 2
resultado.f2(); // 3

// Factory function com closure
function saudacoesFactory(saudacao, nome) {
    // A função interna "lembra" de saudacao e nome
    return function() {
        console.log(`   ${saudacao}, ${nome}`);
    };
}

const olaJoao = saudacoesFactory('Oi', 'João');
const tchauJoao = saudacoesFactory('Tchau', 'João');
const olaMaria = saudacoesFactory('Olá', 'Maria');

console.log("\nFactory de saudações:");
olaJoao();
tchauJoao();
olaMaria();

// Outro exemplo de closure
function contadorFactory() {
    let contador = 0;
    
    return {
        incrementar: () => ++contador,
        decrementar: () => --contador,
        valor: () => contador
    };
}

const contador = contadorFactory();
console.log("\nContador com closure:");
console.log("  Valor inicial:", contador.valor());
console.log("  Incrementar:", contador.incrementar());
console.log("  Incrementar:", contador.incrementar());
console.log("  Decrementar:", contador.decrementar());
console.log("  Valor final:", contador.valor());

// ============================================
// 6. FUNÇÕES COMO VALORES DE PRIMEIRA CLASSE
// ============================================

console.log("\n--- FUNÇÕES COMO VALORES ---");

// Função pode ser armazenada em variável
let umaFuncao = function() {
    console.log("   Fui armazenada numa variável");
};
console.log("Função em variável:");
umaFuncao();

// Função pode ser passada como argumento
function executarFuncao(funcao) {
    console.log("   Executando função recebida:");
    funcao();
}

console.log("\nFunção como argumento:");
executarFuncao(umaFuncao);

// Função pode retornar outra função
function criarMultiplicador(fator) {
    return function(numero) {
        return numero * fator;
    };
}

const multiplicarPor2 = criarMultiplicador(2);
const multiplicarPor5 = criarMultiplicador(5);

console.log("\nFunção que retorna função:");
console.log("  multiplicarPor2(10):", multiplicarPor2(10));
console.log("  multiplicarPor5(10):", multiplicarPor5(10));

// Exemplo complexo de retorno de função
function g() {
    function outraFuncao() {
        console.log('   Fui criada pela g');
        return () => console.log("   E agora?");
    }
    return outraFuncao;
}

console.log("\nEncadeamento de funções:");
const funcaoRetornada = g();
funcaoRetornada();

// Encadeamento mais complexo
console.log("\nEncadeamento complexo:");
const resultadoEncadeado = g()(); // Executa g, depois a função retornada
resultadoEncadeado(); // Executa a arrow function retornada

// ============================================
// 7. MÉTODOS DE ARRAY COM FUNÇÕES
// ============================================

console.log("\n--- MÉTODOS DE ARRAY COM FUNÇÕES ---");

const valores = [1, 2, 3, 4];
const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina'];

// reduce - reduz array a um único valor
const soma = valores.reduce((ac, v) => ac + v);
console.log("reduce (soma de valores):", soma);

// some - verifica se algum elemento satisfaz condição
const algumComecaComA = nomes.some(n => n.startsWith('A'));
console.log("some (algum nome começa com A?):", algumComecaComA);

// every - verifica se todos elementos satisfazem condição
const todosComecamComA = nomes.every(n => n.startsWith('A'));
console.log("every (todos nomes começam com A?):", todosComecamComA);

// map - transforma cada elemento
const primeirasLetras = nomes.map(nome => nome.charAt(0));
console.log("map (primeiras letras):", primeirasLetras);

// filter - filtra elementos
const apenasComA = nomes.filter(n => n.startsWith('A'));
console.log("filter (apenas nomes com A):", apenasComA);

// forEach - executa função para cada elemento
console.log("forEach (percorrendo nomes):");
nomes.forEach((nome, indice) => {
    console.log(`   ${indice}: ${nome}`);
});

// find - encontra primeiro elemento que satisfaz condição
const primeiroComA = nomes.find(n => n.startsWith('A'));
console.log("find (primeiro nome com A):", primeiroComA);

// ============================================
// 8. EXEMPLOS PRÁTICOS
// ============================================

console.log("\n--- EXEMPLOS PRÁTICOS ---");

// Função para calcular média
function calcularMedia(...notas) {
    if (notas.length === 0) return 0;
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}
console.log("Média de [7, 8, 9]:", calcularMedia(7, 8, 9));
console.log("Média de [10, 5, 6, 8]:", calcularMedia(10, 5, 6, 8));

// Função para formatar nome
const formatarNome = nome => {
    return nome
        .split(' ')
        .map(parte => parte.charAt(0).toUpperCase() + parte.slice(1).toLowerCase())
        .join(' ');
};
console.log("Nome formatado: 'ana maria silva' ->", formatarNome('ana maria silva'));

// Função de alta ordem (recebe função)
function operacaoArray(array, operacao) {
    return array.map(operacao);
}
console.log("Operação em array (dobro):", operacaoArray([1, 2, 3], n => n * 2));
console.log("Operação em array (quadrado):", operacaoArray([1, 2, 3], n => n ** 2));

// Função memoização (cache) com closure
function memoizar(fn) {
    const cache = {};
    
    return function(...args) {
        const chave = JSON.stringify(args);
        if (chave in cache) {
            console.log(`   (usando cache para ${chave})`);
            return cache[chave];
        }
        
        const resultado = fn(...args);
        cache[chave] = resultado;
        return resultado;
    };
}

const calcularFatorial = memoizar(n => {
    if (n <= 1) return 1;
    return n * calcularFatorial(n - 1);
});

console.log("\nMemoização:");
console.log("fatorial(5):", calcularFatorial(5));
console.log("fatorial(5) novamente:", calcularFatorial(5));

console.log("\n=== FIM DO ARQUIVO FUNÇÕES ===");