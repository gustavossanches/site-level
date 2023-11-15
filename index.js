//Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria função para isso.


/*
arrayNovo = [3, 2, 1]
const arrayCrescente = (array)=> {

    let maior = 0
    let meio = 0
    let menor = 0
    
    if(array[0] > array[1] && array[1] > array[2]){
        maior = array[0]
        meio = array[1]
        menor = array[2]
    } else if(array[1] > array[0] && array[0] > array[2]){
        maior = array[1]
        meio = array[0]
        menor = array[2]
    } else if(array[2] > array[1] && array[1] > array[0]){
        maior = array[2]
        meio = array[1]
        menor = array[0]
    } else{
        maior = array[2]
        meio = array[0]
        menor = array[1]
    }
    array = [menor, meio, maior]
    
    console.log(array)
    
}

arrayCrescente(arrayNovo)
*/

const arrayn = [3, 2,1,5,6,8]

const crescente = (array) => {
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length; j++) {

            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }


            console.log(array)

        }
    }
}

crescente(arrayn)