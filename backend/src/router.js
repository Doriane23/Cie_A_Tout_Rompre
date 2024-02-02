const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import userControllers module for handling item-related operations
const userControllers = require("./controllers/userController");

// Route to get a list of items
router.get("/user", userControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", userControllers.read);

// Route to add a new item
router.post("/items", userControllers.add);

/* ************************************************************************* */

module.exports = router;
