import React from 'react';

import { Container,
         Country,
         Image,
         Name,
         Capital,
         Language,
         Population,
} from './styles';

function CountryItem({ filteredCountry }) {
  return (
    <Container>
      {
        filteredCountry.map(country => {
          return <Country key={country.alpha2code}>
            <Image>
              <img src={country.flag} alt="flag"/>
            </Image>
            <Name>
              <h1>{country.name}</h1>
            </Name>
            <Capital>
              <h1><span>Capital: </span>{country.capital}</h1>
            </Capital>
            <Language>
              <h1><span>Languages: </span>{country.languages.map((language) => language.name).join(', ')}</h1>
            </Language>
            <Population>
              <h1><span>Population: </span>{country.population.toLocaleString()}</h1>
            </Population>
          </Country>
        })
      }
    </Container>
  );
}
export default CountryItem;