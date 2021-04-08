export type WeaponType = { name: string; label: string };

export const weaponTypes = [
  {
    name: "great-sword" as const,
    label: "大剣",
  },
  {
    name: "long-sword" as const,
    label: "太刀",
  },
  {
    name: "sword-and-shield" as const,
    label: "片手剣",
  },
  {
    name: "dual-blades" as const,
    label: "双剣",
  },
  {
    name: "hammer" as const,
    label: "ハンマー",
  },
  {
    name: "hunting-horn" as const,
    label: "狩猟笛",
  },
  {
    name: "lance" as const,
    label: "ランス",
  },
  {
    name: "gunlance" as const,
    label: "ガンランス",
  },
  {
    name: "switch-axe" as const,
    label: "スラッシュアックス",
  },
  {
    name: "charge-blade" as const,
    label: "チャージアックス",
  },
  {
    name: "insect-glaive" as const,
    label: "操虫棍",
  },
  {
    name: "light-bowgun" as const,
    label: "ライトボウガン",
  },
  {
    name: "heavy-bowgun" as const,
    label: "ヘヴィボウガン",
  },
  {
    name: "bow" as const,
    label: "弓",
  },
];

const possibleWeaponTypeNames = weaponTypes.map(
  (weaponType) => weaponType.name
);

export type Weapon = {
  name: string;
  syllabary: string;
  type: typeof possibleWeaponTypeNames[number];
  attack: number;
  affinity: number;
};

export const weapons: Weapon[] = [
  {
    name: "夜行弩【梟ノ眼】",
    syllabary: "ヤコウドフクロウノメ",
    type: "light-bowgun",
    attack: 180,
    affinity: 40,
  },
  {
    name: "蛮顎弩フラムマヌバ",
    syllabary: "バンガクドフラムマヌバ",
    type: "light-bowgun",
    attack: 230,
    affinity: -30,
  },
];
