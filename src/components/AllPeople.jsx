import { useEffect, useState } from 'react'
import Person from './Person'

export default function AllPeople() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api?results=3")
    .then(res => res.json())
    .then(data => {
      setPeople(data.results);
    })
  }, []);

  console.log("All the people are", people);

  return <div>
    <h1>Persons</h1>
    {
        people.map((p, i) => {
            return <Person key={i} name={p.name.first + " " + p.name.last} email={p.email} pic={p.picture.large}/>
        })
    }
  </div>
}