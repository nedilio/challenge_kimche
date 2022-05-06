import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Countries from './Countries';

export const GET_COUNTRIES = gql`
query countries {
    countries {
      code
      name
      emoji
      continent {name}
      languages {
        name
        code
      }
      capital
    }
  }
  `;

// Componente que carga los paises
const Data = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  if (loading) {
    return <h1>Loading ...</h1>
  } else if (error) {
    return <h1>Error</h1>
  }
  
  // Caso especial de Antartica que no tiene idioma se asigna uno.
  data.countries[8].languages[0] = {name: 'English', code:'EN'};
  
  // Paso el resultado como props al componente Data para poder 
  // definir estados y manipular estados dependiendo de los filtros.
  return (
    <Countries countries={data.countries}/>
  )
}

export default Data;