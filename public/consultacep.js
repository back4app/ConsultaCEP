Parse.initialize("AI715rkoeft72UsyNX5AUqxiAdqWVdV01l8gKZDy", "XH0vgQM0nWrSoOcB0U9VYeQI6lL86OtIaD2P0p2C");
Parse.serverURL = 'https://parseapi.back4app.com/'

async function buscaCep(){
    // Le o dado do formulario
    let cepDigitado = document.getElementById("cepsearch").value;

    // Pega apenas os numeros do CEP, caso o usuario tenha entrado espaços ou hifens
    let cepConsulta = cepDigitado.replace(/\D/g, '');

    // Extende a classe Cepcorreios_CEP, onde vamos fazer uma query
    const Cep = Parse.Object.extend("Cepcorreios_CEP");
    // Cria a query no objeto extendido da classe Cepcorreios_CEP
    const query = new Parse.Query(Cep);
    // Vamos procurar pela propriedade CEP, que seja igual (equalTo) a variavel cepConsulta
    query.equalTo("CEP", cepConsulta);
    // Aguardamos a execucao da query
    const results = await query.first();

    // SE temos resultados
    if (results){
        let logradouro = results.get('logradouro')
        let bairro = results.get('bairro')
        let cidade = results.get('cidade')
        let estado = results.get('estado')

        let resultado = 'Endereco encontrado:\n' + 
                        'Logradouro: ' + logradouro + '\n' + 
                        'Bairro: ' + bairro + '\n' +
                        'Cidade: ' + cidade + '\n' +
                        'Estado: ' + estado;
        console.log(resultado)
        alert(resultado);
    } else {
        // Se nao temos resultados
        alert("SEM RESULTADO PARA O CEP")
    }
}