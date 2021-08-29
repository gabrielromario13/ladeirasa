import api from "../../index";

export const GetAllProducts = () => {
  return api.get(`/product`).then(({ data }) => data);
};
