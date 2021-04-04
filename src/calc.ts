import { Weapon } from "./data/weapons";

export const calcMeanAttack: (weapon: Weapon) => number = (weapon) =>
  weapon.attack * (1 + 0.25 * (weapon.affinity / 100));
