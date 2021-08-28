import api from '../../index';

export const GetAllProducts = () => {
  return api.post(
    `/product`,
  );
};