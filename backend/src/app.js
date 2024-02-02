const express = require("express");

const app = express();

/**
 * Creation de notre CRUD
 * à la racine
 *
 * Create = POST
 * Read = GET
 * Update = (PATCH)/PUT
 * Delete = DELETE
 */

const userControllers = require("./controllers/userController");
const sayHelloMiddleware = require("./services/sayHello");

app.post("/users", userControllers.add);
app.get("/users", sayHelloMiddleware, userControllers.browse);
app.get("/users/:id", userControllers.read);
app.put("/users/:id", userControllers.edit);
app.delete("/users/:id", userControllers.destroy);

module.exports = app;
