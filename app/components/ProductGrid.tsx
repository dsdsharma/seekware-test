"use client";
import ProductCard from "@/app/components/ProductCard";
import { getProductByApi } from "@/app/requests/productRequests";
import { updateProducts } from "@/app/store/productSlice";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductGrid() {
  const productList = useSelector((state: any) => state.products.list);
  const dispatch = useDispatch();
    const getProductDateCallback = useCallback(async () => {
    const { data } = await getProductByApi();
    // we can get products out again if we use other propertied in future.
    dispatch(updateProducts(data.products));
  }, [dispatch]);

  

  
  useEffect(() => {
    getProductDateCallback();
  }, []);

  // const filteredList = useMemo(()=>{
  //     return productList.filter((item)=>)
  // },[productList])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 m-4 gap-5 ">
      {productList.map((item: any,) => (
        <ProductCard detail={item} key={item.id}/>
      ))}
    </div>
  );
}
