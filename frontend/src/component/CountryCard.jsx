import { Link } from "react-router-dom";

const CountryCard = ({data}) => { 

  console.log(data._id);

  return (
    <div className='grid gap-x-[5.6rem] grid-cols-4 mx-auto px-2 dark:bg-Dark_200-0'>
    {
      data.map((item)=>
        <div key={item._id} className='border w-72 h-96 rounded-md shadow-xl mb-10 bg-white gap-10  mt-10 cursor-pointer hover:shadow-2xl dark:bg-Dark_100-0 dark:text-Light_200-0 dark:border dark:border-Dark_200-0 dark:shadow-lg dark:hover:shadow-2xl dark:shadow-slate-700 dark:hover:shadow-slate-700'>
            <div className="w-72 h-1/2">
              <Link to={`/Countryinfo/${item._id}`}>
                <img className='rounded-t-md object-cover w-[99.5%] h-[100%]' src={item.flag}  alt={item.name}/>
              </Link>
            </div>
            <div className="w-72 h-1/2 mt-2">
                <h2 className='px-6 py-3 font-bold text-lg'>{item.name}</h2>
                <p className='px-6 py-0 leading-7 font-Nunito'>Population : {item.population}</p>
                <p className='px-6 py-0 leading-7 font-Nunito'>Region : {item.region}</p>
                <p className='px-6 py-0 leading-7 font-Nunito'>Capital : {item.capital}</p>
            </div>
        </div>)
    }
        
    </div>                                                                                               
  )
} 

export default CountryCard