import NavBar from "./NavBar";
import india from "../assets/india.png"

const Countryinfo = () => {
  return (
    <div className="w-full h-full bg-Light_100-0 dark:bg-Dark_200-0">
      <div className="lg:w-[1440px] lg:mx-auto bg-Light_200-0 dark:bg-Dark_200-0 dark:shadow-2xl dark:shadow-slate-700">
        <NavBar />
        <div className="w-[1440px] h-full flex">
            <div className="w-[720px] h-full">
             <div className="my-[17.9rem] mx-44 bg-white"> 
              <img src={india} alt="india"  className="w-96 mx-auto border"/>
             </div>
            </div>
            <div className="w-[720px] h-full">
              <div className="w-[650px] my-[14rem]">
                <h1 className="text-4xl mb-8 font-Nunito font-bold mx-2">India</h1>
                <div className="flex justify-between mx-2">
                  <div>
                    <p className="font-bold font-Nunito text-Dark_300-0">Native Name: <span className="font-normal text-Dark_300-0">india</span></p>
                    <p className="mt-6 font-Nunito  font-bold text-Dark_300-0">Population: <span className="font-normal text-Dark_300-0">12386798758656</span></p>
                    <p className="mt-6 font-Nunito  font-bold text-Dark_300-0">Region: <span className="font-normal text-Dark_300-0">Asia</span></p>
                    <p className="mt-6 font-Nunito  font-bold text-Dark_300-0">Sub Region: <span className="font-normal text-Dark_300-0">Asia</span></p>
                    <p className="mt-6 font-Nunito  font-bold text-Dark_300-0">Capital: <span className="font-normal text-Dark_300-0">Delhi</span></p>
                  </div>
                  <div>
                    <p className=" font-bold font-Nunito text-Dark_300-0">Top Level Domain: <span className="font-normal text-Dark_300-0">.do</span></p>
                    <p className="mt-6 font-Nunito  font-bold text-Dark_300-0">Currencies: <span className="font-normal text-Dark_300-0">rupee</span></p>
                    <p className="mt-6 font-Nunito  font-bold text-Dark_300-0">Languages: <span className="font-normal text-Dark_300-0">hindi</span></p>
                  </div>
                </div>
                <div className="flex mx-2 ">
                  <p className="my-6 font-Nunito font-bold text-Dark_300-0">Border countries:</p>
                  <button className="my-5 mx-4 border px-4 py-1 font-Nunito text-Dark_300-0">Country</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Countryinfo