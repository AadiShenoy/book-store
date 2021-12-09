/* ************************************************************************
 * Execution        : 1. default node  cmd> nodemon server.js
 * @descrition      : get the values from the controller and process them for the books in book store
 * @file            : book.service.js
 * @author          : Adithya S Shenoy
 * @version         : 1.0
 * @since           : 8-Dec-2021
 *
 **************************************************************************/

const bookModel = require("../models/product.model");

class bookService {
  /**
   * @description Service layer function to find all book
   * @param {callback} callback
   * @returns err or data
   */
   findAll = async () => {
    try {
      const data = await bookModel.findAll();
      return data;
    } catch (error) {
      throw error;
    }
  };
}
module.exports = new bookService();
