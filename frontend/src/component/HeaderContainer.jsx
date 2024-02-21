import Filter from "./Filter"
import Search from "./Search"


const HeaderContainer = () => {
  return (
    <div className="flex justify-between">
        <Search/>
        <Filter/>
    </div>
  )
}

export default HeaderContainer