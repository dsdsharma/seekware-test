import ProductGrid from "@/app/components/ProductGrid";
import SearchFilter from "@/app/components/SearchFilter";
import SelectedProduct from "@/app/components/SelectedProduct";

export default function Home() {

  return (
   <div>
    <SearchFilter/>
    <SelectedProduct/>
    <ProductGrid />
   </div>
  );
}
