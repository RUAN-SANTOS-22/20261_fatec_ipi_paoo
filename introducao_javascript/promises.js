// ==============================================
// 3.3 PROMISES
// ==============================================

console.log("\n=== PROMISES ===");

// Função que retorna uma Promise
function calculoDemoradoPromise(numero) {
    return new Promise(function(resolve, reject) {
        // Simula processamento demorado
        console.log(`Iniciando cálculo para ${numero}...`);
        
        let res = 0;
        for (let i = 1; i <= numero; i++) {
            res += i;
        }
        
        // Sucesso: chama resolve
        resolve(res);
        
        // Se houvesse erro, chamaríamos reject(erro)
    });
}

// Usando a Promise com then
calculoDemoradoPromise(10)
    .then((resultado) => {
        console.log("Resultado da promise:", resultado);
    });

// Promise já resolvida (fulfilled)
function calculoRapidinho(numero) {
    return Promise.resolve((numero * (numero + 1)) / 2);
}

console.log("\nPromise já resolvida:");
calculoRapidinho(10).then(resultado => {
    console.log("Resultado rápido:", resultado);
});
console.log("Isso executa antes do then acima!");

// Promise com rejeição
function calculoComValidacao(numero) {
    return numero >= 0
        ? Promise.resolve((numero * (numero + 1)) / 2)
        : Promise.reject("Somente valores positivos, por favor");
}

console.log("\nPromise com tratamento de erro:");
calculoComValidacao(10)
    .then((resultado) => {
        console.log("Sucesso (10):", resultado);
    })
    .catch((err) => {
        console.log("Erro:", err);
    });

calculoComValidacao(-1)
    .then((resultado) => {
        console.log("Sucesso (-1):", resultado);
    })
    .catch((err) => {
        console.log("Erro (-1):", err);
    });

// ENCADEAMENTO DE PROMISES
console.log("\n=== ENCADEAMENTO DE PROMISES ===");

function passo1(valor) {
    return Promise.resolve(valor + 1);
}

function passo2(valor) {
    return Promise.resolve(valor * 2);
}

function passo3(valor) {
    return Promise.resolve(valor - 3);
}

// Encadeamento com then
passo1(5)
    .then(resultado1 => {
        console.log("Passo 1:", resultado1);
        return passo2(resultado1);
    })
    .then(resultado2 => {
        console.log("Passo 2:", resultado2);
        return passo3(resultado2);
    })
    .then(resultado3 => {
        console.log("Passo 3:", resultado3);
        console.log("Resultado final:", resultado3);
    });
