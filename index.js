const app = require("./app")

// Connect to MongoDB
const config = require("./config/config");
require("./config/db");

const PORT = config.app.port;

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});