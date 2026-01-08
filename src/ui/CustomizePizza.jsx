import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addItem, getCart } from "../features/cart/cartSlice";

const availableIngredients = [
  "Cheese",
  "Pepperoni",
  "Mushrooms",
  "Onions",
  "Olives",
  "Green Peppers",
  "Sausage",
  "Bacon",
  "Pineapple",
  "Spinach",
];

function CustomizePizza({ onClose }) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const scrollToBottom = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  function handleAddToCart() {
    const newItem = {
      pizzaId: "test",
      name,
      quantity: 1,
      unitPrice: 1,
      totalPrice: 1 * 1,
    };
    dispatch(addItem(newItem));
    // dispatch(getCart());
  }

  function handleToggleIngredient(ingredient) {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((ing) => ing !== ingredient)
        : [...prev, ingredient],
    );
  }

  function handleSubmit() {
    console.log("Custom pizza ingredients:", selectedIngredients);
    onClose(); // Close the customization panel
  }

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Customize Your Pizza</h2>
      <div className="grid grid-cols-2 gap-4">
        {availableIngredients.map((ingredient) => (
          <button
            key={ingredient}
            className={`rounded-full border px-4 py-2 ${
              selectedIngredients.includes(ingredient)
                ? "bg-yellow-400 text-white"
                : "bg-white text-stone-700"
            }`}
            onClick={() => handleToggleIngredient(ingredient)}
          >
            {ingredient}
          </button>
        ))}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button type="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button type="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
        <div ref={ref} />
      </div>
    </div>
  );
}

export default CustomizePizza;
