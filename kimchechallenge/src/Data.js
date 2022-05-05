import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const GET_COUNTRIES = gql`
query countries {
    countries {
      code
      name
      emoji
      continent {name}
      languages {name}
      capital
    }
  }
  `;

// Componente que carga los paises
const Countries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  if (loading) {
    return <h1>Loading ...</h1>
  } else if (error) {
    return <h1>Error</h1>
  }
// Paso el resultado como props al componente Data para poder definir estados y manipular estados dependiendo de los filtros.
  return (
    <Data countries={data.countries}/>
  )
}

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.groupBy = this.groupBy.bind(this);
    this.handleGroupByContinent = this.handleGroupByContinent.bind(this);
    this.handleGroupByLanguage = this.handleGroupByLanguage.bind(this);

    // Estado inicial del componente
    this.state = {
      countries: [],
      groupBy: 'Continent',
    }
  }

  // Filtra por nombre de pais introducido en el input
  handleFilter(e) {
    const unfilteredCountries = this.props.countries;
    unfilteredCountries[8].languages[0] = {name: 'English'};
    const filter = e.currentTarget.value.toLowerCase();
    if (filter) {
      this.setState(() => ({
        countries: unfilteredCountries.filter((pais) => {
          // Coincidencia exacta desde el inicio
          return pais.name.toLowerCase().match('^'+filter)
          
          //Coincidencia parcial en cualquier lugar del string, más flexible.
          // Ejemplo: si venezuela apareciera como Republica Bolivariana de Venezuela.
          // return pais.name.toLowerCase().indexOf(filter)>-1
        })
      }))
    } else {
      this.setState(()=>({countries:[]}));
    }
  }

  // Dependiendo del atributo para agrupar en el estado creamos un array con los diferentes items ya sea de continente o de idioma desde los paises ya filtrados
  groupBy() {
    const countries = this.state.countries;
    if (this.state.groupBy === 'Continent') {
      return [...new Set(countries.map(country => country.continent.name))].sort(); 
    } 
    else if (this.state.groupBy === 'Language') {
      console.log(countries);

      return [...new Set(countries.map(country => country.languages[0].name))].sort(); 
    }
  }
// Cambia el atributo a agrupar ya sea a continente o idioma haciendo click
  handleGroupByContinent() {
    this.setState(() => ({groupBy:'Continent'}));
    this.groupBy();
  }
  handleGroupByLanguage() {
    this.setState(() => ({groupBy:'Language'}));
    this.groupBy();
  }
  
  render() {
    const groupByArray = this.groupBy();
    console.log('ejecutando render');
    return (
      <div>
        <div className="filter-input">
          <input type="text" onChange={this.handleFilter}/>
        </div>
        <div className="group-buttons">
          <button disabled={this.state.groupBy === 'Continent'} onClick={this.handleGroupByContinent}>Order by Continent</button>
          <button disabled={this.state.groupBy === 'Language'} onClick={this.handleGroupByLanguage}>Order by Language</button>
        </div>
        <div>
          <h2>Countries by {this.state.filterBy}</h2>
          {groupByArray.map((item)=> {
            return(
              <div key={item}>
                <h3>{item}</h3>
                { this.state.countries.map((country) => {
                // Si agrupamos por continentes
                  if (country.continent.name === item) {
                    return (
                      <div className="country" key={country.code}>
                        <h4> <span>{country.emoji}</span>{country.name}</h4> 
                        {country.capital && <p>Capital: {country.capital}</p>}
                        
                        <p>Language: {country.languages[0].name}</p>

                      </div>
                    )
                  } 
                  // Agrupando por idioma
                  else if (country.languages[0].name === item){
                    return (
                      <div className="country" key={country.code}>
                        <h4> <span>{country.emoji}</span>{country.name}</h4>
                        <p>More info</p>

                      </div>
                    )
                  }
                })}

              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Countries;