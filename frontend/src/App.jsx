import NavBar from "./component/NavBar";
import CountryCard from "./component/CountryCard";
import axios from "axios";
import search from "./assets/search-icon.svg";
import { useEffect, useState } from "react";

const App = () => {
  const [countries, setCountries] = useState({});

  

  useEffect(() => {
    axios
      .get("http://localhost:4000/getAllCountries")
      .then(function (countries) {
        setCountries(countries.data);
        
      })
      .catch((err) => console.log(err));
  }, []);

  const onChangeHandler = async (e) => {
    let keyword = e.target.value;
    axios.get(`http://localhost:4000/getCountryByName/${keyword}`)
    .then(function(response) { 
      if (!response) {
        setCountries(countries.data);
      }else{
        setCountries(response.data)
      }
    })
    .catch((err) => console.log(err));

  };

  return (
    <div className="lg:w-[1440px] lg:mx-auto bg-[#fafafa)]">
      <NavBar />
      <div className="flex justify-between">
        <div>
          <div className="w-[20rem] h-11 mt-10 py-2 px-4 border flex justify-between shadow-xl rounded">
            <img
              className="w-4 h-4 mt-1 bg-white"
              src={search}
              alt="search"
            />
            <input
              onChange={onChangeHandler}
              className="outline-none w-64 placeholder:font-normal font-Nunito"
              type="text"
              name="Search"
              id="Search"
              placeholder="Search for a country..."
            />
          </div>
        </div>
        <div></div>
      </div>
      <CountryCard data={countries}/>
    </div>
  );
};

export default App;
