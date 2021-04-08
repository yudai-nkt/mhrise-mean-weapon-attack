import { Weapon } from "./data/weapons";
import { Item } from "./data/items";
import { Skill, getSkillEffect } from "./data/skills";

export const calcMeanAttack: (
  weapon: Weapon,
  items: Item[],
  skills: Skill[]
) => number = (weapon, items, skills) => {
  const [attackBoost, criticalEye, weaknessExploit, criticalBoost] = skills;
  const buff = items.reduce(
    (accum, curr) => accum + (curr.inUse ? curr.add : 0),
    0
  );
  const attackNonCritical = getSkillEffect(attackBoost)(weapon.attack) + buff;
  const affinity = Math.min(
    getSkillEffect(criticalEye)(
      getSkillEffect(weaknessExploit)(weapon.affinity)
    ),
    100
  );

  return (
    attackNonCritical *
    (1 + (getSkillEffect(criticalBoost)() - 1) * (affinity / 100))
  );
};
