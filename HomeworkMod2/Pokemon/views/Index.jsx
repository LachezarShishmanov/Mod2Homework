const React = require("react")
const pokemon = require("../models/pokemon") 

const style = {
    color: "#fff",
    backgroundColor: "#0000",

}
class Index extends React.Component{
    render() {
        return(
            <div>
                <h1>Pokemon</h1>
                <ul>
                   {pokemon.map((pokemon, idx) => (
                     <li>{capitalizeFirstLetter(pokemon.name)}{" "}<img src={pokemon.img} /></li>
                   ))} 
                </ul>
            </div>
        )
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

module.exports = Index