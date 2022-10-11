const express = require("express")
const morgan = require("morgan")
const pokemon = require("./models/pokemon")


const app=express()
const PORT = 3000

app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.get("/", (req, res) =>{
    res.send("Welcome to the Pokemon App")
})
app.get("/pokemon", (req, res)=> {
    res.render("Index",{pokemon})
})


app.get("/pokemon/new", (req, res)=> {
    res.render("New",{pokemon: pokemon})
})
app.get("/pokemon/:id", (req, res) =>{
    const{id} = req.params
    res.render("Show",{pokemon:pokemon[id]})
})
app.post('/pokemon', (req, res) =>{
    pokemon.push(req.body)
    res.redirect('/pokemon')
})

app.put('/pokemon/edit', (req, res) =>{
    const {id} = req.params
    pokemon.push(req.body)
    res.redirect('/pokemon')
})

app.get('/pokemon/edit', (req, res) =>{
    const {id} = req.params
    //pokemon[id].push(req.body)
    res.redirect('/pokemon')
})

app.listen(PORT, () =>{
    console.log(`server is running${PORT}`)
})