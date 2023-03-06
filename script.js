var botaoConsulta = document.getElementById('botao');

var resposta = document.getElementById('res');





function consulta(){
    var inputCep = document.getElementById('numCep').value;
    
    if(inputCep.length !==8){
        window.alert('[ERRO] Digite um número de Cep válido!')
        
    }else{
        var url = `https://viacep.com.br/ws/${inputCep}/json/`
    
        fetch(url).then(function(response){
            response.json().then(function(data){
                console.log(data);
                mostraDados(data)
                
            })
            
        })
          
    }
    document.getElementById('numCep').value = ''
    document.getElementById('numCep').focus()
}

function mostraDados(dados){

    if(dados.erro){
        res.innerHTML = 'não foi possível localizar o endereço!'
    }else{
        resposta.innerHTML = `
        <div id = "resposta">
            <p id="mostraCep">CEP: ${dados.cep}</p>
            <p> Endereço: ${dados.logradouro}</p>
            <p> Bairro: ${dados.bairro}</p>
            <p> Cidade: ${dados.localidade} - ${dados.uf}</p>    
        </div>

    `
    }

}
