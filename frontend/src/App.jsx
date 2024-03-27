import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import NavBar from "./component/NavBar";
import CountryCard from "./component/CountryCard";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";


const App = () => {
  const [countries, setCountries] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [h3value, setH3value] = useState("");



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
          setCountries(response.data);
      })
      .catch((err) => console.log(err));
  };

  const dropDownClickHandler = (e) => {
    const dropDownValue = e.target.textContent;
    axios.get(`http://localhost:4000/getCountriesByRegion/${dropDownValue}`)
    .then((response) => {
      setCountries(response.data) 
    })
  }

  console.log(h3value);

  return (
    <div className="w-full h-full bg-Light_100-0 dark:bg-Dark_200-0">
      <div className="lg:w-[1440px] lg:mx-auto bg-Light_200-0 dark:bg-Dark_200-0 dark:shadow-2xl dark:shadow-slate-700">
        <NavBar />
        <div className="flex justify-between px-2">
          <div className="w-[30rem] h-11 mt-10 py-2 px-4 border flex justify-between hover:shadow-xl rounded bg-Light_200-0 text-Dark_300-0 dark:bg-Dark_100-0 dark:text-Light_200-0 dark:border-Dark_200-0 dark:outline-Dark_200-0 dark:shadow-lg dark:shadow-slate-700 dark:hover:shadow-xl dark:hover:shadow-slate-700">
            <IoSearch className="mt-[0.3rem]"/>
            <input
              onChange={onChangeHandler}
              className="outline-none w-[27rem] ml-2 pl-2 placeholder:font-normal font-Nunito bg-Light_200-0 dark:bg-Dark_100-0 "
              type="text"
              name="Search"
              id="Search"
              placeholder="Search for a country..."
            />
          </div>
          
          <div className="mt-10 bg-white border w-60 rounded-tl rounded-tr px-3 py-2 flex justify-between align-middle hover:shadow-xl relative text-Dark_300-0 dark:bg-Dark_100-0 dark:text-Light_200-0 dark:shadow-slate-700 dark:shadow-lg dark:hover:shadow-xl dark:border-Dark_200-0 dark:hover:shadow-slate-700">
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
            {isActive && 
              <div className="bg-white border absolute top-12 flex flex-col items-start rounded-bl rounded-br px-3 py-2 w-60 right-0 left-0 hover:shadow-xl dark:bg-Dark_100-0 dark:border-Dark_200-0">
                  <div className="py-1 hover:bg-blue-100 w-full px-1 rounded">
                    <h3  onClick={dropDownClickHandler} id="dropDown" className="dark:hover:text-Dark_300-0">Asia</h3>
                  </div>
                  <div className="py-1 hover:bg-blue-100 w-full px-1 rounded">
                    <h3  onClick={dropDownClickHandler} id="dropDown" className="dark:hover:text-Dark_300-0">Europe</h3>
                  </div>
                  <div className="py-1 hover:bg-blue-100 w-full px-1 rounded">
                    <h3  onClick={dropDownClickHandler} id="dropDown" className="dark:hover:text-Dark_300-0">Africa</h3>
                  </div>
                  <div className="py-1 hover:bg-blue-100 w-full px-1 rounded">
                  <h3  onClick={dropDownClickHandler} id="dropDown" className="dark:hover:text-Dark_300-0">Oceania</h3>
                  </div>
                  <div className="py-1 hover:bg-blue-100 w-full px-1 rounded">
                  <h3  onClick={dropDownClickHandler} id="dropDown" className="dark:hover:text-Dark_300-0">Antarctic Ocean</h3>
                  </div>
              </div>}
          </div>
        </div>
        <CountryCard data={countries}/>
      </div>
    </div>
  );
};

export default App;`  `
