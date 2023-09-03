const app = require('./app');
const mongoose = require("mongoose");

const PORT = 8000;
mongoose.connect("mongodb://localhost:27017/express-mongoose", {
}).then(() => {
    app.listen(PORT, () => {
      console.log("database connected");
      console.log(`server is running http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.log('Database not connected');
})