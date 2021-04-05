export type WeaponType = { type: string; label: string };

export const weaponTypes: WeaponType[] = [
  {
    type: "Great Sword",
    label: "大剣",
  } as const,
  {
    type: "Long Sword",
    label: "太刀",
  } as const,
  {
    type: "Sword and Shield",
    label: "片手剣",
  } as const,
  {
    type: "Dual Blades",
    label: "双剣",
  } as const,
  {
    type: "Hammer",
    label: "ハンマー",
  } as const,
  {
    type: "Hunting Horn",
    label: "狩猟笛",
  } as const,
  {
    type: "Lance",
    label: "ランス",
  } as const,
  {
    type: "Gunlance",
    label: "ガンランス",
  } as const,
  {
    type: "Switdh Axe",
    label: "スラッシュアックス",
  } as const,
  {
    type: "Charge Blade",
    label: "チャージアックス",
  } as const,
  {
    type: "Insect Glaive",
    label: "操虫棍",
  } as const,
  {
    type: "Light Bowgun",
    label: "ライトボウガン",
  } as const,
  {
    type: "Heavy Bowgun",
    label: "ヘヴィボウガン",
  } as const,
  {
    type: "Bow",
    label: "弓",
  } as const,
];

const foo = weaponTypes.map((weaponType) => weaponType.type);
// const bar = foo as const;

export type Weapon = {
  name: string;
  syllabary: string;
  type: typeof foo[number];
  attack: number;
  affinity: number;
};

export const weapons: Weapon[] = [
  {
    name: "夜行弩【梟ノ眼】",
    syllabary: "ヤコウドフクロウノメ",
    type: "Light Bowgun",
    attack: 180,
    affinity: 40,
  },
  {
    name: "蛮顎弩フラムマヌバ",
    syllabary: "バンガクドフラムマヌバ",
    type: "Light Bowgun",
    attack: 230,
    affinity: -30,
  },
];
