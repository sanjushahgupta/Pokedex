
var pokemonRepository = (function () {
    let pokemonList = [];
    let pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

    function addPokemon(pokemon) {
        if (typeof pokemon === "object") {
            pokemonList.push(pokemon);
        }
    }

    //for css
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let pokemonListItem = document.createElement("li");
        let btn = document.createElement("button");

        btn.addEventListener('click', function (event) {
            showDetails(pokemon);
        });

        btn.innerText = pokemon.name;
        btn.classList.add('btnPokomonList');
        pokemonListItem.appendChild(btn);
        pokemonList.appendChild(pokemonListItem);

    }

    function getAll() {
        return pokemonList;
    }

    showLoadingMessage();

    function loadList() {
        return fetch(pokeApiUrl).then(response => {
            hideLoadingMessage();
            return response.json();
        }).then(json => {
            hideLoadingMessage();
            json.results.forEach(item => {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                    height: item.height
                };
                addPokemon(pokemon);
            })
        }).catch(e => {
            console.error(e);
        })
    }

    function loadDetails(pokemon) {
        let detailUrl = pokemon.detailsUrl;
        return fetch(detailUrl).then(response => {
            return response.json();
        }).then(details => {
            pokemon.imageUrl = details.sprites.front_default;
            pokemon.height = details.height;
        }).catch(e => {
            console.error(e);
        });
    }

    function showDetails(pokemone) {
        loadDetails(pokemone).then(detail => {
            console.log(pokemone);
            return pokemone;
        }).catch(e => {
            console.error(e);
        })

    }

    function showLoadingMessage() {
        let pokemonList = document.querySelector(".pokemon-list");
        pokemonList.innerText = "Loading";
    }
    function hideLoadingMessage() {
        let pokemonList = document.querySelector(".pokemon-list");
        pokemonList.innerText = "";
    }

    return {
        addPokemon: addPokemon,
        addListItem: addListItem,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails
    }
}
)();

pokemonRepository.loadList().then(it => {
    pokemonRepository.getAll().forEach(pokemon => {
        pokemonRepository.addListItem(pokemon);
    });
});













