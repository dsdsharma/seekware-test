import axiosInstance from "@/app/lib/axiosInstance";

export const getProductByApi = async () => {
  return await axiosInstance.get("/products");
};
