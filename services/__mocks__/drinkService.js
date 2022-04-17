const drinkService = () => {
    console.log("Random Mixed Mocktail");
    return Promise.resolve([
        {
            "strDrink": "1-900-FUK-MEUP",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg",
            "idDrink": "15395"
        },
        {
            "strDrink": "110 in the shade",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg",
            "idDrink": "15423"
        },
        {
            "strDrink": "151 Florida Bushwacker",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg",
            "idDrink": "14588"
        },
        {
            "strDrink": "155 Belmont",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
            "idDrink": "15346"
        },
        {
            "strDrink": "24k nightmare",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg",
            "idDrink": "17060"
        },
        {
            "strDrink": "252",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg",
            "idDrink": "15288"
        },
        {
            "strDrink": "3 Wise Men",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wxqpyw1468877677.jpg",
            "idDrink": "13899"
        },
        {
            "strDrink": "3-Mile Long Island Iced Tea",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
            "idDrink": "15300"
        },
        {
            "strDrink": "410 Gone",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xtuyqv1472669026.jpg",
            "idDrink": "13581"
        },
        {
            "strDrink": "50/50",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg",
            "idDrink": "14598"
        },
        {
            "strDrink": "501 Blue",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/ywxwqs1461867097.jpg",
            "idDrink": "17105"
        },
        {
            "strDrink": "57 Chevy with a White License Plate",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
            "idDrink": "14029"
        }
    ])
}

const drinkServiceId = (id) => {
    console.log("Mixed Mocktail ID");
    return Promise.resolve(
        {
            "idDrink": "17118",
            "strDrink": "Arctic Mouthwash",
            "strCategory": "Punch / Party Drink",
            "strAlcoholic": "Alcoholic"
        }
    );
}

module.exports = {
    drinkService,
    drinkServiceId
}