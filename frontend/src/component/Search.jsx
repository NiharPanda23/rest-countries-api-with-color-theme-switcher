import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="py-10 px-5 flex">
        <button className=" p-3 shadow-xl"><IoIosSearch className="w-5 h-5"/></button>
        <input className="bg-white border-none w-60 h-12 shadow-lg outline-none border-t-2 border px-2 ml-[-5px]" type="search" name="Search" id="Search" placeholder="Search for a country..."/>
    </div>
  )
}
export default Search