cont = 0
soma = 0
maior = 0
menor = 100

var numsarray = []

function adicionar(){
    var num1 = document.getElementById('numerousu');
    num1 = Number(num1.value);

    // Esse é o comando que barra os números repetidos

    // A array numsarray funcionará como uma espécie de lista de números que ja foram incluídos

    // Basicamente sua logica é a seguinte:
    // Ele checa se na array(numsarray) o número inserido pelo usuário(num1) está incluso(includes)
    // (numsarray.includes(num1)) = Se o número está incluso na lista dos números que ja foram inseridos(numsarray)
    if(numsarray.includes(num1)){
        return alert(`Você já inseriu esse número`)
    }else{
        //Se o número não estiver na lista, ele e inserido na mesma, assim, o usuário não poderá inseri-lo novamente
        numsarray.push(num1)
    }

    add(num1)
}

function add(n1){
    if(n1 == ''){
        return alert(`Insira um número`)
    }else if(n1 > 100 || n1 < 0){
        return alert(`Insira apenas números entre 0 e 100`)
    }else{
        // Cria uma opção para o select com o mesmo valor do número inserido pelo usuário
        var option = document.createElement("option");
        // Define o conteúdo e o valor do n1 (Como uma espécie de document.GetElementById e Number(num1.value) )
        option.text = `${n1}`;
        option.value = n1;
        // Cria uma nova variavel com o ID do select e aplica o valor da variavel "option" toda vez que o usuário aperta o botão
        var selectnums = document.getElementById("numselect");
        selectnums.appendChild(option);

        // Estrutura de condição para verificar o maior/menor número

        // Lógica condição maior:
        // A var "maior" inicialmente tem seu valor 0
        // Sempre que um número maior que o valor da variavel "maior" for inserido, o valor da mesma será substituido
        // Desta forma, o valor da variavel sempre vai aumentar, mesmo que o usuário insira apenas o número 1 (pois todos os números que são possiveis inserir são maiores que 0)
        if(n1 > maior){
            maior = n1
        }

        // Lógica condição menor:
        // A lógica dessa condição funciona da mesma forma que a anterior, a diferença e que a condição é o oposto
        // A var "menor" inicialmente tem seu valor 100
        // Esse valor e substituido toda vez que um número menor que o valor da var "menor" é inserido
        // Portanto, o valor da variavel sempre irá diminuir e ser substituido pelo menor número inserido
        if(n1 < menor){
            menor = n1
        }

        //Contador e soma dos números

        // Toda vez que o usuário aperta o botão, esses comandos são executados
        // O contador aumenta seu valor em 1
        // A "soma" adiciona seu próprio valor a si mesmo + o valor no número do usuário
        // Desta forma a var "soma" sempre irá representar a soma de todos os números da lista
        cont++
        soma = soma + n1
    }
}

// Comandos executados após o usuário prescionar o botão "finalizar"
function finalizar(){
    // Calcula a media dividindo o valor total dos números(soma) pela quantidade de números inseridos(cont)
    media = soma / cont
    var res = document.getElementById('resultado');

    res.innerHTML += `<br>Você inseriu ${cont} números</br>`;
    res.innerHTML += `<br>A soma desses números é ${soma}</br>`;
    res.innerHTML += `<br>O maior número entre eles é ${maior}</br>`;
    res.innerHTML += `<br>O menor número entre eles é ${menor}</br>`;
    res.innerHTML += `<br>A media desses números é ${media}</br>`;
}