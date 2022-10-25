function exercicio01() {
    var a = 10;
    var b = 20;
    console.log("Variaveis normais")
    console.log("Variavel A:", a)
    console.log("Variavel B:", b)
    var aux = b;
    var b = a;
    var a = aux;
    console.log("Variaveis trocadas")
    console.log("Variavel A:", a)
    console.log("Variavel B:", b)
}

function exercicio02(){

    var inputvar = prompt('Digite qualquer número:');

    var anterior = inputvar - 1;
    console.log("Número anterior:  ", anterior);
}

function exercicio03(){

    var base = prompt("Digite a base do retângulo:");
    var altura = prompt("Digite a altura do retângulo:");

    area = base * altura
    console.log("Área do retângulo:", area);

}

function exercicio04(){

    var dias_ano = 365;
    var dias_mes = 30;
    
    var receber_anos = prompt("Quanto anos você têm? - Ex: (XX XX XXXX)");

    var tm = receber_anos.length
    var dia = ""
    var mes = ""
    var ano = ""
    console.log("tamanho leng", tm)
    const date = new Date()
    const today = date.getDate();
    const mes_atual = date.getMonth() + 1
    const ano_atual = date.getFullYear()
    for (i=0; i<=tm; i++){

        if (i<2){
            dia = dia + "" + receber_anos[i];
        }
        
        if (i >= 3 && i <= 4){
            mes = mes + "" + receber_anos[i]
        }
        if (i >= 6 && i <= 9){
            ano = ano + "" + receber_anos[i]
        }
        console.log("Dia:", dia, "\nMês:", mes, "\nAno:", ano)
    }
    console.log("Dia atual", today)
    var dia_atual = today
    var diferencadia = dia_atual - dia
    

    if (diferencadia <=0){
        diferencadia = diferencadia * -1
    }

    var diferenca_mes_dia = mes_atual - mes
    if (diferenca_mes_dia <= 0){
        diferenca_mes_dia = diferenca_mes_dia * -1
    }
    var dia_mes_tempo = diferenca_mes_dia * 30
    

    var diferenca_ano = ano_atual - ano
    if (diferenca_ano <= 0){
        diferenca_ano = diferenca_ano * -1
    }

    var dia_ano_tempo = diferenca_ano *365

    var soma_dia_total = dia_mes_tempo + dia_ano_tempo + diferencadia
    console.log("Quantidade de dias de vida: ", soma_dia_total)
}
function exercicio05(){
    //var total_eleitores = prompt("Digite o total de eleitores do município X:")
    
    var votos_brancos = parseInt(prompt("Digite os votos brancos que ocorreram: "))
    var votos_nulos = parseInt(prompt("Digite os votos nulos que ocorreram: "))
    var validos = parseInt(prompt("Digite os votos válidos: "))
    var total_votos = 0
    total_votos = total_votos + votos_brancos + votos_nulos + validos
    
    console.log("Total de votos: ", total_votos)
    console.log("Porcentagem votos:\nBrancos: ", ((votos_brancos*100)/total_votos) + "%")
    console.log("Nulos:", ((votos_nulos*100)/total_votos) + "%")
    console.log("Válidos:", ((validos*100)/total_votos) + "%")

}
function exercicio06(){
    var salario = parseFloat(prompt("Salario:"))
    var reajuste = parseFloat(prompt("Porcentagem de reajuste:"))

    var novo_salario = salario + salario*(reajuste/100)
    console.log("Novo salário:", novo_salario)
}
function exercicio07(){

    
    var custo_fabrica = parseFloat(prompt("Custo de fábrica:"))
    var impostos = custo_fabrica * 0.45
    var porcentagem_distribuidor =  custo_fabrica * 0.28
    var custo_consumidor = custo_fabrica + porcentagem_distribuidor + impostos
    console.log("Custo do consumidor:", custo_consumidor)
}

function exercicio08(){
    var nota1 = parseFloat(prompt("Digite a primeira nota"))
    var nota2 = parseFloat(prompt("Digite a segunda nota"))
    var nota3 = parseFloat(prompt("Digite a terceira nota"))

    var media = (nota1 + nota2+ nota3)/3

    console.log('Media:', media)
}
function exercicio09(){
    var qtde_macas = parseInt(prompt("Quantas maças você quer comprar?"))

    if (qtde_macas >= 12){
        console.log("Você vai pagar:", qtde_macas, "reais")
    }
    if (qtde_macas <12){
        console.log("Você vai pagar:", qtde_macas*1.3 , "reais")

    }
}
function exercicio10(){

    var salario_fixo = parseFloat(prompt("Salario fixo:"))
    var vendas = parseFloat(prompt("Quanto vendedor vendeu:"))
    var dif_vendas = 0
    if (vendas > 1500){
        dif_vendas = vendas - 1500
        vendas = 1500
        console.log("Vendedor vai ganhar", salario_fixo + (vendas*0.03) + (dif_vendas*0.05) )
    }

    //porcentagem -1500
    if (vendas < 1500){
        console.log("Vendedor vai ganhar:", salario_fixo + (vendas*0.03))
    }
}
function exercicio11(){
    var nmr_conta = prompt("Numero da conta do cliente:")
    var saldo = parseFloat(prompt("Saldo:"))
    var debito = parseFloat(prompt("Débito"))
    var credito = parseFloat(prompt("Crédito"))

    console.log("Saldo atual:", saldo - debito + credito)
    if (saldo > 1){
        console.log("Saldo positivo")
    }
    if (saldo < 0){
        console.log("Saldo negativo")
    }
}
function exercicio12(){

        var x = parseInt(prompt("Digite um valor entre 1 e 10"))
        
        if (x > 10 || x < 1){
            console.log("Valor inválido")
        }
        else{
            var i =0
            for(i=1; i!=11;i++){
                console.log("Tabuada de", x, "*", i)
            }
        }
}
function exercicio13(){
    var x1 = parseInt(prompt("Digite um valor:"))

    var i = 0
    for(i=1; i <= x1; i++){
        console.log(i)
    }
}
function exercicio14(){
    var arr = []
    console.log("Digite 10 numeros")
    for(var i =0; i< 10; i++){
        
        arr.push(parseInt(prompt("Numero:")))
    }
    for(var j = 0; j < 10; j++){

        if(arr[j] >= 1 || arr[j] == 0){
            console.log("O", j, "numero é positivo")
        }

        else{
            console.log("O", j, "numero é negativo")
        }

    }

    
}
function exercicio15(){
    var arr = []
    console.log("Digite 10 numeros")
    var soma = 0
    for(var i =0; i< 10; i++){
        
        arr.push(parseInt(prompt("Numero:")))
    }
    for(var j = 0; j < 10; j++){

        if(arr[j] < 40){
            soma = soma + arr[j]
        }

    }
    console.log("A soma de todos numeros inferiores a 40 é:", soma)
}
function exercicio18(){

    var x1 = parseInt(prompt("Digite um número:"))
    var arr = []

    for(var i = 1; i != x1+1; i++){
    
        arr.push(parseInt(prompt("NUM DIGITE:")))
       
    }

    console.log("Maior numero:", Math.max.apply(null, arr))
    console.log("Menor numero:", Math.min.apply(null, arr))
    var soma = 0
    for(var j = 0; j<x1; j++){
        soma = soma + arr[j]
    }
    soma = soma/x1
    console.log("Media:",soma)
}