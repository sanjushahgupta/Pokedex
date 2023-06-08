
//array of objects
var pokemonList = [{
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


for (var i = 0; i < pokemonList.length; i++) {

    //If height is more than 9 then only print wow that's a big.
    if (pokemonList[i].height > 9) {
        document.write(pokemonList[i].name + " has height of " + pokemonList[i].height + "<b> -Wow that's big!</b><br><br>")
    } else {
        document.write(`${pokemonList[i].name} has a height of ${pokemonList[i].height}.<br><br>`);
    }

}
