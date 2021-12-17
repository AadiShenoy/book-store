import AxiosHelper from "../helper/axios";
const url = require("../config/local");

const getBooks = (index, token) => {
  let reqobj = {
    method: "get",
    url: url.baseURL + "/book/" + index,
    headers: {
      authorization: `bearer ${token}`,
    },
  };
  return AxiosHelper.get(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};

const getCartBooks = (token) => {
  let reqobj = {
    method: "get",
    url: url.baseURL + "/book/cart",
    headers: {
      authorization: `bearer ${token}`,
    },
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
  let token = sessionStorage.getItem("token");
  let reqobj = {
    method: "post",
    url: url.baseURL + "/book/add-to-cart",
    headers: {
      authorization: `bearer ${token}`,
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

const getCustDetails = () => {
  let token = sessionStorage.getItem("token");
  let reqobj = {
    method: "get",
    url: url.baseURL + "/book/customer-details",
    headers: {
      authorization: `bearer ${token}`,
    },
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
  let token = sessionStorage.getItem("token");
  let reqobj = {
    method: "post",
    url: url.baseURL + "/book/customer-details",
    headers: {
      authorization: `bearer ${token}`,
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
const removeCartBook = (id) => {
  let token = sessionStorage.getItem("token");
  let reqobj = {
    method: "delete",
    url: url.baseURL + "/book/cart/" + id,
    headers: {
      authorization: `bearer ${token}`,
    },
  };
  return AxiosHelper.get(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};
const searchBook = (searchVal) => {
  let token = sessionStorage.getItem("token");
  let reqobj = {
    method: "post",
    url: url.baseURL + "/book/search",
    headers: {
      authorization: `bearer ${token}`,
    },
    data: searchVal,
  };
  return AxiosHelper.post(reqobj)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      throw err;
    });
};
const addOrder = (data) => {
  let token = sessionStorage.getItem("token");
  let reqobj = {
    method: "post",
    url: url.baseURL + "/book/create-order",
    headers: {
      authorization: `bearer ${token}`,
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

const removeCart = (id) => {
  let token = sessionStorage.getItem("token");
  let reqobj = {
    method: "delete",
    url: url.baseURL + "/book/cart/",
    headers: {
      authorization: `bearer ${token}`,
    },
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
export default {
  getBooks,
  getCartBooks,
  getCustDetails,
  addCustDetails,
  addCartBooks,
  removeCartBook,
  searchBook,
  addOrder,
  removeCart,
};
