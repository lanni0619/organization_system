const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

const port = 3000;
app.listen(port, () => console.log(`Server is listening on Port ${port}`));

