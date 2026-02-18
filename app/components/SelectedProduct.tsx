"use client";
import ProductCard from "@/app/components/ProductCard";
import { useSelector } from "react-redux";

export default function SelectedProduct() {
  const selected = useSelector((state: any) => state.products.selectedProduct);
  return (
    selected && (
      <div>
        <span>Selected Product</span>
        
        <ProductCard detail={selected}/>
      </div>
    )
  );
}
