const React = require("react")
const pokemon = require("../models/pokemon") 



class New extends React.Component{
    render() {
        //const{pokemon}=this.props
        return(
            <div>
                <h1>Edit the Pokemon</h1>
                <a href="/pokemon"><button>Home</button></a>
                <form action="/pokemon" method="POST">
                    Name: <input type="text" name = "name" defaultValue={pokemon.name}/>
                    Image: <input type="text" image = "img" defaultValue={pokemon.img}/>
                    <input type="submit" value = "edit pokemon" />
                </form>
            </div>
        )
    }
}
