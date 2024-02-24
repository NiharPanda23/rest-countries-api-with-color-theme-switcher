


const CountryCard = ({data}) => {

  

  
  console.log(data)

  return (
    <div className=' flex flex-wrap w-[1440px] mx-auto '>
  {/* {

    data.map((item)=> 
      <h2>{item.name}</h2>
    )
  } */}
    {
      data.map((item)=>
        <div className='border w-72 h-96 rounded-md shadow-xl mb-10 bg-white mx-8 mt-10 cursor-pointer hover:shadow-2xl'>
            <div className="w-72 h-1/2">
                <img className='rounded-t-md object-cover w-[100%] h-[100%]' src={item.flag}  alt={item.name}/>
            </div>
            <div className="w-72 h-1/2 mt-2">
                <h2 className='px-6 py-3 font-bold text-lg'>{item.name}</h2>
                <p className='px-6 py-0 leading-7'>Population : {item.population}</p>
                <p className='px-6 py-0 leading-7'>Region : {item.region}</p>
                <p className='px-6 py-0 leading-7'>Capital : {item.capital}</p>
            </div>
        </div>)
    }
        
    </div>                                                                                               
  )
}

export default CountryCard