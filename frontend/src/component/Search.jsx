// import { useState } from "react";
// import search from "../assets/search-icon.svg"

// const Search = (props) => {

// const [searchTerm, setSearchTerm] = useState("")


// const onChangeHandler = async(e) => {
//   let keyword = (e.target.value);

//   let result  = await fetch(`http://localhost:4000/getCountryByName/${keyword}`);
//   result = await result.json();
//   if (result){
//     setSearchTerm(result);
//   }
// };

//   return (
//     <div className="w-[20rem] h-11 mt-10 py-2 px-4 border flex justify-between shadow-xl rounded">
//         <img className="w-4 h-4 mt-1 bg-white" src={search} alt="search" onClick={() => {}}/>
//         <input onChange={onChangeHandler} className="outline-none w-64 placeholder:font-normal font-Nunito" type="text" name="Search" id="Search" placeholder="Search for a country..."/>
//     </div>
//   )
// }
// export default Search;