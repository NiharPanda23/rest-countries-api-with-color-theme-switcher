import NavBar from './component/NavBar';
import HeaderContainer from './component/HeaderContainer';
import CountryCard from './component/CountryCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {

  const [countries, setCountries] = useState({})

  useEffect(()=> {
    axios.get("http://localhost:4000/getAllCountries")
    .then(function(countries) {
      setCountries(countries.data)
      console.log(countries);
    })
    .catch(err => console.log(err))
    
  }, []);

  // console.log(countries);

  return (
    <div className='lg:w-[1440px] lg:mx-auto bg-[#fafafa)]'>
      <NavBar/>
      <HeaderContainer />
      <CountryCard  data={countries}/>
    </div>
  )
} 

export default App