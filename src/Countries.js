import React from "react";
import Country from './Country';
import FilterInput from "./FilterInput";
import GroupBy from "./GroupBy";

class Countries extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilter = this.handleFilter.bind(this);
      this.groupBy = this.groupBy.bind(this);
      this.handleGroupByContinent = this.handleGroupByContinent.bind(this);
      this.handleGroupByLanguage = this.handleGroupByLanguage.bind(this);
  
      // Estado inicial del componente, paises a mostrar y Agrupar por defecto por continente.
      this.state = {
        countries: [],
        groupBy: 'Continent',
      }
    }
  
    // Filtra por nombre de pais introducido en el input
    handleFilter(e) {
      const unfilteredCountries = this.props.countries;
  
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
        // Al borrar todas las letras del input limpia el state de paises filtrados
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
  // Para agrupar por idiomas decidi usar solo el primero en la lista ya que hay paises que tienen varios idiomas
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
      return (
        <div>
            <FilterInput handleFilter={this.handleFilter} />
            <GroupBy 
                groupBy={this.state.groupBy}
                handleGroupByLanguage={this.handleGroupByLanguage}
                handleGroupByContinent={this.handleGroupByContinent}
            />
          <div className='countries'>
            {this.state.countries.length>0 ? <h2>Countries by {this.state.groupBy}</h2> : <p>no hay paises</p> }
            
            {/* Iterar por elementos del filtro */}
            {groupByArray.map((item)=> {
              return(
                <div className="wrapper" key={item}>
                  <h3>{item}</h3>
                    {/* Filter para saber cuales paises cumplen con el item de agrupar y luego map para renderizar cada pais */}
                    { this.state.countries.filter((country) => {
                      return (country.continent.name === item || country.languages[0].name ===item)}).map((country) => {
                          return <Country key={country.code} country={country}/>
                      })
                    }

                </div>
              )
            })}
          </div>
        </div>
      )
    }
  }

  export default Countries;