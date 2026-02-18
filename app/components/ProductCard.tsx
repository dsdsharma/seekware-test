import { selectProduct } from "@/app/store/productSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
export default function ProductCard({ detail }: any) {
  const dispatch = useDispatch();
  const selected = useSelector((state: any) => state.products.selectedProduct);
  const onSelect = () => {
    dispatch(selectProduct(detail));
  };

  return (
    <div
      className={`border p-4 min-h-80 flex gap-2 flex-col w-64 hover:shadow-lg cursor-pointer rounded-md ${selected?.id === detail.id ? "bg-green-300" : ""}`}
      onClick={() => {
        onSelect();
      }}
    >
      <div className="w-full h-28 border overflow-clip bg-white">
        {" "}
        <Image
          src={detail.thumbnail}
          className="object-contain"
          height={200}
          width={200}
          alt="product image"
        />
      </div>
      <span className="font-bold"> {detail.title}</span>
      <span>Rating: {detail.rating}</span>
      <span>Price: {detail.price}</span>
    </div>
  );
}
