//------------------------------------------------------
// Dependencies 
//------------------------------------------------------
const express = require("express");
const Pokemon = require("../models/pokemon");


//------------------------------------------------------
// Create Router Object 
//------------------------------------------------------
const router = express.Router();


//------------------------------------------------------
// Register Routes w/ the router  
//------------------------------------------------------
router.get("/", (req, res) => {
    res.render("pokemon/index.ejs", {
        pokemons: Pokemon.getAll()
    })
})

//------------------------------------------------------
// Show Route /sode/:id --> page on an individual pokemon
//------------------------------------------------------
router.get("/:id", (req, res) => {
    res.render("pokemon/show.ejs", {
        pokemon: Pokemon.getOne(req.params.id)
    })
})


//------------------------------------------------------
// Export Router 
//------------------------------------------------------
module.exports = router;
