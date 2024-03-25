import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import NavBar from "./component/NavBar";
import CountryCard from "./component/CountryCard";
import axios from "axios";
import search from "./assets/search-icon.svg";
import { useEffect, useState } from "react";

const App = () => {
  const [countries, setCountries] = useState({});
  const [isActive, setIsActive] = useState(false);

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
    axios
      .get(`http://localhost:4000/getCountryByName/${keyword}`)
      .then(function (response) {
        if (!response) {
          setCountries(countries.data);
        } else {
          setCountries(response.data);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="lg:w-[1440px] lg:mx-auto bg-[#fafafa)]">
      <NavBar />
      <div className="flex justify-between">
        <div>
          <div className="w-[30rem] h-11 mt-10 py-2 px-4 border flex justify-between hover:shadow-xl rounded">
            <img className="w-4 h-4 mt-1 bg-white" src={search} alt="search" />
            <input
              onChange={onChangeHandler}
              className="outline-none w-[27rem] ml-2 pl-2 placeholder:font-normal font-Nunito"
              type="text"
              name="Search"
              id="Search"
              placeholder="Search for a country..."
            />
          </div>
        </div>
        <div className="mt-10 bg-white border w-60 rounded-tl rounded-tr px-3 py-2 flex justify-between align-middle hover:shadow-xl relative">
          <button
            className="w-full flex justify-between font-Nunito font-medium"
            onClick={() => setIsActive((prev) => !prev)}
          >
            Filter by Region
            {isActive ? (
              <MdKeyboardArrowUp className="mt-1" />
            ) : (
              <MdKeyboardArrowDown className="mt-1" />
            )}
          </button>
          {isActive && <div className="bg-white border absolute top-12 flex flex-col items-start rounded-bl rounded-br px-3 py-2 w-60 right-0 left-0 hover:shadow-xl">
          {
             countries.filter((country, i) => countries.findIndex((c) => c.region === country.region) === i)
              .map((country, i) => (
                <div key={i} className="py-1 hover:bg-blue-100 w-full px-1 rounded">
                  <h3 >{country.region}</h3>
                </div>
              ))
          }
          </div>}
        </div>
      </div>
      <CountryCard data={countries}/>
    </div>
  );
};

export default App;
