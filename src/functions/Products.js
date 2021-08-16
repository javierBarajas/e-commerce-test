const axios = require("axios");

const mapProduct = async (products) => {
  return products.map(({ id, title, image, price, category, description }) => ({
    id,
    title,
    img: image,
    price: `$${price}`,
    href: `/Product/${id}`,
    category,
    description,
  }));
};

export const getAll = async () => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then(function ({ data }) {
      return mapProduct(data);
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });
};

export const getID = (id) => {
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then(async function ({ data }) {
      let product = await mapProduct([data]);
      console.log(data);
      return product[0];
    })
    .catch(function (error) {
      console.log(error);
      return [];
    });
};

