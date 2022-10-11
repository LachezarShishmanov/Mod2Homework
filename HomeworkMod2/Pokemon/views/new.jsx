const React = require("react")
const pokemon = require("../models/pokemon") 



class New extends React.Component{
    render() {
        //const{pokemon}=this.props
        return(
            <div>
                <h1>Adding a new Pokemon</h1>
                <a href="/pokemon"><button>Home</button></a>
                <form action="/pokemon" method="POST">
                    Name: <input type="text" name = "name"/>
                    Image: <input type="text" name = "img"/>
                    <input type="submit" value = "add new pokemon" />
                </form>
            </div>
        )
    }
}



module.exports = New