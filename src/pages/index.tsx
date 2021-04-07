import {
  Text,
  Checkbox,
  Heading,
  UnorderedList,
  ListItem,
  Link,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
} from "@chakra-ui/react";
import { useState, useCallback, ChangeEvent } from "react";

import { calcMeanAttack } from "../calc";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { items as initialItems, Item } from "../data/items";
import { weaponTypes, weapons, Weapon } from "../data/weapons";

const Index = () => {
  const [weaponType, setWeaponType] = useState<string | undefined>(undefined);
  const [weapon, setWeapon] = useState<Weapon | undefined>(undefined);
  const [items, setItems] = useState<Item[]>(initialItems);
  const onChangeWeaponType = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setWeaponType(event.target.value);
    },
    [weaponType]
  );
  const onChangeWeapon = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setWeapon(weapons.find((weapon) => weapon.name === event.target.value));
    },
    [weapon]
  );
  const onChangeItems = useCallback(
    (event: ChangeEvent<HTMLInputElement>, index: number) => {
      setItems(
        items.map((item, idx) => {
          if (idx === index) {
            item.inUse = event.target.checked;
          }
          return item;
        })
      );
    },
    [items]
  );

  return (
    <Container height="100vh">
      <Main>
        <UnorderedList>
          <ListItem>
            武器・アイテム・スキルを選択すると会心攻撃を考慮した攻撃力の期待値が計算されます．
          </ListItem>
          <ListItem>
            最終強化武器のみ対応しています．途中段階の武器に対応する予定はありません．
          </ListItem>
          <ListItem>
            不具合や間違いなどは
            <Link
              color="teal.500"
              href="https://github.com/yudai-nkt/mhrise-mean-weapon-attack/issues"
              isExternal
            >
              GitHubのIssue
            </Link>
            までご報告ください．Pull Requestも歓迎します．
          </ListItem>
        </UnorderedList>
        <Select placeholder="武器種を選択" onChange={onChangeWeaponType}>
          {weaponTypes.map(({ name, label }) => (
            <option value={name}>{label}</option>
          ))}
        </Select>

        <Select placeholder="武器を選択" onChange={onChangeWeapon}>
          {weapons
            .filter((weapon) => weapon.type === weaponType)
            .sort((a, b) => (a.syllabary > b.syllabary ? 1 : -1))
            .map((weapon) => (
              <option value={weapon.name}>{weapon.name}</option>
            ))}
        </Select>
        <Stack>
          <Heading size={"md"}>アイテム</Heading>
          {items.map((item, idx) => (
            <Checkbox onChange={(e) => onChangeItems(e, idx)}>
              {item.label}
            </Checkbox>
          ))}
        </Stack>

        <Stack spacing={3}>
          <Heading size={"md"}>スキル</Heading>
          <Heading as="h2" size={"sm"}>
            攻撃
          </Heading>
          <Slider defaultValue={0} min={0} max={7} step={1}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Heading as="h2" size={"sm"}>
            見切り
          </Heading>
          <Slider defaultValue={0} min={0} max={7} step={1}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Heading as="h2" size={"sm"}>
            超会心
          </Heading>
          <Slider defaultValue={0} min={0} max={3} step={1}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Heading as="h2" size={"sm"}>
            弱点特効
          </Heading>
          <Slider defaultValue={0} min={0} max={3} step={1}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Stack>

        <Text
          fontSize={"xx-large"}
          position="sticky"
          align="right"
          bottom={0}
          opacity={1}
          backgroundColor="white"
        >
          攻撃力期待値：{weapon ? calcMeanAttack(weapon, items).toFixed(2) : 0}
        </Text>
      </Main>

      <DarkModeSwitch />
    </Container>
  );
};

export default Index;
