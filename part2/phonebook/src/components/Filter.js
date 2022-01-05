const Filter = ({filter, handleFilterChange}) => {
  return(
    <div className = 'filter'>
      <p> filter shown with </p> <input value={filter} onChange={handleFilterChange}/>
    </div>
  )
}

export default Filter