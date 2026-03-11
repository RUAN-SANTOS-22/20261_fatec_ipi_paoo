// ============================================
// OBJETOS E JSON EM JAVASCRIPT
// ============================================

console.log("=== OBJETOS E JSON ===\n");

// ============================================
// 1. CRIANDO OBJETOS SIMPLES
// ============================================

console.log("--- OBJETOS SIMPLES ---");

// Objeto básico
let pessoa1 = {
    nome: 'João',
    idade: 17
};
console.log("pessoa1 (João, 17):", pessoa1);

// Objeto com mais propriedades
let pessoa2 = {
    nome: 'Maria',
    idade: 21,
    endereco: {
        logradouro: 'Rua B',
        numero: 20,
        bairro: 'Vila J'
    }
};
console.log("pessoa2 (Maria com endereço):", pessoa2);

// Acessando propriedades
console.log("\nAcessando propriedades:");
console.log("pessoa2.nome:", pessoa2.nome); // notação de ponto
console.log("pessoa2['idade']:", pessoa2['idade']); // notação de colchetes
console.log("pessoa2.endereco.logradouro:", pessoa2.endereco.logradouro);
console.log("pessoa2['endereco']['numero']:", pessoa2['endereco']['numero']);

// Template string com objeto
console.log(`\n${pessoa2.nome} mora na ${pessoa2.endereco.logradouro}.`);
console.log(`${pessoa2['nome']} tem ${pessoa2['idade']} anos. ` +
            `Ela mora na ${pessoa2.endereco['logradouro']}, ` +
            `número ${pessoa2['endereco'].numero}.`);

// ============================================
// 2. OBJETOS COM MÉTODOS
// ============================================

console.log("\n--- OBJETOS COM MÉTODOS ---");

// Objeto calculadora com diferentes formas de declarar métodos
let calculadora = {
    // Arrow function
    somar: (a, b) => a + b,
    
    // Function expression
    subtrair: function(a, b) {
        return a - b;
    },
    
    // Sintaxe simplificada (ES6+)
    multiplicar(a, b) {
        return a * b;
    },
    
    // Método com mais lógica
    dividir(a, b) {
        if (b === 0) {
            return "Erro: divisão por zero";
        }
        return a / b;
    }
};

console.log("Calculadora:");
let res1 = calculadora.somar(1, 2);
console.log("  somar(1, 2):", res1);
console.log("  subtrair(2, 1):", calculadora.subtrair(2, 1));
console.log("  multiplicar(3, 4):", calculadora.multiplicar(3, 4));
console.log("  dividir(10, 2):", calculadora.dividir(10, 2));
console.log("  dividir(10, 0):", calculadora.dividir(10, 0));

// Acessando métodos com colchetes
console.log("\nAcesso com colchetes:");
console.log("calculadora['subtrair'](2, 1):", calculadora['subtrair'](2, 1));

// ============================================
// 3. OBJETOS COMPLEXOS ANINHADOS
// ============================================

console.log("\n--- OBJETOS COMPLEXOS ANINHADOS ---");

// Concessionária com veículos e proprietários
let concessionaria = {
    cnpj: '00.000.000/0001-00',
    endereco: {
        logradouro: 'Avenida B',
        numero: 1,
        bairro: 'Vila J',
        cidade: 'São Paulo',
        cep: '01234-567'
    },
    veiculos: [
        {
            marca: 'Ford',
            modelo: 'Fiesta',
            ano: 2000,
            proprietarios: [
                {
                    nome: 'João',
                    telefone: 65656565
                },
                {
                    nome: 'Maria',
                    telefone: 98989898
                }
            ]
        },
        {
            marca: 'Honda',
            modelo: 'HR-V',
            ano: 2020,
            proprietarios: [
                {
                    nome: 'Ana',
                    telefone: 67474747
                }
            ]
        },
        {
            marca: 'Toyota',
            modelo: 'Corolla',
            ano: 2022,
            proprietarios: []
        }
    ]
};

console.log("Concessionária (objeto complexo):");
console.log("  CNPJ:", concessionaria.cnpj);
console.log("  Endereço:", concessionaria.endereco.logradouro + ", " + 
            concessionaria.endereco.numero + " - " + concessionaria.endereco.bairro);
console.log("  Total de veículos:", concessionaria.veiculos.length);

// Acessando veículos e proprietários
console.log("\nDetalhes dos veículos:");
concessionaria.veiculos.forEach((veiculo, index) => {
    console.log(`  Veículo ${index + 1}: ${veiculo.marca} ${veiculo.modelo} (${veiculo.ano})`);
    console.log(`    Proprietários: ${veiculo.proprietarios.length}`);
    
    veiculo.proprietarios.forEach((prop, i) => {
        console.log(`      ${i + 1}. ${prop.nome} - Tel: ${prop.telefone}`);
    });
});

// Acessando propriedades específicas
console.log("\nAcessando propriedades específicas:");
console.log("  Primeiro veículo:", concessionaria.veiculos[0])