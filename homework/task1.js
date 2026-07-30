const burgersPromise = Promise.resolve([
    {
        name: 'Классический чизбургер',
        weight: 320,
        ingredients: [
            'булочка бриошь',
            'говяжья котлета',
            'сыр чеддер',
            'маринованные огурцы',
            'красный лук',
            'кетчуп',
            'горчица',
        ],
        price: 490,
    },
    {
        name: 'Двойной бекон',
        weight: 450,
        ingredients: [
            'булочка бриошь',
            'две говяжьи котлеты',
            'бекон',
            'сыр чеддер',
            'томат',
            'салат айсберг',
            'соус BBQ',
        ],
        price: 690,
    },
    {
        name: 'Острый халапеньо',
        weight: 360,
        ingredients: [
            'булочка с кунжутом',
            'говяжья котлета',
            'сыр чеддер',
            'халапеньо',
            'красный лук',
            'томат',
            'острый соус',
        ],
        price: 550,
    },
    {
        name: 'Грибной бургер',
        weight: 380,
        ingredients: [
            'булочка бриошь',
            'говяжья котлета',
            'шампиньоны',
            'сыр гауда',
            'карамелизированный лук',
            'руккола',
            'трюфельный соус',
        ],
        price: 620,
    },
    {
        name: 'Куриный бургер',
        weight: 340,
        ingredients: [
            'булочка с кунжутом',
            'куриное филе',
            'сыр чеддер',
            'томат',
            'салат айсберг',
            'маринованные огурцы',
            'чесночный соус',
        ],
        price: 470,
    },
]);

burgersPromise.then(cards =>{
    let cardbox = document.createElement('div');
    let footer = document.querySelector('footer');
    cardbox.style.backgroundColor = 'green';
    cardbox.style.display = 'flex';
    cardbox.style.justifyContent = 'space-around';
    cardbox.style.width = '100%';
    cardbox.style.height = '800px';
    footer.append(cardbox);

    cards.forEach(card => {
        let singleCard = document.createElement('div');
        let singleCardName = document.createElement('h2');
        let singleCardWeight = document.createElement('p');
        let singleCardIngredients = document.createElement('ul');
        let singleCardPrice = document.createElement('p');
        let buyButton = document.createElement('button');



        card.ingredients.forEach(ingredient => {
            let singleCardIngredient = document.createElement('li');
            singleCardIngredient.innerText = ingredient;
            singleCardIngredients.appendChild(singleCardIngredient);
        })

        singleCardName.innerHTML = card.name;
        singleCardWeight.innerHTML = 'Вес продукта ' + card.weight;
        singleCardPrice.innerHTML = 'Цена продукта ' + card.price;
        buyButton.innerHTML = 'Куплять';


        singleCard.style.backgroundColor = 'orange';
        singleCard.style.width = '15%';
        singleCard.style.height = '70%';
        singleCardIngredients.style.display = 'flex';
        singleCardIngredients.style.flexDirection = 'column';
        singleCardIngredients.style.gap = '10px';
        singleCardIngredients.style.listStyle = 'none';
        singleCardIngredients.style.background = '#f5f5f5';
        singleCardIngredients.style.borderRadius = '8px';


        buyButton.addEventListener('click', function() {
            if (!singleCard.hasAttribute('cock')) {

                singleCardName.innerHTML = 'соси хуй'
                singleCardWeight.innerHTML = 'соси хуй'
                singleCardPrice.innerHTML = 'соси хуй'
                singleCard.setAttribute('cock', 'true');
            } else {
                singleCardName.innerHTML = card.name;
                singleCardWeight.innerHTML = 'Вес продукта ' + card.weight;
                singleCardPrice.innerHTML = 'Цена продукта ' + card.price;
                singleCard.removeAttribute('cock');

            }



        })


        cardbox.appendChild(singleCard);
        singleCard.appendChild(singleCardName);
        singleCard.appendChild(singleCardWeight);
        singleCard.appendChild(singleCardIngredients);
        singleCard.appendChild(singleCardPrice);
        singleCard.appendChild(buyButton);




    })
})

