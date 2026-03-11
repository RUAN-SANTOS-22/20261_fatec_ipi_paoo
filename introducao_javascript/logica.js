// ============================================
// LÓGICA E COMPARAÇÕES EM JAVASCRIPT
// ============================================

console.log("=== LÓGICA E COMPARAÇÕES ===\n");

// ============================================
// 1. COMPARAÇÃO POR IGUALDADE
// ============================================

console.log("--- COMPARAÇÃO POR IGUALDADE ---");

// JavaScript tem dois tipos de comparação de igualdade:
// ==  (igualdade solta) - faz coerção de tipo
// === (igualdade estrita) - NÃO faz coerção de tipo (recomendado)

console.log("1 == 1:", 1 == 1);       // true
console.log("1 === 1:", 1 === 1);     // true

console.log("1 == '1':", 1 == '1');   // true (faz coerção)
console.log("1 === '1':", 1 === '1'); // false (tipos diferentes)

console.log("true == 1:", true == 1);   // true
console.log("true === 1:", true === 1); // false

// ============================================
// 2. COMPARAÇÃO DE ARRAYS E OBJETOS
// ============================================

console.log("\n--- COMPARAÇÃO DE ARRAYS E OBJETOS ---");

// Arrays e objetos são comparados por referência, não por valor
const lista = [];
const lista2 = lista;
const listaIndependente = [];

console.log("[] == []:", [] == []);           // false (referências diferentes)
//console.log("[] === []:", [] === []);         // false
console.log("lista === lista2:", lista === lista2); // true (mesma referência)
console.log("lista === listaIndependente:", lista === listaIndependente); // false

// ============================================
// 3. CASOS PECULIARES DO == (EVITE USAR)
// ============================================

console.log("\n--- CASOS PECULIARES DO == (EVITE USAR) ---");

console.log("false == []:", false == []);     // true (comportamento estranho!)
console.log("false == 0:", false == 0);       // true
console.log("'' == 0:", '' == 0);              // true
console.log("null == undefined:", null == undefined); // true
console.log("null == null:", null == null);   // true
console.log("1 == [1]:", 1 == [1]);           // true (array é convertido para número)

// Comparações mais previsíveis com ===
console.log("\nCom === (mais previsível):");
//console.log("false === []:", false === []);   // false
console.log("false === 0:", false === 0);     // false
console.log("null === undefined:", null === undefined); // false
//console.log("1 === [1]:", 1 === [1]);         // false

// ============================================
// 4. OPERADORES LÓGICOS
// ============================================

console.log("\n--- OPERADORES LÓGICOS ---");

const idade = 20;
const temCarteira = true;
const éEstudante = false;

// AND (&&) - todas as condições devem ser verdadeiras
const podeDirigir = idade >= 18 && temCarteira;
console.log("Pode dirigir (18+ E tem carteira):", podeDirigir);

// OR (||) - pelo menos uma condição deve ser verdadeira
const temDesconto = idade < 18 || éEstudante;
console.log("Tem desconto (menor OU estudante):", temDesconto);

// NOT (!) - inverte o valor booleano
console.log("NEGAÇÃO - Não tem carteira:", !temCarteira);
console.log("NEGAÇÃO - Não é maior de idade:", !(idade >= 18));

// ============================================
// 5. OPERADORES DE COMPARAÇÃO
// ============================================

console.log("\n--- OPERADORES DE COMPARAÇÃO ---");

const x = 10;
const y = 5;

console.log(`${x} > ${y}:`, x > y);   // maior que
console.log(`${x} < ${y}:`, x < y);   // menor que
console.log(`${x} >= ${y}:`, x >= y);  // maior ou igual
console.log(`${x} <= ${y}:`, x <= y);  // menor ou igual
console.log(`${x} != ${y}:`, x != y);  // diferente (solta)
console.log(`${x} !== ${y}:`, x !== y); // diferente (estrito)

// ============================================
// 6. AVALIAÇÃO DE CURTO-CIRCUITO
// ============================================

