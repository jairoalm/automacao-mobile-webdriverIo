// Importa o módulo 'fs' para manipulação de arquivos
const fs = require('fs');
// Importa 'path' para resolver caminhos de arquivos de forma independente do sistema operacional
const path = require('path');
// Importa o módulo 'csv-parser' para fazer o parse do arquivo CSV
const csv = require('csv-parser');

/**
 * Função que retorna os dados do CSV filtrando pelo cenário desejado.
 * @param {string} scenario - Nome do cenário a buscar no CSV (coluna 'cenário').
 * @returns {Promise<object>} - Promessa que resolve para o objeto do cenário encontrado.
 */
async function getLoginDataByScenario(scenario) {
    const results = []; // Array para armazenar os dados encontrados
    // Caminho absoluto para o arquivo loginData.csv na pasta 'data'
    const filePath = path.resolve(__dirname, '../data/loginData.csv');

    // Retorna uma Promise para lidar com a leitura assíncrona do CSV
    return new Promise((resolve, reject) => {// Cria uma stream para ler o arquivo CSV
        fs.createReadStream(filePath) // Encaminha os dados lidos para o parser CSV
            .pipe(csv()) // Evento disparado a cada linha lida do CSV
            .on('data', (data) => {
                if (data.cenário === scenario) {// Verifica se a coluna 'cenário' da linha atual é igual ao cenário procurado
                    results.push(data); // Adiciona ao array resultados
                }
            })
            // Evento disparado ao terminar a leitura do arquivo
            .on('end', () => resolve(results[0]))// Retorna apenas o primeiro resultado encontrado (assumindo cenário único)
            .on('error', reject); // Rejeita a Promise com o erro encontrado
    });
}
// Exporta a função para ser usada em outros arquivos (ex: nos testes)
module.exports = { getLoginDataByScenario };