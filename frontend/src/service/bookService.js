import AxiosHelper from "../helper/axios";
const url = require("../config/local");

const getBooks = () => {
  let reqobj = {
    method: "get",
    url: url.baseURL + "/book",
  };
  return AxiosHelper.get(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { getBooks };
