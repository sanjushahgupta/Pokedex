
//exercise 1.5
var pokemonRepository = (function () {
    let pokemonList = [{
        name: "Caterpie", height: 3, types: ["Bug", "Runway"], weight: 1
    }, {
        name: "Ivysaur", height: 1, types: ["Grass", "poision"], weight: 13
    },
    {
        name: "Persian", height: 12, types: ["Limber", "Unnerve"], weight: 32
    },
    {
        name: "Butterfree", height: 7, types: ["Bug", "Flying"], weight: 32
    }, {
        name: "Gloom", height: 6, types: ["Grass", "Poision"], weight: 9
    }]

    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }
    return {
        add: add,
        getAll: getAll
    }
}
)();

pokemonRepository.getAll().forEach(item => {
    let result = item.height > 9 ? "<b> -Wow that's big!</b>"
        : ""

    document.write(`${item.name} has height of ${item.height} ${result} <br>`);
});








