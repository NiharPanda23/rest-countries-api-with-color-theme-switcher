import Filter from "./Filter"
import Search from "./Search"



const HeaderContainer = (props) => {

  return (
    <div className="flex justify-between">
        <Search  mySearch={props}/>
        <Filter/>
    </div>
  )
}

export default HeaderContainer