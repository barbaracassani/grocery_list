import axios from 'axios';

export type ItemShape = {
  _id: string;
  description?: string;
  createdAt?: number;
  updatedAt?: number;
  bought: boolean;
};

let axiosInstance = axios.create({
  baseURL: 'http://localhost:4000'
});

const methods = {
  getItems: async (): Promise<ItemShape[]> => {
    const { data } = await axiosInstance.get('list');
    return data;
  },
  postItem: async (dataToPost: Omit<ItemShape, '_id'>): Promise<ItemShape> => {
    const { data } = await axiosInstance.post('list/item', dataToPost);
    return data;
  },
  putItem: async (
    id: string,
    dataToPost: Partial<ItemShape>
  ): Promise<string> => {
    const { data } = await axiosInstance.put(`list/${id}`, dataToPost);
    return data;
  },
  deleteItem: async (id: string): Promise<string> => {
    const { data } = await axiosInstance.delete(`list/${id}`);
    return data;
  }
};
export default methods;
