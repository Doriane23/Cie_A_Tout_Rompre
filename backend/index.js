const express = require("express");

const app = express();
const PORT = 3310;

const userControllers = require("./src/controllers/userController");

app.post("/users", userControllers.add);
app.get("/users", userControllers.browse);
app.get("/users/:id", userControllers.read);
app.put("/users/:id", userControllers.edit);
app.delete("/users/:id", userControllers.destroy);

app.listen(PORT, () => {
  console.info(`Example app listening on PORT http://localhost:${PORT}`);
});
