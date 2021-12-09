/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : book routes for book url end points
 * @file            : book.router.js
 * @author          : Adithya S Shenoy
 * @version         : 1.0
 * @since           : 8-Dec-2021
 *
 **************************************************************************/

const express = require("express");
const bookController = require("../controllers/book/book.controller");
const bookRoute = express.Router();
const bookMiddleware = require("../middleware/book.middleware.js");

// Retrieve all books
bookRoute.get("/",bookController.findAll);

module.exports = bookRoute;
