import NavBar from './component/NavBar';
import HeaderContainer from './component/HeaderContainer';
import CountryCard from './component/CountryCard';


const App = () => {

  return (
    <div className='lg:w-[1440px] lg:mx-auto bg-[#fafafa)]'>
      <NavBar/>
      <HeaderContainer />
      <CountryCard />
    </div>
  )
} 

export default App