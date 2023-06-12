
var pokemonRepository = (function () {
    let pokemonList = [];
    let pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

    function addPokemon(pokemon) {
        if (typeof pokemon === "object") {
            pokemonList.push(pokemon);
        }
    }

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
            hideLoadingMessage();
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
        showModal(pokemone.name);
    }

    function showLoadingMessage() {
        let loadingDiv = document.createElement('div');
        loadingDiv.classList.add('loadingDiv');
        let pokemonUL = document.querySelector("ul");
        pokemonUL.appendChild(loadingDiv);
    }

    function hideLoadingMessage() {
        let pokemonUL = document.querySelector("ul");
        pokemonUL.firstChild.remove();
    }

    function showModal(pokemonName) {
        let modalContainer = document.querySelector("#modal-container");
        let modal = document.querySelector(".modal");
        let title = document.createElement('h1');
        title.innerText = pokemonName;
        modal.appendChild(title);
        modalContainer.appendChild(modal);
        modalContainer.classList.add("isVisible");
    }

    //to hide modalContainerClose
    let modalContainerClose = document.querySelector(".close");
    modalContainerClose.addEventListener('click', event => {
        hideModal();
    })

    window.addEventListener('keydown', e => {
        let modalContainer = document.querySelector("#modal-container");
        if (e.key === 'Escape' && modalContainer.classList.contains('isVisible')) {
            hideModal();
        }
    })

    let modalContainer = document.querySelector("#modal-container");
    modalContainer.addEventListener('click', e => {
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    })



    function hideModal() {
        let modalContainer = document.querySelector("#modal-container");
        modalContainer.classList.remove("isVisible");
    }



    return {
        addPokemon: addPokemon,
        addListItem: addListItem,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal,
        hideModal: hideModal
    }
}
)();

pokemonRepository.loadList().then(it => {
    pokemonRepository.getAll().forEach(pokemon => {
        pokemonRepository.addListItem(pokemon);
    });
});














