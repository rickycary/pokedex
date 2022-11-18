//------------------------------------------------------
// Dependencies 
//------------------------------------------------------
require("dotenv").config(); // connects to .env file (process.env.PORT)
const express = require("express"); // backend framework 
const morgan = require("morgan"); // logger
const pokemonRouter = require("./controllers/pokemon") // Import the router


//------------------------------------------------------
// Global Variables
//------------------------------------------------------
const PORT = process.env.PORT || 3000


//------------------------------------------------------
// Create Application Object
//------------------------------------------------------
const app = express(); // creates our application object


//------------------------------------------------------
// Middleware
//------------------------------------------------------
app.use(morgan("tiny"));
app.use("/pokemon", pokemonRouter);
app.use("/static", express.static("public"));

//------------------------------------------------------
// Routes
//------------------------------------------------------
app.get("/", (req, res) => {
    res.send("Pokedex is live")
})



//------------------------------------------------------
// Create server Listener
//------------------------------------------------------
app.listen(PORT, (req, res) => {
    console.log(`Server listening on port: ${PORT}`)
});