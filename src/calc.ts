import { Weapon } from "./data/weapons";
import { Item } from "./data/items";

export const calcMeanAttack: (weapon: Weapon, items: Item[]) => number = (
  weapon,
  items
) => {
  const buff = items.reduce(
    (accum, curr) => accum + (curr.inUse ? curr.add : 0),
    0
  );

  return (weapon.attack + buff) * (1 + 0.25 * (weapon.affinity / 100));
};
