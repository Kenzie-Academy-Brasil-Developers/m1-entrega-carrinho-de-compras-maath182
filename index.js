//Crie dinamicamente uma tag main dentro do body. (V)
//Crie uma variável products que é um array de objetos, cada objeto tem um nome e um preço. (V)
//Dentro da tag main você deverá inserir uma lista não ordenada para o array de products. (V)
//Crie uma variável soma, que irá representar a soma total dos itens no carrinho. 
//Crie um botão contendo a string "Finalizar".
//Crie uma section que irá receber a soma e o botão.
//Dentro da tag main, após a lista não ordenada de products, você deverá inserir a section com a soma dos produtos e o botão "Finalizar"
//Todas as tags deverão ser criadas dinamicamente utilizando o DOM



// Criando tag main


const main = document.createElement('main');
const body = document.querySelector('body');
body.appendChild(main);

// criando variavel de produtos

let products = [
    {
        name: 'Mouse',
        price: 40,
        
    },
    {
        name: 'Teclado',
        price: 100,
    },
    {
        name: 'Monitor',
        price: 300,
    },
    {
        name: 'Pc Gamer',
        price: 5000,
    },
    {
        name: 'Caixa de Som',
        price: 250,
    }
]

    //criando a variavel soma

    let soma = 0;

//adicionando a lista de produtos e soma na tag main e dando append na tag main

    function addList(item) {
        item.forEach(element => {
            let ulist = document.createElement('ul');
            let info = document.createElement('li');
            info.innerText = `${element.name} - R$ ${element.price}`;
            
            ulist.appendChild(info);
            main.appendChild(ulist);

            soma += element.price;
        });
    }

    addList(products);

    //criando a section com a soma e o botão

    const section = document.createElement('section');
    const button = document.createElement('button');
    button.innerText = 'Finalizar';
    section.innerText = `Soma: R$ ${soma}`;
    section.appendChild(button);
    main.appendChild(section);





   



