export type Skill = {
  name: string;
  label: string;
  effects: ((...x: number[]) => number)[];
  level: number;
};

export const getSkillEffect = (skill: Skill): ((...x: number[]) => number) =>
  skill.effects[skill.level];

export const skills = [
  {
    name: "attack-boost",
    label: "攻撃",
    effects: [
      (attack: number): number => attack,
      (attack: number): number => attack + 3,
      (attack: number): number => attack + 6,
      (attack: number): number => attack + 9,
      (attack: number): number => 1.05 * attack + 7,
      (attack: number): number => 1.06 * attack + 8,
      (attack: number): number => 1.08 * attack + 9,
      (attack: number): number => 1.1 * attack + 10,
    ],
    level: 0,
  },
  {
    name: "critical-eye",
    label: "見切り",
    effects: [
      (affinity: number): number => affinity,
      (affinity: number): number => affinity + 5,
      (affinity: number): number => affinity + 10,
      (affinity: number): number => affinity + 15,
      (affinity: number): number => affinity + 20,
      (affinity: number): number => affinity + 25,
      (affinity: number): number => affinity + 30,
      (affinity: number): number => affinity + 40,
    ],
    level: 0,
  },
  {
    name: "weakness-exploit",
    label: "弱点特効",
    effects: [
      (affinity: number): number => affinity,
      (affinity: number): number => affinity + 15,
      (affinity: number): number => affinity + 30,
      (affinity: number): number => affinity + 50,
    ],
    level: 0,
  },
  {
    name: "critical-boost",
    label: "超会心",
    effects: [
      (): number => 1.25,
      (): number => 1.3,
      (): number => 1.35,
      (): number => 1.4,
    ],
    level: 0,
  },
];
