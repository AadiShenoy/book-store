/* ************************************************************************
 * Execution        : cmd> node index.js
 * @descrition      : User Service
 * @file            : userService.js
 * @author          : Adithya S Shenoy
 * @version         : 1.0
 * @since           : 8-Dec-2021
 *
 **************************************************************************/

import AxiosHelper from "../helper/axios";
const url = require("../config/local");

/***
 * @description function to add user details
 * @param takes data
 * @returns response or err
 */
const register = (data) => {
  let reqobj = {
    method: "post",
    url: url.baseURL + "/user",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

/***
 * @description function to make user login
 * @param takes data
 * @returns response or err
 */
const login = (data) => {
  let reqobj = {
    method: "post",
    url: url.baseURL + "/user/login",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

/***
 * @description function for forgot password
 * @param takes data
 * @returns response or err
 */
const forgetPassword = (data) => {
  let reqobj = {
    method: "post",
    url: url.baseURL + "/user/forgot",
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

/***
 * @description function for reset password
 * @param takes data
 * @returns response or err
 */
const resetPassword = (data, token) => {
  let reqobj = {
    method: "post",
    url: url.baseURL + "/user/reset/" + token,
    headers: {
      "Content-type": "application/json",
    },
    data: data,
  };
  console.log(reqobj.url);
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { register, login, forgetPassword, resetPassword };
