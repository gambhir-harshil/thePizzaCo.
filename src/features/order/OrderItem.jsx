import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 space-y-1">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold text-white">{quantity}&times;</span>{" "}
          <span className="text-yellow-400">{name}</span>
        </p>
        <p className="font-bold text-white">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm italic capitalize text-stone-300">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
