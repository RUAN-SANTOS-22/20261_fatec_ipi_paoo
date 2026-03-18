// ==============================================
// CAPÍTULO 3 - EXECUÇÃO SÍNCRONA E ASSÍNCRONA
// ==============================================

// ==============================================
// 3.1 MODELO SINGLE THREADED
// ==============================================

console.log("\n=== EXECUÇÃO SÍNCRONA ===");

console.log('Primeiro');
console.log('Segundo');
console.log('Terceiro');

// Função que simula processamento demorado (espera ocupada)
function demorada() {
    const atualMais2Segundos = new Date().getTime() + 2000;
    // Loop vazio por 2 segundos (NÃO FAÇA ISSO EM CÓDIGO REAL!)
    while (new Date().getTime() <= atualMais2Segundos);
    const d = 8 + 4;
    return d;
}

console.log("\nExecução bloqueante:");
const x = 2 + 3;
const y = 5 + 9;
const z = demorada();  // Bloqueia por 2 segundos!
const w = 2 + x + y;
console.log("w =", w);  // Só executa após demorada terminar

// EXECUÇÃO ASSÍNCRONA COM setTimeout
console.log("\n=== EXECUÇÃO ASSÍNCRONA ===");

console.log("Início do script");

// setTimeout agenda a execução para depois de pelo menos 500ms
setTimeout(function() {
    console.log("Dentro do setTimeout (após 500ms)");
}, 500);

// Esta linha executa imediatamente, sem esperar o setTimeout
console.log("Fim do script (execução continua sem bloquear)");

// Demonstração de enfileiramento
console.log("\n=== ENFILEIRAMENTO ===");

setTimeout(function() {
    console.log('Dentro do setTimeout com 0ms');
}, 0);

// Loop demorado
const tempo = new Date().getTime() + 1000;
while (new Date().getTime() <= tempo);

console.log('Fora do setTimeout (executa primeiro, mesmo com timeout 0)');

// ==============================================
// 3.2 INFERNO DE CALLBACKS (EXEMPLO SIMPLIFICADO)
// ==============================================

console.log("\n=== INFERNO DE CALLBACKS ===");

// NOTA: Este exemplo usa fs (file system) do Node.js
// Para executar, crie um arquivo 'arquivo.txt' com conteúdo numérico

const fs = require('fs');

function exemploCallbackHell() {
    fs.readFile('arquivo.txt', function(erro, conteudo) {
        if (erro) {
            console.log(`Erro na leitura: ${erro}`);
        } else {
            console.log('Conteúdo lido:', conteudo.toString());
            const dobro = Number(conteudo.toString()) * 2;
            
            // Callback aninhado (começa o inferno!)
            fs.writeFile('dobro.txt', dobro.toString(), function(erro) {
                if (erro) {
                    console.log('Erro ao salvar o dobro');
                } else {
                    console.log('Salvou o dobro com sucesso');
                    
                    // Mais um nível de aninhamento (cresce o inferno!)
                    fs.readFile('dobro.txt', function(erro, novoConteudo) {
                        if (erro) {
                            console.log('Erro ao ler o dobro');
                        } else {
                            console.log('Conteúdo do dobro.txt:', novoConteudo.toString());
                            
                            // E poderia continuar indefinidamente...
                        }
                    });
                }
            });
        }
    });
}

// Descomente para executar (requer arquivo.txt no mesmo diretório)
// console.log("\nExecutando exemplo de callback hell:");
// exemploCallbackHell();
