/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : user model creates user schema and performs db operation
 * @file            : order.model.js
 * @author          : Adithya S Shenoy
 * @version         : 1.0
 * @since           : 8-Dec-2021
 *
 **************************************************************************/

const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    productId:{ type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    
  },
  {
    timestamps: true,
  }
);

const order = mongoose.model("Order", productSchema);
