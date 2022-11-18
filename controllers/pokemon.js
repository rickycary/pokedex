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
// New Route GET / pokemon/new -> Create form
//------------------------------------------------------
router.get("/new", (req, res) => {
    res.render("pokemon/new.ejs")
})


//------------------------------------------------------
// Create Route POST /pokemon -> Creates a new pokemon, redirect back to index page
//------------------------------------------------------
router.post("/", (req, res) => {
    Pokemon.create(req.body)
    res.redirect("/pokemon")
})


//------------------------------------------------------
// Edit Route GET /pokemon/:id/edit -> Create form to update Pokemon Nickname
//------------------------------------------------------
router.get("/:id/edit", (req, res) => {
    res.render("pokemon/edit.ejs", {
        pokemon: Pokemon.getOne(req.params.id),
        index:req.params.id
    })
})

//------------------------------------------------------
// Update Route Put /pokemon/:id
//------------------------------------------------------
router.put("/:id", (req, res) => {
    Pokemon.update(req.params.id, req.body)
    res.redirect("/pokemon")
    res.json(req.body)
})

//------------------------------------------------------
// Destroy Route Delete
//------------------------------------------------------
router.delete("/:id", (req, res) => {
    Pokemon.destroy(req.params.id)
    res.redirect("/pokemon")
})



//------------------------------------------------------
// Show Route /sode/:id --> page on an individual pokemon
//------------------------------------------------------
router.get("/:id", (req, res) => {
    res.render("pokemon/show.ejs", {
        pokemon: Pokemon.getOne(req.params.id),
        index: req.params.id
    })
})

//------------------------------------------------------
// Export Router 
//------------------------------------------------------
module.exports = router;
