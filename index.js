const app = require("./app")

const PORT = 4040;
app.get("/", (req, res)=>{
    res.send("Welcome to the My Daily Task API");
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});