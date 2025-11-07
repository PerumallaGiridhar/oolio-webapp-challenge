import { apiClient } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Image {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Product {
  id: string;
  image: Image;
  name: string;
  category: string;
  price: number;
}

const fetchProducts = async () => {
  const response = await apiClient.get<Product[]>("/product");
  return response.data;
};

const useProductsQuery = () => {
  const dataQuery = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  return dataQuery;
};

export default useProductsQuery;
