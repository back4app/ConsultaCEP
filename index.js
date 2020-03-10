// Insancia o Parse SDK para Javascript NodeJS
const Parse = require('parse/node')

// Configura a ParseURL para a API do Back4app
Parse.serverURL = 'https://parseapi.back4app.com/'

// Async function para podermos utilizar async/await
async function retornaEndereco(){
    // Inicializa o Parse com a AppID e a Javascript Key
    Parse.initialize("AI715rkoeft72UsyNX5AUqxiAdqWVdV01l8gKZDy", "XH0vgQM0nWrSoOcB0U9VYeQI6lL86OtIaD2P0p2C");

    // Extende a classe Cepcorreios_CEP, onde faremos nossas queries
    const CEPs = Parse.Object.extend("Cepcorreios_CEP");
    // Constroi a query em cima da classe CEPs, extendida acima
    const query = new Parse.Query(CEPs);
    // Nesta query, procuraremos pela propriedade CEP da classe Cepcorreios_CEP, que seja igual (equalTo) a 12243380
    query.equalTo("CEP", "99980974");

    // Executa o método find e aguarda pelos resultados. Atribui os resultados na variável results.
    const results = await query.find();

    console.log('Encontrado(s) ' + results.length + ' resultado(s) para o CEP.')

    // Loop pelos results e imprime os resultados
    for (let i = 0; i < results.length; i ++){
        let cep = results[i].get('CEP')
        let logradouro = results[i].get('logradouro')
        let bairro = results[i].get('bairro')
        let cidade = results[i].get('cidade')
        let estado = results[i].get('estado')

        console.log('\tO logradouro para o CEP ' + cep + ' é: ' + logradouro)
        console.log('\tO bairro para o CEP ' + cep + ' é: ' + bairro)
        console.log('\tA cidade para o CEP ' + cep + ' é: ' + cidade)
        console.log('\tO estado para o CEP ' + cep + ' é: ' + estado)
    }
}


// Roda o metodo retornaEndereco, codado acima
retornaEndereco()