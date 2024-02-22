import axios from 'axios';
import { useEffect, useState } from 'react';


const CountryCard = () => {

  var [countries, setCountries] = useState([])

  useEffect(()=> {
    axios.get("http://localhost:4000/getAllCountries")
    .then(function(countries) {
      setCountries(countries.data)
      console.log(countries);
    })
    .catch(err => console.log(err))
    
  }, []);
  

  return (
    <div className='w-[1400px] mx-auto flex flex-col'>
    {
        countries.map(country =>{
          <div className='border w-60 h-80 rounded-md shadow-xl mb-10'>
              <div>
                  <img className='rounded-t-md' src={country.flag} alt={country.name} />
              </div>
              <div>
                  <h2 className='px-4 py-3 font-bold text-lg'>{country.name}</h2>
                  <p className='px-4 py-0 leading-7'>Population:{country.population}</p>
                  <p className='px-4 py-0 leading-7'>Region:{country.region}</p>
                  <p className='px-4 py-0 leading-7'>Capital:{country.capital}</p>
              </div>
          </div>
        })}
    </div>
  )
}

export default CountryCard