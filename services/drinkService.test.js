const {
    drinkService,
    drinkServiceId
} = require("./drinkService")

jest.mock("./drinkService.js")

describe("Drink Service Tests", () => {
    test("", async () => {
        const result = await drinkService();
        expect(result).toHaveLength(12);
        expect(result[4].strDrink).toEqual("24k nightmare");
        expect(result[4].strDrinkThumb).toEqual("https://www.thecocktaildb.com/images/media/drink/yyrwty1468877498.jpg");
        expect(result[4].idDrink).toEqual("17060");
    });

    test("Should return a Drink by ID", async () => {
        const result = await drinkServiceId();
        expect(result.idDrink).toEqual("17118");
        expect(result.strDrink).toEqual("Arctic Mouthwash");
        expect(result.strCategory).toEqual("Punch / Party Drink");
        expect(result.strAlcoholic).toEqual("Alcoholic");
    });
})