import React, { useState, useEffect } from 'react'
import GlobalStyle from './styles'
import SearchBar from './components/SearchBar'
import CountryItem from './components/CountryItem'
import { Container } from './components/styles'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const fetchCountries = async () => {
    const url = "https://restcountries.eu/rest/v2/all"
    const response = await axios.get(url)
    const data = response.data
    setCountries(data)
    console.log(data)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  const allCountries = countries.filter(country => 
    country.name.toLowerCase().includes(search.toLowerCase())  
  )

  const handleChange = e => {
    e.preventDefault()

    setSearch(e.target.value.toLowerCase())
  }


  return (
   <Container>
    <SearchBar onChange={e => handleChange(e)} placeholder="search for a country"/>
    <CountryItem filteredCountry={allCountries}/>
    <GlobalStyle/>
   </Container>
  );
}

export default App;
