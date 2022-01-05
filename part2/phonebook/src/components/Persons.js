const Persons = ({filteredPersons}) => {
  return(
    <div className='persons'>
      {filteredPersons.map(person => 
        <Person key = {person.id} person = {person}/>
      )}
    </div>
  )
}
  
const Person = ({person}) => {
  return(
    <div className='person'>
      <p> {person.name} {person.number} </p>
    </div>
  )
}

export default Persons