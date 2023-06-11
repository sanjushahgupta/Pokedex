
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
    },
    {
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
    },
    {
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


    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");

        //create li element and button element
        let pokemonListItem = document.createElement("li");
        let btn = document.createElement("button");

        //add click eventListener
        btn.addEventListener('click', function (event) {
            showDetails(pokemon);
        });

        //set innerText to button as pokemon name
        btn.innerText = pokemon.name;

        //adding a class to the button
        btn.classList.add('btnPokomonList');

        //append button as a child to pokemonListItem and pokemonListItem to pokemonList
        pokemonListItem.appendChild(btn);
        pokemonList.appendChild(pokemonListItem);

    }

    //calling this function when button is clicked
    function showDetails(pokemon) {
        console.log(pokemon.name);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        addListItem: addListItem,
        getAll: getAll
    }
}
)();

pokemonRepository.getAll().forEach(pokemon => {
    pokemonRepository.addListItem(pokemon);

});












