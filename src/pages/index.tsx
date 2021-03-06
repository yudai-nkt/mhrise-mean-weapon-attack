import {
  Text,
  Checkbox,
  Flex,
  Heading,
  UnorderedList,
  ListItem,
  Link,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { useState, useCallback, ChangeEvent } from "react";

import { calcMeanAttack } from "../calc";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { items as initialItems, Item } from "../data/items";
import { weaponTypes, weapons, Weapon } from "../data/weapons";
import { skills as initialSkills } from "../data/skills";

const Index = (): JSX.Element => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [weaponType, setWeaponType] = useState<string | undefined>(undefined);
  const [weapon, setWeapon] = useState<Weapon | undefined>(undefined);
  const [items, setItems] = useState<Item[]>(initialItems);
  const [skills, setSkills] = useState(initialSkills);
  const onChangeWeaponType = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setWeaponType(event.target.value);
    },
    []
  );
  const onChangeWeapon = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setWeapon(weapons.find((weapon) => weapon.name === event.target.value));
    },
    []
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
  const onChangeSkills = useCallback(
    (skillLevel: number, index: number) => {
      setSkills(
        skills.map((skill, idx) => {
          if (idx === index) {
            skill.level = skillLevel;
          }
          return skill;
        })
      );
    },
    [skills]
  );

  return (
    <Container>
      <Main>
        <Heading as="h1" size="lg">
          MHRise??????????????????????????????
        </Heading>
        <UnorderedList>
          <ListItem>
            ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </ListItem>
          <ListItem>
            ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </ListItem>
          <ListItem>
            ??????????????????????????????
            <Link
              color="teal.500"
              href="https://github.com/yudai-nkt/mhrise-mean-weapon-attack/issues"
              isExternal
            >
              GitHub???Issue
            </Link>
            ??????????????????????????????Pull Request?????????????????????
          </ListItem>
        </UnorderedList>

        <Heading size={"md"}>??????</Heading>
        <Select placeholder="??????????????????" onChange={onChangeWeaponType}>
          {weaponTypes.map(({ name, label }) => (
            <option value={name} key={name}>
              {label}
            </option>
          ))}
        </Select>

        <Select placeholder="???????????????" onChange={onChangeWeapon}>
          {weapons
            .filter((weapon) => weapon.type === weaponType)
            .sort((a, b) => (a.syllabary > b.syllabary ? 1 : -1))
            .map((weapon) => (
              <option value={weapon.name} key={weapon.name}>
                {weapon.name}
              </option>
            ))}
        </Select>
        <Stack>
          <Heading size={"md"}>????????????</Heading>
          <Checkbox
            key="check-all-items"
            isIndeterminate={
              items.some((item) => item.inUse) &&
              !items.every((item) => item.inUse)
            }
            onChange={(e) =>
              setItems(
                items.map((item) => {
                  item.inUse = e.target.checked;
                  return item;
                })
              )
            }
          >
            {"???????????????"}
          </Checkbox>
          {items.map((item, idx) => (
            <Checkbox
              key={item.label}
              isChecked={item.inUse}
              onChange={(e) => onChangeItems(e, idx)}
            >
              {item.label}
            </Checkbox>
          ))}
        </Stack>

        <Stack spacing={3}>
          <Heading size={"md"}>?????????</Heading>
          {skills.map((skill, idx) => (
            <>
              <Heading as="h2" size={"sm"}>
                {skill.label}
              </Heading>{" "}
              <Flex>
                {" "}
                <Slider
                  defaultValue={0}
                  min={0}
                  max={skill.effects.length - 1}
                  focusThumbOnChange={false}
                  step={1}
                  value={skill.level}
                  onChange={(level) => onChangeSkills(level, idx)}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb fontSize="sm" boxSize="24px" />
                </Slider>
                <NumberInput
                  size="md"
                  width="75px"
                  ml="1.25rem"
                  min={0}
                  max={skill.effects.length - 1}
                  value={skill.level}
                  onChange={(_, level) => onChangeSkills(level, idx)}
                >
                  <NumberInputField min={0} max={skill.effects.length - 1} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Flex>
            </>
          ))}
        </Stack>

        <Text
          fontSize={"xx-large"}
          position="sticky"
          align="right"
          bottom={3}
          borderRadius={8}
          paddingRight={3}
          opacity={1}
          _after={{
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: 8,
            backgroundColor: isDark ? "gray.700" : "gray.200",
            opacity: 0.8,
            zIndex: -1,
          }}
          zIndex={1}
        >
          ?????????????????????
          {weapon ? calcMeanAttack(weapon, items, skills).toFixed(2) : 0}
        </Text>
      </Main>

      <DarkModeSwitch />
    </Container>
  );
};

export default Index;
