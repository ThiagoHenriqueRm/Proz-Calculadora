// JavaScript
function inserir(num){ // Função para incerir o numero na tela

    var numero = document.getElementById('res').innerHTML // pegendo numero atualmente digitado
    document.getElementById('res').innerHTML = numero + num // adicionando novo numero e mantendo o numero anterior

    tela.scrollTop = tela.scrollHeight; // quando a linha é quebrada, a tela ainda sequira os numeros escritos
}
function limpar(){ // Função para limpar
    document.getElementById('res').innerHTML = ""
}
function voltar(){ // Função para aparar apenas o ultimo numero digitado
    var res = document.getElementById('res').innerHTML // Colocando os numeros digitados atualmente na variavel "res"
    document.getElementById('res').innerHTML = res.substring(0, res.length -1) // Apagendo o ultimo digito 
}
function calcular(){ // Função para efetuar o calcolo das exprecoes 
    var resultado = document.getElementById('res').innerHTML // variavel que guarda a exprexão atuaol
    if(resultado){
        document.getElementById('res').innerHTML = eval(resultado); // Efetuação da expreção com a função "eval()"
    }
}
