export type WeaponType = { name: string; label: string };

export const weaponTypes: WeaponType[] = [
  {
    name: "great-sword",
    label: "大剣",
  } as const,
  {
    name: "long-sword",
    label: "太刀",
  } as const,
  {
    name: "sword-and-shield",
    label: "片手剣",
  } as const,
  {
    name: "dual-blades",
    label: "双剣",
  } as const,
  {
    name: "hammer",
    label: "ハンマー",
  } as const,
  {
    name: "hunting-horn",
    label: "狩猟笛",
  } as const,
  {
    name: "lance",
    label: "ランス",
  } as const,
  {
    name: "gunlance",
    label: "ガンランス",
  } as const,
  {
    name: "switch-axe",
    label: "スラッシュアックス",
  } as const,
  {
    name: "charge-blade",
    label: "チャージアックス",
  } as const,
  {
    name: "insect-glaive",
    label: "操虫棍",
  } as const,
  {
    name: "light-bowgun",
    label: "ライトボウガン",
  } as const,
  {
    name: "heavy-bowgun",
    label: "ヘヴィボウガン",
  } as const,
  {
    name: "bow",
    label: "弓",
  } as const,
];

const foo = weaponTypes.map((weaponType) => weaponType.name);
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
