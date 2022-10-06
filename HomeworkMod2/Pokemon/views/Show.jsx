const React = require("react")
const pokemon = require("../models/pokemon") 

const style = {
    color: "#fff",
    backgroundColor: "#0000",

}
class Show extends React.Component{
    render() {
        const{pokemon}=this.props
        return(
            <div>
                <h1>Gotta Catch 'Em Al</h1>
                <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <img src={pokemon.img} alt={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} />
                <a href="/pokemon"><button>Home</button></a>
            </div>
        )
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

module.exports = Show