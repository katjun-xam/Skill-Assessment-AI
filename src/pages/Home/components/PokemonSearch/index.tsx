import React, { useState } from 'react';
import { PokemonSearchWrapper, SearchResults, StyledButton } from './styles';
import { CallOut, FormCell, FormInputText, ElseIf, If } from 'components';
import { FormRow } from 'components/FormMain/styles';
import { isNotEmptyString } from 'utils/helpers/strings';
import { useGetPokemonByNameQuery } from 'store/api/pokemon/api';
import { isEmptyObject } from 'utils/helpers/objects';
import { useForm } from 'react-hook-form';

const PokemonSearch: React.FunctionComponent = (): JSX.Element => {
  const [pokemonName, setPokemonName] = useState<string>('');
  const [nameParam, setNameParam] = useState<string>('');
  const { register } = useForm();

  // query hook
  const { data, isFetching, error } = useGetPokemonByNameQuery(nameParam, {
    skip: !isNotEmptyString(nameParam),
  });

  const shouldShowImage: boolean = isNotEmptyString(nameParam) && !isFetching && isEmptyObject(error);

  const handlePokemonNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPokemonName(e.target.value);
    setNameParam('');
  };

  const handleSearchPokemon = (): void => {
    setNameParam(pokemonName);
  };

  return (
    <PokemonSearchWrapper>
      <h2 className="title">Search functionality with RTK Query</h2>
      <div className="content">
        <span className="guidanceText">
          This section shows a sample search functionality by using RTK Query.
          <br />
          This will return real data from api endpoint: <a href="https://pokeapi.co/">https://pokeapi.co/</a>
          <br />
          We can integrate existing endpoints easily by using powerful data fetching and caching tools like RTK Query
          and etc.
          <br />
          <br />
          Search for a pokemon by typing it's name or dex #. (e.g: pikachu, bulbasaur, 1, 4)
        </span>
        <FormRow>
          <FormCell cellWidth="70%">
            <FormInputText
              id="pokemonName"
              register={register}
              onChange={handlePokemonNameChange}
              value={pokemonName}
            />
          </FormCell>
        </FormRow>
        <StyledButton
          size="large"
          variant="contained"
          onClick={handleSearchPokemon}
          disabled={!isNotEmptyString(pokemonName) || isFetching}
          disableElevation
        >
          {isFetching ? 'Searching pokemon...' : 'Search Pokemon'}
        </StyledButton>
        <If condition={!isEmptyObject(data)}>
          <SearchResults>
            <If condition={!isEmptyObject(error)}>
              <CallOut>Pokemon not found.</CallOut>
              <ElseIf condition={shouldShowImage}>
                <img width={'200'} src={data?.sprites?.front_default} alt={pokemonName} />
              </ElseIf>
            </If>
          </SearchResults>
        </If>
      </div>
    </PokemonSearchWrapper>
  );
};

export default PokemonSearch;
