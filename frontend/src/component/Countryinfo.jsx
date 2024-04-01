import NavBar from "./NavBar";
import india from "../assets/india.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Countryinfo = () => {
  const { _id } = useParams();
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/getCountryById/${_id}`)
      .then((response) => {
        setSearched(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [_id]);
  console.log(searched);

  return (
    <div className="w-full h-full bg-Light_100-0 dark:bg-Dark_200-0">
      <div className="lg:w-[1440px] lg:mx-auto bg-Light_200-0 dark:bg-Dark_200-0 dark:shadow-2xl dark:shadow-slate-700">
        {searched.map((item) => (
          <div key={item._id} className="w-[1440px] h-full flex border dark:border-Dark_100-0">
            <div className="w-[720px] h-full">
              <div className="mt-[11.7rem] mx-44 bg-white">
                <img src={item.flag} alt="india" className="w-auto h-auto object-fill" />
              </div>
            </div>
            <div className="w-[720px] h-full">
              <div className="w-[650px] my-[11.7rem]">
                <h1 className="text-4xl mb-8 font-Nunito font-bold mx-2 dark:text-Light_100-0">{item.name}</h1>
                <div className="flex justify-between mx-2">
                  <div>
                    <p className="font-bold font-Nunito text-Dark_300-0 dark:text-Light_100-0">Native Name: <span className="font-normal text-Dark_300-0 dark:text-Light_100-0">{item.nativeName}</span></p>
                    <p className="mt-6 font-Nunito  font-bold text-Dark_300-0 dark:text-Light_100-0">Population: <span className="font-normal text-Dark_300-0 dark:text-Light_100-0">{item.population}</span></p>
                    <p className="mt-6 font-Nunito  font-bold text-Dark_300-0 dark:text-Light_100-0">Region: <span className="font-normal text-Dark_300-0 dark:text-Light_100-0">{item.region}</span></p>
                    <p className="mt-6 font-Nunito  font-bold text-Dark_300-0 dark:text-Light_100-0">Sub Region: <span className="font-normal text-Dark_300-0 dark:text-Light_100-0">{item.subregion}</span></p>
                    <p className="mt-6 font-Nunito  font-bold text-Dark_300-0 dark:text-Light_100-0">Capital: <span className="font-normal text-Dark_300-0 dark:text-Light_100-0">{item.capital}</span></p>
                  </div>
                  <div>
                    {item.topLevelDomain.map((domain, i) => (
                      <p key={i} className="font-bold font-Nunito text-Dark_300-0 dark:text-Light_100-0">Top Level Domain: <span className="font-normal text-Dark_300-0 dark:text-Light_100-0">{domain}</span></p>
                    ))}
                    <p className="mt-6 font-Nunito  font-bold text-Dark_300-0 dark:text-Light_100-0">Currencies: 
                    {item.currencies.map((currency, i) => (
                      <span key={i} className="font-normal text-Dark_300-0 dark:text-Light_100-0"> {currency.name}</span>
                    ))}
                    </p>
                    <p className="mt-6 font-Nunito  font-bold text-Dark_300-0 dark:text-Light_100-0">Languages: 
                    {item.languages.map((language, i) =>
                      <span key={i} className="font-normal text-Dark_300-0 dark:text-Light_100-0"> {language.name}</span>
                    )}
                    </p>
                  </div>
                </div>
                <div className="flex mx-2 flex-wrap">
                  <p className="my-6 font-Nunito font-bold text-Dark_300-0 dark:text-Light_100-0">Border countries:</p>
                  {item.borders.map((border, i) => (
                    <div key={i}>
                      <button  className="my-5 mx-[8px] border px-3 py-[2px] font-Nunito text-Dark_300-0 hover:shadow-md dark:text-Light_100-0 dark:border-Dark_100-0 dark:hover:shadow-md dark:hover:shadow-slate-700">{border}</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countryinfo;
