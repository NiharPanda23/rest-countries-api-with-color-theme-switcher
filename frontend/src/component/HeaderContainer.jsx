import Filter from "./Filter"
import Search from "./Search"



const HeaderContainer = ({search}) => {
  return (
    <div className="flex justify-between">
        <Search  mysearch={search}/>
        <Filter/>
    </div>
  )
}

export default HeaderContainer