import styles from "./pokemonTypeBadge.module.scss";
import bug from "../../assets/pokemonTypes/bug.svg";
import dark from "../../assets/pokemonTypes/dark.svg";
import dragon from "../../assets/pokemonTypes/dragon.svg";
import electric from "../../assets/pokemonTypes/electric.svg";
import fairy from "../../assets/pokemonTypes/fairy.svg";
import fighting from "../../assets/pokemonTypes/fighting.svg";
import fire from "../../assets/pokemonTypes/fire.svg";
import flying from "../../assets/pokemonTypes/flying.svg";
import ghost from "../../assets/pokemonTypes/ghost.svg";
import grass from "../../assets/pokemonTypes/grass.svg";
import ground from "../../assets/pokemonTypes/ground.svg";
import ice from "../../assets/pokemonTypes/ice.svg";
import normal from "../../assets/pokemonTypes/normal.svg";
import poison from "../../assets/pokemonTypes/poison.svg";
import psychic from "../../assets/pokemonTypes/psychic.svg";
import rock from "../../assets/pokemonTypes/rock.svg";
import steel from "../../assets/pokemonTypes/steel.svg";
import water from "../../assets/pokemonTypes/water.svg";
import { Button } from "../";
import { pokemonTypes } from "../../utils";

type PokemonTypeProps = {
  type: string;
  tabIndex: boolean;
  handleClick?: (e: string) => void;
  button?: boolean;
  openPokemonTypeModal?: (newState: boolean) => void;
  addClassname?: string;
};

export const PokemonBadgeType = ({
  type,
  tabIndex,
  handleClick,
  button,
  openPokemonTypeModal,
  addClassname,
}: PokemonTypeProps) => {
  const [{ name, color }] = pokemonTypes.filter((item) => item.name === type);

  if (button && handleClick) {
    return (
      <Button
        buttonStyle="badge"
        bgColor={color}
        onClick={(e) => handleClick(e.currentTarget.name)}
        name={name}
        addClassname={addClassname}
      >
        <img src={getBadgeImage(name)} alt={name} loading="lazy" />
        {name}
      </Button>
    );
  }

  return (
    <div
      tabIndex={tabIndex ? 0 : -1}
      style={{ background: color }}
      className={styles.badge}
      onClick={handleOnClick}
    >
      <img src={getBadgeImage(name)} alt={name} loading="lazy" />
      {name}
    </div>
  );

  function handleOnClick() {
    openPokemonTypeModal && openPokemonTypeModal(true); // introduces new modal
  }
};

const getBadgeImage = (pokemonType: string) => {
  switch (pokemonType) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return bug;
  }
};
