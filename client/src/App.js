import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import User from './components/User'


function App() {
  const [listOFUsers, setListOFUsers] = useState([])
  const [name,setName] = useState('')
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers').then((response) => {
      setListOFUsers(response.data)
    })
  }, [])

  const createUser = () => {
    axios
    .post('http://localhost:3001/createUser',{name,age,username})
    .then((response)=> {
      alert('User Created!')
      setListOFUsers([...listOFUsers,{name,age,username}])
    })
  }

  return (
    <div className="App">
      <h1>List of Users</h1>
      <div className="grid">

      </div>
  <div>
    {listOFUsers.map((user) => {
      return (
        
        <div className="list">
          <h3>
            Name: {user.name}, Age: {user.age}, username: {user.username}
          </h3>
        </div>
      )
    })}
  </div>
<div>
  <input
  type='text'
  placeholder='Name'
  onChange={(event) => setName(event.target.value)}
  />
  <input
  type='number'
  placeholder='Age'
  onChange={(event) => setAge(event.target.value)}
  />
  <input
  type='text'
  placeholder='Uesrname'
  onChange={(event) => setUsername(event.target.value)}
  />
  <button onClick={createUser}>Create User</button>
</div>
  </div>


  );
}

export default App;
