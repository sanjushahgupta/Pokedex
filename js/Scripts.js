var pokemonRepository = (function () {
    let pokemonList = [];
    let pokeApiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

    function addPokemon(pokemon) {
        if (typeof pokemon === "object") {
            pokemonList.push(pokemon);
        }
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".list-group");
        let pokemonListItem = document.createElement("li");
        let btn = document.createElement("button");

        pokemonListItem.classList.add("list-group-item", "text-center", "border-0");

        btn.setAttribute("data-toggle", "modal");
        btn.setAttribute("data-target", "#exampleModal");
        btn.classList.add("btn-secondary", "mt-1", "p-2", "border-0", "fs-5");

        btn.addEventListener("click", function () {
            showDetails(pokemon);
        });

        btn.innerText = pokemon.name;
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
                    height: item.height,
                    weight: item.weight
                };
                addPokemon(pokemon);
            });
        }).catch(e => {
            hideLoadingMessage();
            console.error(e);
        });
    }


    function loadDetails(pokemon) {
        let detailUrl = pokemon.detailsUrl;
        return fetch(detailUrl).then(response => {
            return response.json();
        }).then(details => {
            pokemon.imageUrl = details.sprites.front_default;
            pokemon.height = details.height;
            pokemon.weight = details.weight;
        }).catch(e => {
            console.error(e);
        });
    }



    var searchItem = () => {
        let searchInput = document.querySelector("#input").value.toLowerCase();
        let listArray = document.querySelectorAll(".list-group-item");

        listArray.forEach(pokemon => {
            let listBtn = pokemon.querySelector(".btn-secondary").innerText.toLowerCase();
            if (listBtn.includes(searchInput)) {
                pokemon.style.display = "inline-block";
            } else {
                pokemon.style.display = "none";
            }
        });
    };

    let searchInput = document.querySelector("#input");
    searchInput.addEventListener("input", () => searchItem());


    function showDetails(pokemon) {
        loadDetails(pokemon).then(() => {
            showModal(pokemon.name, pokemon.height, pokemon.imageUrl, pokemon.weight);
            return pokemon;
        }).catch(() => {
        });
    }

    function showLoadingMessage() {
        let loadingDiv = document.createElement("div");
        loadingDiv.classList.add("spinner-border", "text-light");
        let pokemonUL = document.querySelector("ul");
        pokemonUL.appendChild(loadingDiv);
    }


    function hideLoadingMessage() {
        let pokemonUL = document.querySelector("ul");
        pokemonUL.firstChild.remove();
    }


    function showModal(pokemonName, pokemonHeight, pokemonImage, pokemonWeight) {
        let title = document.querySelector(".modal-title");
        title.innerText = pokemonName.toUpperCase();
        let height = document.querySelector(".pokemonHeight");
        let imgDetails = document.querySelector(".PokomoneImg");
        let weight = document.querySelector(".pokemonWeight");
        weight.innerText = "Weight: " + pokemonWeight + " M";
        height.innerText = "Height: " + pokemonHeight + " KG";
        imgDetails.src = pokemonImage;
    }


    window.addEventListener("keydown", e => {

        let modalContainer = document.querySelector("#exampleModal");
        if (e.key === "Escape" && modalContainer.classList.contains("isVisible")) {
            hideModal();
        }
    });

    let logoRefresh = document.querySelector(".logo");
    logoRefresh.addEventListener("click", () => {
        window.location.reload();
    });

    let modalContainer = document.querySelector("#exampleModal");
    modalContainer.addEventListener("click", e => {

        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });


    function hideModal() {
        let modalContainer = document.querySelector("#exampleModal");
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
    };
}
)();

pokemonRepository.loadList().then(() => {
    pokemonRepository.getAll().forEach(pokemon => {
        pokemonRepository.addListItem(pokemon);
    });
});














