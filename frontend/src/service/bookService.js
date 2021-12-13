import AxiosHelper from "../helper/axios";
const url = require("../config/local");

const getBooks = (index) => {
  let token = localStorage.getItem('token')
  let reqobj = {
    method: "get",
    url: url.baseURL + "/book/"+index,
    headers: {
      authorization: `bearer ${token}`,
    }
  };
  return AxiosHelper.get(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const getCartBooks = () => {
  let token = localStorage.getItem('token')
  let reqobj = {
    method: "get",
    url: url.baseURL + "/book/cart",
    headers: {
      authorization: `bearer ${token}`,
    }
  };
  return AxiosHelper.get(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const addCartBooks = (data) => {
  let token = localStorage.getItem('token')
  let reqobj = {
    method: "post",
    url: url.baseURL + "/book/add-to-cart",
    headers: {
      authorization: `bearer ${token}`,
    },
    data:data
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};


const getCustDetails = () => {
  let token = localStorage.getItem('token')
  let reqobj = {
    method: "get",
    url: url.baseURL + "/book/customer-details",
    headers: {
      authorization: `bearer ${token}`,
    }
  };
  return AxiosHelper.get(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const addCustDetails = (data) => {
  let token = localStorage.getItem('token')
  let reqobj = {
    method: "post",
    url: url.baseURL + "/book/customer-details",
    headers: {
      authorization: `bearer ${token}`,
    },
    data:data
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};


/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { getBooks,getCartBooks,getCustDetails,addCustDetails,addCartBooks };
