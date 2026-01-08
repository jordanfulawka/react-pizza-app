import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import Button from "../../ui/Button";
import { useEffect, useRef, useState } from "react";
import CustomizePizza from "../../ui/CustomizePizza";

function Menu() {
  const menu = useLoaderData();
  const [isCustomizing, setIsCustomizing] = useState(false);

  return (
    <div>
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
        <div className="pt flex justify-center">
          <Button type="primary" onClick={() => setIsCustomizing(true)}>
            ...Or customize your own!
          </Button>
        </div>
      </ul>
      {isCustomizing && (
        <CustomizePizza onClose={() => setIsCustomizing(false)} />
      )}
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
