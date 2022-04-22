const createApplication = require("express");
const configs = require("./config");

const app = createApplication();

app.get("/", (req, res) => {
    res.send( "Welcome in the world of Containers!!!");
})

app.get("/greeting", (req, res) => {
    res.send( "Greeting to you");
})


app.listen( configs.PORT, () => {
    console.log("Application started successfully on port : "+ configs.PORT );
});