const Filter = () => {
  return (
    <div className="py-10 px-5">
        <select className="outline-none w-60 px-2 py-2 shadow-xl " name="country" id="country">
            <option value="Filter by Region">Filter by Region</option>
            <option value="">Africa</option>
            <option value="">America</option>
            <option value="">Asia</option>
            <option value="">Europe</option>
            <option value="">Oceania</option>
        </select>
    </div>
  )
}

export default Filter