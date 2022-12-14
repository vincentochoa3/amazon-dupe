import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid"
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice"

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();

  const dollarAmount = price.toFixed(2)

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    }

    dispatch(addToBasket(product))
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
      <Image src={image} height={200} width={200} className="self-center object-contain" style={{ width: '200px', height: '200px' }} alt={title} />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(5).fill().map((_, i) =>
          <StarIcon key={i} className="h-5 text-yellow-500" />
        )}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <p className="mb-5">${dollarAmount}</p>
      <div className="flex items-center space-x-2 -mt-5">
        <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
        <p className="text-xs text-gray-500 md:text-sm">FREE Next-day Delivery</p>
      </div>
      <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
    </div>
  )
}

export default Product;
