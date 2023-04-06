export interface IPokemonNameUrl {
  name: string;
  url: string;
}

export interface IPokemonSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface IPokemonAbility {
  ability: IPokemonNameUrl;
  is_hidden: boolean;
  slot: number;
}

export interface IPokemonGameIndex {
  game_index: number;
  version: IPokemonNameUrl;
}

export interface IPokemonHeldItems {
  item: IPokemonNameUrl;
  version_details: {
    rarity: number;
    version: IPokemonNameUrl;
  }[];
}

export interface IPokemonType {
  slot: number;
  type: IPokemonNameUrl;
}

export interface IPokemonStat {
  base_stat: number;
  effort: number;
  stat: IPokemonNameUrl;
}

export interface IPokemonVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: IPokemonNameUrl;
  version_group: IPokemonNameUrl;
}

export interface IPokemonMove {
  move: IPokemonNameUrl;
  version_group_details: IPokemonVersionGroupDetail[];
}

export interface IPokemon {
  abilities: IPokemonAbility[];
  base_experience: number;
  forms: IPokemonNameUrl[];
  game_indices: IPokemonGameIndex[];
  height: number;
  held_items: IPokemonHeldItems[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IPokemonMove[];
  name: string;
  order: number;
  past_types: IPokemonType[];
  species: IPokemonNameUrl;
  sprites: IPokemonSprites;
  stats: IPokemonStat[];
  types: IPokemonType[];
  weight: number;
}
