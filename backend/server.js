/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : set up the server and connects to the database
 * @file            : server.js
 * @author          : Adithya S Shenoy
 * @version         : 1.0
 * @since           : 8-Dec-2021
 *
 **************************************************************************/

const express = require("express");
const logger = require("./config/logger.js");
const userRouter = require("./app/routes/user.routes.js");
const bookRouter = require("./app/routes/book.routes.js");
const db = require("./config/dbConnect");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(cors());

app.use(express.json());

app.use("/user", userRouter);
app.use("/book", bookRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//connecting to server
const server = app.listen(process.env.PORT_NUMBER, () => {
  logger.info("Example app listening at port");
  db.dbConnection();
});

module.exports = app;
