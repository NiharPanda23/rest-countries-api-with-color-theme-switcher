import React from 'react'

const CountryCard = () => {
  return (
    <div className='w-[1400px] mx-auto'>
        <div className='border w-60 h-80 rounded-md shadow-xl li'>
            <div>
                <img className='rounded-t-md' src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_1280.png" alt="india" />
            </div>
            <div>
                <h2 className='px-4 py-3 font-bold text-lg'>India</h2>
                <p className='px-4 py-0 leading-7'>Population:</p>
                <p className='px-4 py-0 leading-7'>Region:</p>
                <p className='px-4 py-0 leading-7'>Capital:</p>
            </div>
        </div>
    </div>
  )
}

export default CountryCard