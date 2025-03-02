require ("dotenv").config();

const dev = {
    app:{
        port: process.env.PORT || 4040
    },
    db:{
        url: process.env.DB_URL || "mongodb://localhost27017/taskDB",
    }
}