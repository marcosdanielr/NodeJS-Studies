const path = require('path')

//filename é o arquivo e dirname a pasta

// nome do arquivo atual
console.log(path.basename(__filename))

// nome do local do diretório atual
console.log(path.dirname(__filename))

// Extensão do arquivo atual
console.log(path.extname(__filename))

// Criar objeto path
console.log(path.parse(__filename))

// Juntar caminhos de arquivos
console.log(path.join(__dirname, 'test', 'test.js'))