console.log("\n--- AVALIAÇÃO DE CURTO-CIRCUITO ---");

// AND (&&) - retorna o primeiro valor falso ou o último valor
console.log("0 && 'texto':", 0 && 'texto');     // 0 (primeiro falso)
console.log("true && 'texto':", true && 'texto'); // 'texto' (último)

// OR (||) - retorna o primeiro valor verdadeiro ou o último
console.log("0 || 'texto':", 0 || 'texto');     // 'texto' (primeiro verdadeiro)
console.log("false || 0 || '' || 'fim':", false || 0 || '' || 'fim'); // 'fim'

// Uso prático - valor padrão
const nome = '' || 'Visitante';
console.log("Nome padrão com ||:", nome);

// ============================================
// 7. OPERADOR TERNÁRIO
// ============================================

console.log("\n--- OPERADOR TERNÁRIO ---");

// Sintaxe: condição ? valorSeVerdadeiro : valorSeFalso

const nota = 7;
const status = nota >= 6 ? 'Aprovado' : 'Reprovado';
console.log(`Nota ${nota}: ${status}`);

const temperatura = 30;
const clima = temperatura > 25 ? 'Quente' : 'Agradável';
console.log(`Temperatura ${temperatura}°C: ${clima}`);

// ============================================
// 8. NULLISH COALESCING (??)
// ============================================

console.log("\n--- NULLISH COALESCING (??) ---");

// ?? retorna o valor da direita apenas se o da esquerda for null ou undefined
// Diferente do || que considera falsy (0, '', false, etc.)

const valor1 = 0;
const valor2 = null;
const valor3 = undefined;
const valor4 = '';

console.log("0 ?? 'padrão':", valor1 ?? 'padrão');     // 0 (0 não é null/undefined)
console.log("null ?? 'padrão':", valor2 ?? 'padrão');  // 'padrão'
console.log("undefined ?? 'padrão':", valor3 ?? 'padrão'); // 'padrão'
console.log("'' ?? 'padrão':", valor4 ?? 'padrão');    // '' (string vazia não é null/undefined)

// Comparação com ||
console.log("\nComparação || vs ??");
console.log("0 || 'padrão':", 0 || 'padrão');     // 'padrão' (0 é falsy)
console.log("0 ?? 'padrão':", 0 ?? 'padrão');     // 0

// ============================================
// 9. EXEMPLOS PRÁTICOS
// ============================================

console.log("\n--- EXEMPLOS PRÁTICOS ---");

// Verificar se número é par
function ehPar(numero) {
    return numero % 2 === 0;
}

console.log("2 é par?", ehPar(2));
console.log("3 é par?", ehPar(3));

// Verificar faixa etária
function classificarIdade(idade) {
    if (idade < 0 || idade > 150) {
        return "Idade inválida";
    } else if (idade < 12) {
        return "Criança";
    } else if (idade < 18) {
        return "Adolescente";
    } else if (idade < 60) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

console.log("Idade 10:", classificarIdade(10));
console.log("Idade 15:", classificarIdade(15));
console.log("Idade 25:", classificarIdade(25));
console.log("Idade 70:", classificarIdade(70));
console.log("Idade 200:", classificarIdade(200));

// Validação de formulário
function validarFormulario(nome, email, idade) {
    if (!nome || nome.trim() === '') {
        return "Nome é obrigatório";
    }
    
    if (!email || !email.includes('@') || !email.includes('.')) {
        return "Email inválido";
    }
    
    if (idade < 18 || idade > 120) {
        return "Idade deve estar entre 18 e 120 anos";
    }
    
    return "Formulário válido!";
}

console.log("\nValidação de formulário:");
console.log(validarFormulario("", "teste@teste.com", 25));
console.log(validarFormulario("João", "emailinvalido", 25));
console.log(validarFormulario("Maria", "maria@email.com", 15));
console.log(validarFormulario("Pedro", "pedro@email.com", 30));

console.log("\n=== FIM DO ARQUIVO LÓGICA ===");